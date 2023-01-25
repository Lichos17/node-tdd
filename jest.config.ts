module.exports = {

  roots: ['<rootDir>/src/_tests_'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  // coverageProvider: "v8",
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}
