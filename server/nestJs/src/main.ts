import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as bodyParser from "body-parser";
import * as morgan from 'morgan';
import * as cors from "cors";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(helmet());
  app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  await app.listen(3000);
}
bootstrap();
