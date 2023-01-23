import { Platform, NativeModules } from 'react-native'
import localeData from '~/src/languages'

let intl

export default class International {

  getIntl = () => intl
  setIntl = i => intl = i

  getDeviceLanguage = () => {
    const deviceLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;

    return deviceLanguage
  }

  getLanguageWithoutRegionCode = () => {
    return this.getDeviceLanguage().toLowerCase().split(/[_-]+/)[0]
  }
  
  getMessages = (language) => {
    // Split locales with a region code
    const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]
    
    // Try full locale, try locale without region code, fallback to 'es'
    const messages = localeData[languageWithoutRegionCode] || localeData[language.toUpperCase()] || localeData.es

    return messages
  }

}