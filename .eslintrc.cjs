module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'public'],
  plugins: ['simple-import-sort', '@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'react/display-name': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      // {
      //   selector: 'variable',
      //   format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      //   leadingUnderscore: 'allow',
      // },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        types: ['array'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        custom: {
          match: true,
          regex: '[s|List|S|LIST]$',
        },
      },
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // `react` first, `next` second, then packages starting with a character
          ['^react$', '^[a-z]'],
          // Packages starting with `@`
          ['^@'],
          // Packages starting with `~`
          ['^~'],
          // Packages starting with `~/pages`
          ['^~/pages'],
          // Packages starting with `~/components`
          ['^~/components'],
          // Imports starting with `../`
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Imports starting with `./`
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports
          ['^.+\\.s?css$'],
          // Side effect imports
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'react/prefer-read-only-props': 0,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
