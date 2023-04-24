module.exports = {
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
};
