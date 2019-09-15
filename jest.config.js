module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', 'src/styles/', 'index.js'],
  setupFilesAfterEnv: ['<rootDir>/test-utils/setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['node_modules', '.cache', 'cypress'],
  transform: {
    '^.+\\.js?$': '<rootDir>/jest-preprocess.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
}
