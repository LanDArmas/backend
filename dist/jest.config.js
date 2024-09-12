"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/?(*.)+(spec|test).ts'], // Para que busque pruebas en archivos .ts
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
exports.default = config;
