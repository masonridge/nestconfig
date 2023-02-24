import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
export const app = registerAs('app', () => ({
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_USER: process.env.DATABASE_USER,
}));

export const appConfigValidationSchema = {
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  DATABASE_USER: Joi.string().required(),
};
