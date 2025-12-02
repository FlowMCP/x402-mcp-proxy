export default {
    testEnvironment: 'node',
    transform: {},
    verbose: false,
    roots: [ './tests' ],
    collectCoverageFrom: [
        'src/**/*.mjs'
    ],
    coverageThreshold: {
        'src/**/*.mjs': {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0
        }
    },
    coverageReporters: [ 'text', 'lcov', 'html' ]
}
