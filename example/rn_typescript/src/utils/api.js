import {
  DEBUG,
  DEV,
} from '~/src/config'
import _ from 'lodash'
import logger from '~/src/utils/logger'
import International from '~/src/utils/intl'
import { Alert } from 'react-native'

export const onApiError = ({ message, result }) => {
  if (DEBUG && DEV) {
    logger(`Error!\n${message}: `, result)
  }
  
  if (_.get(result, 'payload.name') === `RequestError`) {
    return Alert.alert(
      `Amiliae`,
`${new International().getIntl().formatMessage({ id: 'app.api.error.requestfailed.title' })}
${new International().getIntl().formatMessage({ id: 'app.api.error.requestfailed.instructions' })}`,
      [
        { text: new International().getIntl().formatMessage({ id: 'app.alert.ok' }), 
          onPress: async () => null,
        },
      ],
      { cancelable: false },
    )
  }
  else if (_.get(result, 'payload.status') === 401) {
    return Alert.alert(
      `Amiliae`,
`401 ${new International().getIntl().formatMessage({ id: 'app.api.errorcode' })}
${new International().getIntl().formatMessage({ id: 'app.api.error.credentials.title' })}
${new International().getIntl().formatMessage({ id: 'app.api.error.credentials.instructions' })}`,
      [
        { text: new International().getIntl().formatMessage({ id: 'app.alert.ok' }), 
          onPress: async () => null,
        },
      ],
      { cancelable: false },
    )
  }
  else if (_.get(result, 'payload.status') === 500) {
    return Alert.alert(
      `Amiliae`,
`500 ${new International().getIntl().formatMessage({ id: 'app.api.errorcode' })}
${new International().getIntl().formatMessage({ id: 'app.api.message' })}: ${JSON.stringify(_.get(result, 'payload.response.message', 'Not available.'), null, 2)}`,
      [
        { text: new International().getIntl().formatMessage({ id: 'app.alert.ok' }), 
          onPress: async () => null,
        },
      ],
      { cancelable: false },
    )
  }
  else if (_.get(result, 'payload.status') === 502) {
    return Alert.alert(
      `Amiliae`,
`502 ${new International().getIntl().formatMessage({ id: 'app.api.errorcode' })}
${new International().getIntl().formatMessage({ id: 'app.api.error.upgrades.title' })}
${new International().getIntl().formatMessage({ id: 'app.api.error.upgrades.instructions' })}`,
      [
        { text: new International().getIntl().formatMessage({ id: 'app.alert.ok' }), 
          onPress: async () => null,
        },
      ],
      { cancelable: false },
    )
  }
  // Server's cannot be contacted. E.g. They're down.
  else if (_.get(result, 'payload.status') === 503) {
    return Alert.alert(
      `Amiliae`,
`503 ${new International().getIntl().formatMessage({ id: 'app.api.errorcode' })}
${new International().getIntl().formatMessage({ id: 'app.api.error.upgrades.title' })}
${new International().getIntl().formatMessage({ id: 'app.api.error.upgrades.instructions' })}`,
      [
        { text: new International().getIntl().formatMessage({ id: 'app.alert.ok' }), 
          onPress: async () => null,
        },
      ],
      { cancelable: false },
    )
  }

  alert(
`${message}
${new International().getIntl().formatMessage({ id: 'app.api.errorcode' })}: ${_.get(result, 'payload.status', 'Not available.')}
${new International().getIntl().formatMessage({ id: 'app.api.message' })}: ${JSON.stringify(_.get(result, 'payload.response.message', 'Not available.'), null, 2)}`
  )
}

export const addApiActionTypes = (actionTypes, type) => {
  const make = type => {
    const PENDING = `${type}_PENDING`;
    const FULFILLED = `${type}_FULFILLED`;
    const FAILED = `${type}_FAILED`;
  
    return [type, PENDING, FULFILLED, FAILED]
  }
  const addTo = (actionTypes, madeTypes) => {
    return madeTypes.forEach(type => actionTypes[type] = type)
  }

  const madeTypes = make(type)
  const addedTypes = addTo(actionTypes, madeTypes)
  return addedTypes
}