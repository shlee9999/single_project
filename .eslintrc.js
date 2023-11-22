module.exports = {
  extends: ['standard', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        trailingComma: 'es5',
        endOfLine: 'lf',
        printWidth: 120,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
    indent: ['error', 2],
    semi: ['error', 'never'],
    'no-trailing-spaces': 'off',
    'keyword-spacing': 'off',
    'no-unused-vars': 'warn',
    'no-multiple-empty-lines': 'off',
    'space-before-function-paren': 'off',
    'eol-last': 'off',
  },
}
