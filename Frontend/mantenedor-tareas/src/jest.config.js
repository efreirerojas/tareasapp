module.exports = {
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '^.+\\.(css|less|scss)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    transformIgnorePatterns: [
        'node_modules/(?!(axios)/)',
      ],
  };