/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript'
  ],
  rules: {
    'vue/no-template-target-blank': 'error',
    'vue/no-unused-vars': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }],
    'vue/component-tags-order': ['error', {
      'order': ['template', 'script', 'style']
    }],
    'object-curly-spacing': ['error', 'always'],
    'sort-imports': ['error', {
      'ignoreCase': false,
      'ignoreDeclarationSort': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
      'allowSeparatedGroups': true
    }],
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'keyword-spacing': ['error', { 'before': true }],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'key-spacing': 'error',
    'space-infix-ops': ['error', { 'int32Hint': false }],
  }
}