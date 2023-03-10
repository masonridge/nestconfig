import { Controller, Get } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { app } from './app.config';
import { AppService } from './app.service';
import { ConfigService } from './config';
import { AppConfigService } from './config/app-config.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: AppConfigService,
  ) {}

  @Get()
  getHello(): string {
    // const inf = this.configService.get('DATABASE_USER');
    // const test = this.configService.get<number>('server.port');
    // const test = this.configService.get('version');
    // const test = this.configService.get<object>('db.global');
    // const test = this.configService.cfg.get<object>('db.global');
    // const test = this.configService.getEnv('NODE_CONFIG_DIR');
    // const test = this.configService.hostName;
    const test = this.configService.globalDbConfig;

    console.log(
      `Reading DATABASE_USER env variable: ${process.env.DATABASE_USER}`,
    );
    console.log(
      `Reading DATABASE_USER env variable: ${process.env.DATABASE_PASSWORD}`,
    );
    // console.log(`Reading DATABASE_USER env variable from svc: ${inf}`);
    console.log(`NODE_ENV env variable: ${process.env.NODE_ENV}`);
    console.log(`EXT_MODULES env variable2: ${process.env.EXT_MODULES}`);
    // console.log(`EXT_MODULES env variable2: ${JSON.stringify(test)}`);
    console.log(`EXT_MODULES env variable2: ${test}`);
    console.log(process.env.server);

    return this.appService.getHello();
  }
}
