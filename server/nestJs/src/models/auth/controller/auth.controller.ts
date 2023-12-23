
import { 
  Controller, 
  UseGuards, 
  Post, 
  HttpCode, 
  HttpStatus, 
  UseInterceptors, 
  Body, 
  ClassSerializerInterceptor 
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { RegisterDto, LoginDto } from '../dto';
import { ILoginResponse, IRegisterResponse } from '../interfaces/auth.interface';
import { AppError } from '../../../common/utils/error';

@Controller('api')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/auth/signup')
  @HttpCode(HttpStatus.CREATED)
  signup(@Body() newUser: RegisterDto): Promise<IRegisterResponse | AppError> {
    return this.authService.signup(newUser)
  }

  @Post('/auth/signin')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  signin(@Body() credentials: LoginDto): Promise<ILoginResponse> {
    return this.authService.signin(credentials);
  }
}
