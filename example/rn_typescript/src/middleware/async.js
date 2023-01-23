import { RSAA } from 'redux-api-middleware'
import logger from '~/src/utils/logger'
import RCTNetworking from 'RCTNetworking'
import SetCookieParser from 'set-cookie-parser'
import { updateConfig } from '~/src/actions/config'
import _ from 'lodash'

const isRSAA = action => !!action[RSAA]

const getStateCookies = store => {
  const { config } = store.getState()
  return config.cookies
}
const saveCookiesToState = (store, cookies) => {
  store.dispatch(updateConfig({
    field: `cookies`,
    data: cookies,
  }))
}
const getCookiesString = (stateCookies) => {
  const cookiesString = Object
    .keys(stateCookies)
    .map(key => `${key}=${stateCookies[key].value}`)
    .join('; ')
  return cookiesString
}
const clearSystemCookies = () => new Promise(success => {
  RCTNetworking.clearCookies(success)
})

export default store => next => async (action) => {
  if (!isRSAA(action)) return next(action)
  const type = action[RSAA].type

  const PENDING = `${type}_PENDING`
  const FULFILLED = `${type}_FULFILLED`
  const FAILED = `${type}_FAILED`
  
  // notify that request has been sent
  const newAction = { ...action }
  newAction[RSAA].types = [PENDING, FULFILLED, FAILED]
  delete newAction[RSAA].type

  newAction[RSAA].credentials = `same-origin`

  const headers = _.cloneDeep(newAction[RSAA].headers) || {}

  // before each api request, clear the system's cookies and bind the saved cookies
  await clearSystemCookies()
  newAction[RSAA].headers = {
    ...headers,
    Cookie: getCookiesString(getStateCookies(store))
  }

  newAction[RSAA].fetch = async (...args) => {
    const request = fetch(...args)
    request.then(async response => {
      // save cookies when we make a api request
      const combinedCookieHeader = response.headers.get('Set-Cookie')
      const splitCookieHeaders = SetCookieParser.splitCookiesString(combinedCookieHeader)
      const cookies = SetCookieParser.parse(splitCookieHeaders, {
        decodeValues: true,
        map: true,
      })
      saveCookiesToState(store, cookies)
    })
    return request
  }

  logger(
    `hitting endpoint with: `,
    newAction[RSAA].body instanceof FormData
      ? newAction[RSAA]
      : JSON.parse(JSON.stringify(newAction))[RSAA]
  )

  console.groupCollapsed(`API call`)
  console.log(JSON.stringify(newAction, null, 2))
  console.groupEnd()

  // stringify body if needed
  if (typeof newAction[RSAA].body === `object` && !(newAction[RSAA].body instanceof FormData)) {
    newAction[RSAA].body = JSON.stringify(newAction[RSAA].body)
  }

  return next(newAction)
}