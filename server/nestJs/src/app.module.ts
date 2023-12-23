import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './models/user/users.module';
import { AuthModule } from './models/auth/auth.module';
import { MysqlDatabaseProviderModule } from './providers/database/mysql/provider.module';

@Module({
  imports: [
    MysqlDatabaseProviderModule,
    UsersModule, 
    AuthModule,
  ],
  controllers: [AppController],
})

export class AppModule {}
