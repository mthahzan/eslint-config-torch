module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    'prettier/prettier': 'error',
    "import/order": [
      "error",
      {
        groups: [["external", "builtin"], "internal", ["parent", "sibling", "index"]],
        "newlines-between": "always",
      },
    ],
  },
};
