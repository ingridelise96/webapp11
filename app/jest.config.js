// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    collectCoverageFrom: ['src/**/*.js?(x)'],
    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],

    setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // The glob patterns Jest uses to detect test files
    testMatch: ['<rootDir>/test/AnswerForm.spec.jsx'],
};
