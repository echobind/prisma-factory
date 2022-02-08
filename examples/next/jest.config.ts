import type { Config } from '@jest/types';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+test.[jt]s?(x)'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^pages/(.*)$': '<rootDir>/pages/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
    'test-utils': '<rootDir>/test/utils',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
