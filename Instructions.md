

# Opensource Github Repo (guillermoroblesjr)
- Instructions to create a well architectured react native app using typescript

## Instructions

    - Install node
    - Install yarn globally
    - Install react-native globally
    - Get environment setup for React Native https://reactnative.dev/docs/environment-setup
    - Go to the section to install a new project with typescript (e.g. Using a specific version or template)
        - The command will be similar to `npx react-native init AwesomeTSProject --template react-native-template-typescript`
    - Navigate to the project you created
    - Run the following:
        ```shell
        yarn add @babel/cli @babel/plugin-proposal-decorators @babel/preset-env babel-eslint babel-loader babel-plugin-lodash babel-plugin-module-resolver babel-plugin-react-intl babel-plugin-styled-components dot-prop-immutable fuse.js intl is-url lodash moment native-base normalizr re-reselect react-intl react-intl-inject react-native-config react-native-debugger react-native-device-info react-native-devsettings-android react-native-dotenv react-navigation react-redux redux redux-api-middleware redux-logger redux-persist redux-thunk semver set-cookie-parser styled-components 
        ```

        ```shell
        yarn add -D babel-preset-react-native eslint-loader standard-version
        ```
    - Install hygen https://github.com/jondot/hygen
    - Clone this repo
    - Navigate into repo
    - Run the following to copy the boilerplate code to your project:
        ```shell
        cp -r <directory of your project>
        ```
        or
        ```shell
        hygen generator new <directory of your project>
        ```
    
