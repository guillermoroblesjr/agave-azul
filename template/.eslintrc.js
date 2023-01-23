module.exports = {
  root: true,
  extends: [
    // 'eslint:recommended',
    // 'plugin:react/recommended',
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/jsx-curly-brace-presence': [2, {props: 'always'}],
        'max-len': ['error', 140],
        semi: 'never',
        // 'no-extra-semi': 'off',
        // '@typescript-eslint/no-extra-semi': 'always',
      },
    },
  ],
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },

  // globals: {
  //   __DEV__: true,
  // },
  // settings: {
  //   react: {version: 'latest'},
  // },
};
