import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.js'],
    plugins: {
      import: importPlugin, // 👈 обязательно указываем
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'import/no-named-as-default': 'error',
      'import/prefer-default-export': 'error',
      'class-methods-use-this': 'error',
      'arrow-body-style': 'error',
      'eol-last': 'error',
      'padded-blocks': 'error',
    },
  },
];
