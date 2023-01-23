import { Debugger } from 'react-native-debugger'
import { LOG_WITH_DEBUGGER } from '~/src/config'

export default (...args) => {
  const allArgs = [...args]
  if (LOG_WITH_DEBUGGER) {
    // Debugger.EVENT_TYPES
    // NONE use this type for neutral events
    // ERROR use this type for error events
    // WARNING use this type for warning events
    // SUCCESS use this type for success events
    return Debugger.logAction({
      label: allArgs[0], 
      type: 'NETWORK_REQUEST',
      logType: allArgs[2] || `NONE`,
      data: allArgs[1]
    })
  }
  if (allArgs[1]) {
    console.log(`${allArgs[0]}`, allArgs[1])
  } else {
    console.log(allArgs[0])
  } 
}
