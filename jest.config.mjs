/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  transform: {
    '^.+\\.js': 'babel-jest',
  },

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "mts",
    "cts",
    "tsx",
    "json",
    "node"
  ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  testRegex: [
    "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$"
  ],
};

export default config;
