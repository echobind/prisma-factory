module.exports = {
  preset: "ts-jest",
  rootDir: "tests",
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react",
      },
    },
  },
};
