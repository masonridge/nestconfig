import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appConfigValidationSchema } from './app.config';
import { ConfigModule } from './config';

@Module({
  imports: [
    ConfigModule,
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   ignoreEnvFile: false,
    //   validationSchema: Joi.object({
    //     ...appConfigValidationSchema,
    //     // NODE_ENV: Joi.string()
    //     //   .valid('development', 'production', 'test')
    //     //   .default('development'),
    //     // DATABASE_USER: Joi.string().required(),
    //   }),
    //   validationOptions: { abortEarly: true, debug: true },
    //   envFilePath: process.env.NODE_ENV
    //     ? `.env.${process.env.NODE_ENV}`
    //     : '.env',
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
