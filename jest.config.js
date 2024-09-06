// jest.config.js
module.exports = {
  testEnvironment: 'node', // Configura el entorno de pruebas para Node.js
  transform: {
    '^.+\\.ts$': 'ts-jest', // Configura Jest para transpilar archivos TypeScript
  },
  moduleFileExtensions: ['js', 'ts'], // Extensiones de archivo que Jest debe reconocer
  testMatch: ['**/?(*.)+(spec|test).ts'], // Patrones para encontrar archivos de prueba
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Archivo de configuración adicional
};
