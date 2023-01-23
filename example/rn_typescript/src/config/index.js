import Config from 'react-native-config'
import api from '~/src/config/api'
import { version } from '~/package.json'
import {
  apiDomain as dotenv_apiDomain,
  imageCdnUrl as dotenv_imageCdnUrl,
  appVersionControl as dotenv_appVersionControl,
  ENVIRONMENT as dotenv_ENVIRONMENT,
} from '@env'

// TODO: clean up config

export const DEBUG = __DEV__
export const DEV = __DEV__
export const LOG_WITH_DEBUGGER = ENVIRONMENT !== `PRODUCTION` ? true : false
export const IS_DEBUGGER_VISIBLE = false

let apiDomain,
    imageCdnUrl,
    ENVIRONMENT,
    appVersionControl

apiDomain = Config.apiDomain
imageCdnUrl = Config.imageCdnUrl
appVersionControl = Config.appVersionControl
ENVIRONMENT = Config.ENVIRONMENT

if (Config.ENVIRONMENT && Config.ENVIRONMENT.length > 0) {
  apiDomain = Config.apiDomain
  imageCdnUrl = Config.imageCdnUrl
  appVersionControl = Config.appVersionControl
  ENVIRONMENT = Config.ENVIRONMENT
}
else {
  apiDomain = dotenv_apiDomain
  imageCdnUrl = dotenv_imageCdnUrl
  appVersionControl = dotenv_appVersionControl
  ENVIRONMENT = dotenv_ENVIRONMENT
}

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
        primary: `#A30832`, // red-pink
        secondary: `#18A0CC`, // blue
        third: `#008EBD`, // darker blue
        fourth: `#FFF01F`, // yellow
        fifth: `#FF0548`, // magenta
      
        primaryFont: `#353535`, // dark gray
        secondaryFont: `#A30832`, // red-pink
      
        disabledDark: `#949494`, // disabled dark gray
        disabledLight: `#e4e4e4`, // disabled light gray
      },
      fonts: {
        primary: `sans-sarif`,
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