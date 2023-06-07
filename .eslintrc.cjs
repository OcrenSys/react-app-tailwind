module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/triple-slash-reference": "off",
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
      },
    },
  ],
};
