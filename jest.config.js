module.exports = {
  displayName: {
    name: 'Pages',
    color: 'blue',
  },
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/mocks/fileMock.js',
  },
  testPathIgnorePatterns: [],
  setupFilesAfterEnv: ['<rootDir>/packages/landing/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$':
      '<rootDir>/packages/landing/node_modules/babel-jest',
  },
};
