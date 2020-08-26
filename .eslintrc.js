module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  ignorePatterns: ['webpack.config.ts'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single'
    ],
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'camelcase': 'error',
    'complexity': 'warn',
    'constructor-super': 'error',
    'dot-notation': 'error',
    'eqeqeq': [
      'error',
      'smart'
    ],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined'
    ],
    'id-match': 'error',
    'max-classes-per-file': [
      'error',
      1
    ],
    'new-parens': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'valid-typeof': 'off',
    'use-isnan': 'error',
  },
}
