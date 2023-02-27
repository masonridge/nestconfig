import { Module, Global } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
import { ConfigService } from './config.service';

@Global()
@Module({
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class ConfigModule {}
