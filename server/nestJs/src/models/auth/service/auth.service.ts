import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, LoginDto } from '../dto';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { AppError } from '../../../common/utils/error';
import { UserEntity } from '../../user/entity/users.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { ILoginResponse, IRegisterResponse } from '../interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private jwtService: JwtService
  ) { }

  async verifyCredentials(
    credentials: Required<LoginDto>,
    property: string,
  ): Promise<boolean> {
    const where: FindOptionsWhere<UserEntity> = {};

    where['email'] = credentials.email

    const user = await this.userRepository.findOneBy(where);

    if (!user) return false;

    if (property !== 'password') return true;

    return user.checkPassword(credentials.password);
  }

  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) return null;

    const passwordValid = await user.checkPassword(password)

    if (user && passwordValid) {
      return user;
    }
  }

  async verifyPayload(payload: JwtPayload): Promise<UserEntity> {
    let user: UserEntity;

    try {
      user = await this.userRepository.findOne({ where: { email: payload.sub } });
    } catch (error) {
      throw new UnauthorizedException(
        `There isn't any user with email: ${payload.sub}`,
      );
    }
    delete user.password;

    return user;
  }

  async generateToken(user: UserEntity): Promise<string> {
    const payload = {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      address: user.address,
      phone_number: user.phone_number,
      email: user.email
    }

    return this.jwtService.sign(payload);
  }

  async signin(credentials: LoginDto): Promise<ILoginResponse> {
    const data = await this.userRepository.findOneOrFail({
      where: {
        email: credentials.email,
      },
    });
    const token = await this.generateToken(data)

    return {
      success: true,
      message: "Successfully Signin",
      token,
      data
    }
  }

  async signup(newUser: RegisterDto): Promise<IRegisterResponse | AppError> {
    try {
      // check uniqueness of username/email
      const isUserExist = await this.userRepository
        .createQueryBuilder('user')
        .where('user.email = :email', { email: newUser.email })
        .getOne()

      if (isUserExist) {
        return new AppError('Username and email must be unique.', 400)
      }

      const error = await validate(newUser);

      if (error.length > 0) {
        return new AppError('Input data validation failed', 400, error)
      } else {
        const createUser = this.userRepository.create(newUser)
        const savedUser = await this.userRepository.save(createUser);
        return {
          success: true,
          message: "Create user successfully",
          savedUser
        }
      }
    } catch (error: any) {
      console.log("Error: ", error)
    }
  }
}
