import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintPluginSonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginEslintComments from 'eslint-plugin-eslint-comments';
import eslintPluginJest from 'eslint-plugin-jest';


export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      sonarjs: eslintPluginSonarjs,
      unicorn: eslintPluginUnicorn,
      eslintComments: eslintPluginEslintComments,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
  {
    // New config for Jest tests
    files: ['**/*.test.js', '**/*.spec.js'],
    plugins: {
      jest: eslintPluginJest,
    },
    languageOptions: {
      globals: {
        jest: true, // Jest globals like `describe`, `test`, `expect`
      },
    },
    rules: {
      ...eslintPluginJest.configs.recommended.rules,
      // You can override/add specific Jest rules here, e.g.:
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
]);
