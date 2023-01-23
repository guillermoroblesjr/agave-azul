/* eslint-disable */

module.exports = function(api) {
  api.cache.forever();

  const presets = [
    ['module:metro-react-native-babel-preset'],
    ["@babel/env", { "targets": { "node": 6 } }],
    // ["module:react-native-dotenv"],
  ];

  const plugins = [
    ['@babel/proposal-decorators', { legacy: true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    [
      "module-resolver",
      {
        "root": ["./"],
        "alias": {
          "root": ["./"],
          "~": ["./"],
          "components": "./components",
          "redux-api-middleware": "redux-api-middleware/src"
        },
        "extensions": [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      }
    ],
    [
      "babel-plugin-styled-components",
      {
        "fileName": false
      }
    ],
    // ["react-intl", {
    //   "messagesDir": "./src/languages/"
    // }],
    ["lodash"],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ];

  return { presets, plugins };
};
