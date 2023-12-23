import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../user/users.module';
import { AuthService } from './service/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './controller/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfigModule } from '../../config/database/mysql/config.module';
import { UserEntity } from '../user/entity/users.entity';

@Module({
  imports: [
    UsersModule, 
    PassportModule, 
    MysqlConfigModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, // put this value in env file to hide the jwt secret
      signOptions: { expiresIn: '10h' },
    }),
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule { }
