// module.exports = require('@stemn/jest-config');

module.exports = {
  transform: { '\.tsx?$': 'ts-jest', },
  testRegex: '/__tests__/.*\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverage: false,
  roots: ["./src"],
  testPathIgnorePatterns: [
    '/build/',
    '/node_modules/',
  ],
  testEnvironment: `node`,
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
}
