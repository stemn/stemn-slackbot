module.exports = {
  transform: { '\.tsx?$': 'ts-jest', },
  testRegex: '\\w\\.spec\\.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageDirectory: "./coverage/",
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
