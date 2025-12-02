export default {
    testEnvironment: 'node',
    transform: {},
    extensionsToTreatAsEsm: [ '.mjs' ],
    testMatch: [
        '**/tests/**/*.test.mjs',
        '**/tests/**/*.spec.mjs'
    ],
    collectCoverageFrom: [
        'src/**/*.mjs',
        '!src/**/*.test.mjs',
        '!src/**/*.spec.mjs'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: [ 'text', 'lcov', 'html' ],
    moduleFileExtensions: [ 'mjs', 'js', 'json' ],
    testPathIgnorePatterns: [ '/node_modules/' ],
    verbose: false
}
