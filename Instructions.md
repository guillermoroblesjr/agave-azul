

# Opensource Github Repo (guillermoroblesjr)
- Instructions to create a well architectured react native app using typescript

## Instructions

    - Install node
    - Install yarn globally
    - Install react-native globally
    - Get environment setup for React Native https://reactnative.dev/docs/environment-setup
    - Go to the section to install a new project with typescript (e.g. Using a specific version or template)
        - The command will be similar to `npx react-native init rn_typescript --template react-native-template-typescript`
    - Navigate to the project you created
    - Run the following:
        ```shell
        yarn add @babel/cli @babel/plugin-proposal-decorators @babel/preset-env babel-eslint babel-loader babel-plugin-lodash babel-plugin-module-resolver babel-plugin-react-intl babel-plugin-styled-components dot-prop-immutable fuse.js intl is-url lodash moment native-base normalizr re-reselect react-intl react-intl-inject react-native-config react-native-debugger react-native-device-info react-native-devsettings-android react-native-dotenv react-navigation react-redux redux redux-api-middleware redux-logger redux-persist redux-thunk semver set-cookie-parser styled-components 
        ```

        ```shell
        yarn add -D babel-preset-react-native eslint-loader standard-version
        ```

        ```shell
        yarn add redux-thunk @reduxjs/toolkit @react-navigation/native react-native-screens react-native-safe-area-context
        ```

        ```shell
        yarn add -D @babel/plugin-proposal-private-methods eslint-plugin-import eslint-import-resolver-babel-module @types/react @types/react-dom @types/node @types/jest typescript @types/react-redux 
        ```

        Copy the template over to the project overriding existing files
        ```shell
        cp -r  ~/Projects/agave-azul/template  ~/Projects/agave-azul/example/rn_typescript
        ```
        
        Other way to copy files (hidden directories included)
        https://superuser.com/questions/61611/how-to-copy-with-cp-to-include-hidden-files-and-hidden-directories-and-their-con
        ```shell
        cp -r /etc/skel/. /home/<new_user>
        ```

        Run the project
        ```shell
        npx react-native run-ios
        ```

        Reset the cache as needed
        ```shell
        yarn reset-cache
        ```
    - Install hygen https://github.com/jondot/hygen
        ```shell
        yarn global add hygen
        ```
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
    - Install React Native Debugger https://github.com/jhen0409/react-native-debugger


Other:
index -> App (Redux & SplashScreen, Main) -> Main (IntlProvider, ExtractIntl, CheckMinimumVersion, DeepLink, RootNavigator) -> RootNavigator (LoggedOutStack, LoggedInStack)
