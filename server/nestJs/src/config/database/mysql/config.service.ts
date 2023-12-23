import { Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MysqlConfigService {
  constructor(private configService: ConfigService) { }

  get db(): string {
    return this.configService.get('app.db');
  }

  get user(): string {
    return this.configService.get('app.user');
  }

  get pass(): string {
    return this.configService.get('app.pass');
  }

  get port(): number {
    return Number(this.configService.get('app.port'));
  }

  get host(): number {
    return Number(this.configService.get('app.host'));
  }
}