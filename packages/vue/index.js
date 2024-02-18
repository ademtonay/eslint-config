module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['plugin:vue/recommended', '@ademtonay/eslint-config-ts'],
  plugins: ['vue'],
  rules: {
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 5,
        },
      },
    ],
  },
}
