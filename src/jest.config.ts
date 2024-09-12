import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/?(*.)+(spec|test).ts'], // Para que busque pruebas en archivos .ts
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default config;
