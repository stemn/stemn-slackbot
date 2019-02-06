module.exports = {
  transform: { '\.tsx?$': 'ts-jest', },
  collectCoverage: false,
  testRegex: '\\w\\.spec\\.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageDirectory: ".coverage",
  coverageReporters: ['text', 'text-summary'],
  testEnvironment: "node",
  coverageThreshold: {
    global: {
      statements: 90,
      lines: 90,
      functions: 90
    }
  },
  testPathIgnorePatterns: [
    '/build/',
    '/node_modules/'
  ]
}
