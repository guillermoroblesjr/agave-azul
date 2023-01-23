import { RSAA } from 'redux-api-middleware'
import config from '~/src/config'
import AUTH from '~/src/constants/auth'

const {
  api,
  apiDomain,
} = config.get()

export const updateAuth = data => {
  return {
    type: AUTH.UPDATE_AUTH,
    payload: data
  }
}

export const resetAuth = () => {
  return {
    type: AUTH.RESET_AUTH,
  }
}

export const resetAuthField = data => {
  return {
    type: AUTH.RESET_AUTH_FIELD,
    payload: data
  }
}

export const apiLogIn = (data) => async (dispatch, getState) => {
  const state = getState()
  const {
    locale,
  } = state.profile
  const url = `${apiDomain}${api.login.url}`

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.login.verb,
      body: {
        locale,
        ...data,
      },
      type: AUTH.API_LOGIN
    }
  })
}

export const apiLogOut = () => async (dispatch) => {
  const url = `${apiDomain}${api.logout.url}`

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.logout.verb,
      type: AUTH.API_LOGOUT
    }
  })
}

