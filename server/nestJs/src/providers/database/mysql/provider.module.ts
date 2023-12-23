import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { MysqlConfigModule } from "../../../config/database/mysql/config.module";
import { MysqlConfigService } from "../../../config/database/mysql/config.service";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MysqlConfigModule],
      useFactory: async (mysqlConfigService: MysqlConfigService) => ({
        "type": "mysql",
        "host": mysqlConfigService.host,
        "port": mysqlConfigService.port,
        "username": mysqlConfigService.user,
        "password": mysqlConfigService.pass,
        "database": mysqlConfigService.db,
        "entities": ["dist/**/**.entity{.ts,.js}"],
        "synchronize": true
      }),
      inject: [MysqlConfigService]
    } as TypeOrmModuleAsyncOptions)
  ]
})

export class MysqlDatabaseProviderModule { }