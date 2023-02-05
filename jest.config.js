export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    "\\.[t]sx?$": ["ts-jest", {
      tsconfig: "./tsconfig.jest.json"
    }],
  }
};
