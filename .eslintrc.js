module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'react-app',
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
  rules: {
    'max-len': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.jsx', '.tsx'] },
    ],
    'linebreak-style': ['error', 'windows'],
    'react/prop-types': 'off',
    'spaced-comment': [
      'error',
      'always',
      { markers: ['/ <reference'] },
    ],
    'react/jsx-props-no-spreading': ['off'],
    // React公式ではプロパティの値省略は非推奨のため
    // https://ja.reactjs.org/docs/jsx-in-depth.html#props-default-to-true
    'react/jsx-boolean-value': ['error', 'always'],
    'no-console': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
