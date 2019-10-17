module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'src/styles/', 'index.js'],
  setupFilesAfterEnv: ['<rootDir>/test-utils/setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['node_modules', '.cache', 'cypress'],
  transform: {
    '^.+\\.js?$': '<rootDir>/jest-preprocess.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
}
