import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  // This tells Jest to process TS/TSX/JS/JSX files using SWC
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {}],
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Mock CSS/SCSS modules so Jest doesn't choke on style imports
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1', // match vite alias if you have one
  },

  // Run setup after env for custom matchers like toBeInTheDocument()
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
