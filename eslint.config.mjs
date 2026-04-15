import tseslint from 'typescript-eslint';
import astroPlugin from 'eslint-plugin-astro';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  ...tseslint.configs.recommended,
  ...astroPlugin.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: ['dist/', '.astro/', 'node_modules/', 'public/', 'vault/', 'docs/'],
  },
];
