import { Injectable } from '@nestjs/common';
import * as Config from 'config';
import Joi from 'joi';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
interface IAppConfig {
  serverName: string;
  hostName: string;
  hostPort: number;
}

@Injectable()
export class AppConfigService implements IAppConfig {
  private readonly config: Config;
  get serverName(): string {
    return this.config.get('server.name');
  }
  get hostName(): string {
    return this.config.get('server.name');
  }
  get hostPort() {
    return this.config.get<number>('server.port');
  }
  get globalDbConfig() {
    const l: SqlServerConnectionOptions = {
      ...this.config.get<SqlServerConnectionOptions>('db.global'),
    };

    const l1 = this.config.get('db.global');

    const { type, host, username, password } = l;
    console.log(type, host, username, password);
    console.log('hello', l1);

    return this.config.util.toObject(l);
  }

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
