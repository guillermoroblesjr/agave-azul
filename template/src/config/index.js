// import Config from 'react-native-config'
import api from '~/src/config/api'
import { version } from '~/package.json'
import {
  apiDomain,
  imageCdnUrl,
  appVersionControl,
  ENVIRONMENT,
} from '@env'

// TODO: clean up config

export const DEBUG = __DEV__
export const DEV = __DEV__
export const LOG_WITH_DEBUGGER = ENVIRONMENT !== `PRODUCTION` ? true : false
export const IS_DEBUGGER_VISIBLE = false

let config = {
  get: () => {
    return {
      version: {
        ios: version,
        android: version,
      },
      testMenuEnabled: false,
      compatibleStoreVersion: "0.10",
      isDebuggingInChrome: true,
      doComposeWithDevTools: true,
      colors: {
        primary: `#11365f`,
      },
      fonts: {
        primary: `sans-sarif`,
      },
      buttons: {
        borderRadius: 100,
      },
      apiDomain,
      api,
      appVersionControl: {
        url: appVersionControl
      },
      imageCdn: {
        url: imageCdnUrl,
      },
      ENVIRONMENT,
    }
  }
}

if (ENVIRONMENT !== `PRODUCTION`) {
  console.log("config: ", config.get())
}

export default config
