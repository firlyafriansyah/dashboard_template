module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.css'],
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1,
      {
        extensions: [
          '.tsx',
        ],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'linebreak-style': 0,
    'no-nested-ternary': 0,
    'react/prop-types': 0,
  },
};
