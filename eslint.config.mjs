import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    ignores: [
      'node_modules/*', // ignore its content
      '!node_modules/mylibrary/', // unignore `node_modules/mylibrary` directory
    ],
    rules: {
      eqeqeq: ['error', 'always'], // Require `===` and `!==`
      'arrow-body-style': ['error', 'always'],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'no-implicit-globals': 'error',
      'no-console': 'warn',
      'no-redeclare': 'error', // Disallow variable redeclaration
    },
  },
  pluginReact.configs.flat.recommended,
];
