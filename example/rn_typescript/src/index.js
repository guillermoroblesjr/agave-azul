/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native'
import { Component as App } from '~/src/components/App'
import { name as appName } from '~/app.json'
import { NativeModules, Text } from 'react-native'
import { DEV } from '~/src/config'

if (DEV) {
  // NativeModules.DevSettings.reload()
//   NativeModules.DevSettings.toggleElementInspector()
  NativeModules.DevSettings.setIsDebuggingRemotely(true)
//   NativeModules.DevSettings.setLiveReloadEnabled(true)
//   NativeModules.DevSettings.setHotLoadingEnabled(bool)
}

console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App)