import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();

    service = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('returns a configuration value', () => {
    expect(service.get('server.name')).toBe('DIT API Test');
  });

  it('throws if configuration value does not exist', () => {
    expect(() => service.get('abc.123')).toThrow();
  });

  it('returns an environment variable value', () => {
    expect(service.getEnv('NODE_ENV')).toBeDefined();
  });

  it('returns undefined if environment variable has no value', () => {
    expect(service.getEnv('abc.123')).toBeUndefined();
  });

  it('checks if a key has been configured', () => {
    expect(service.has('abc.123')).toBeFalsy();
    expect(service.has('server.name')).toBeTruthy();
  });
});
