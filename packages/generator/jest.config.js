module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  // collectCoverage: !!`Boolean(process.env.CI)`,
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['/templates/'],
  modulePathIgnorePatterns: ['<rootDir>/tmp', '<rootDir>/dist'],
  testTimeout: 30000,
  // TODO enable threshold
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },

  globals: {
    'ts-jest': {
      tsConfig: 'test/tsconfig.json',
    },
  },
}
