import { Injectable } from '@nestjs/common';
import * as Config from 'config';

@Injectable()
export class ConfigService {
  private readonly config: Config;

  constructor() {
    this.config = Config;
    console.log(
      'NODE_CONFIG_DIR: ' + this.config.util.getEnv('NODE_CONFIG_DIR'),
    );
    console.log(this.config);
  }

  get<T = string>(key: string): T {
    return this.config.get<T>(key);
  }

  getEnv(key: string): string {
    return this.config.util.getEnv(key);
  }

  has(key: string): boolean {
    return this.config.has(key);
  }
}
