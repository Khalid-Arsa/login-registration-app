import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  db: process.env.DATABASE,
  user: process.env.USERNAME,
  pass: process.env.PASSWORD,
  port: process.env.PORT,
  host: process.env.HOST,
}))