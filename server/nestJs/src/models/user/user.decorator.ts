import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UserEntity } from './entity/users.entity';

export const AuthUser = createParamDecorator(
  (data: keyof UserEntity, ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest<Request>().user as UserEntity;

    return data ? user && user[data] : user;
  },
);