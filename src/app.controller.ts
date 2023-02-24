import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { app } from './app.config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    const inf = this.configService.get('DATABASE_USER');
    const test = app;
    console.log(
      `Reading DATABASE_USER env variable: ${process.env.DATABASE_USER}`,
    );
    console.log(
      `Reading DATABASE_USER env variable: ${process.env.DATABASE_PASSWORD}`,
    );
    console.log(`Reading DATABASE_USER env variable from svc: ${inf}`);
    console.log(`NODE_ENV env variable: ${process.env.NODE_ENV}`);
    console.log(`NODE_ENV env variable2: ${test}`);

    return this.appService.getHello();
  }
}
