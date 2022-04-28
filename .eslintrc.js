module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
  },
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.jsx', '.ts', '.tsx'],
      },
    },
  },
};
