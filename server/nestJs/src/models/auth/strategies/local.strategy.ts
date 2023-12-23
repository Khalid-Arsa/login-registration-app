import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local";
import { AuthService } from "../service/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passReqToCallback: false,
    });
  }

  async validate(
    email: string,
    password: string
  ): Promise<any> {
    const user = await this.authService.validateUser(email, password)
    
    if (!user) {
      throw new HttpException('Invalid username or password', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }
}