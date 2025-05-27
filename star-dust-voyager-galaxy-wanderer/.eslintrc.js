module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Add prettier last to override other formatting rules
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Report Prettier violations as ESLint errors
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    // Add other rules as needed
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', 'build/'], // Ignore build outputs and dependencies
};
