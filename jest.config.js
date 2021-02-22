module.exports = {
  // verbose: true,
  // transform: { "^.+\\.js$": "babel-jest" },
  globals: {
    NODE_ENV: "test",
  },
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx,mjs}"],
  setupFiles: [
    "<rootDir>/config/polyfills.js",
    "<rootDir>/node_modules/regenerator-runtime/runtime",
    "<rootDir>/src/extendPrototypes.tsx",
  ],
  testMatch: [
    "<rootDir>/src/**/?(*.)test.{js,jsx,ts,tsx,mjs}",
  ],
  testEnvironment: "jsdom", // because of react-data-grid i use 'jsdom' instead of 'node'
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx|ts|tsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|mjs)$",
    "node_modules/(?!graphql)/",
    "node_modules",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
  },
  modulePathIgnorePatterns: ["exports", "export_entities"],
  moduleFileExtensions: ["web.js", "js", "jsx", "json", "web.jsx", "ts", "tsx", "mjs", "node"],

  collectCoverage: true,
}
