module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@ademtonay/eslint-config-ts', 'plugin:vue/recommended'],
  plugins: ['vue'],
  rules: {},
}
