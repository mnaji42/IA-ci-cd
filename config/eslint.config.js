module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "no-unused-vars": "warn",
    "no-console": "off",
  },
  ignorePatterns: ["node_modules/", "dist/", "build/"],
}
