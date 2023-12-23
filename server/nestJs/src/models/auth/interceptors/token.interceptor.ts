import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import { AuthService } from "../service/auth.service";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Response } from "express";
import { CookieOptions } from "express";
import { AuthConfig } from "../config/auth.config";
import { UserEntity } from "../../user/entity/users.entity";


@Injectable()
export class TokenInterceptor implements NestInterceptor {
  private options: CookieOptions;

  constructor(
    private readonly authService: AuthService,
    config: ConfigService<AuthConfig, true>,
  ) {
    this.options = config.get('cookie');
  }
  intercept(
    context: ExecutionContext,
    next: CallHandler<UserEntity>,
  ): Observable<UserEntity> {
    const response = context.switchToHttp().getResponse<Response>();

    return next.handle().pipe(
      map((user) => {
        const token = this.authService.generateToken(user);

        response.cookie(process.env.TOKEN_COOKIE_NAME, token, this.options);

        return user;
      }),
    );
  }
}