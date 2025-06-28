import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], rules: {
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/prefer-default-export': 'off',
      'class-methods-use-this': 'off',
      'no-underscore-dangle': 'off',
      'semi': 'off',
      'arrow-body-style': 'off',
      'no-multiple-empty-lines': 'off',
      'padded-blocks': 'off',
      'eol-last': 'off'
    }
  },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: { ...globals.browser, ...globals.jest } } },
  { ignores: ["**/*.test.{js}"], plugins: { js } }
]);
