import { RSAA } from 'redux-api-middleware'
import config from '~/src/config'
import PROFILE from '~/src/constants/profile'
import { resetAuth } from '~/src/actions/auth'
import { resetWebInstagramTopSearch } from '~/src/actions/instagram'

const {
  api,
  apiDomain,
} = config.get()

export const updateProfile = data => {
  return {
    type: PROFILE.UPDATE_PROFILE,
    payload: data
  }
}

export const resetProfile = () => {
  return {
    type: PROFILE.RESET_PROFILE,
  }
}

export const resetProfileField = data => {
  return {
    type: PROFILE.RESET_PROFILE_FIELD,
    payload: data
  }
}

export const addProfileCategory = data => {
  return {
    type: PROFILE.ADD_PROFILE_CATEGORY,
    payload: data
  }
}

export const deleteProfileCategory = data => {
  return {
    type: PROFILE.DELETE_PROFILE_CATEGORY,
    payload: data
  }
}

export const updateUserSocialRecords = data => {
  return {
    type: PROFILE.UPDATE_USER_SOCIAL_RECORDS,
    payload: data
  }
}

export const updateUserShareRecords = data => {
  return {
    type: PROFILE.UPDATE_USER_SHARE_RECORDS,
    payload: data
  }
}

export const apiSignUp = () => async (dispatch, getState) => {
  const url = `${apiDomain}${api.signup.url}`
  const state = getState()
  const {
    firstName,
    lastName,
    emailAddress,
    password,
    city,
    categories,
    birthday,
    accounts,
    locale,
  } = state.profile
  const data = {
    firstName,
    lastName,
    emailAddress,
    password,
    cities: [city.id],
    categories: categories.map(category => category.id),
    birthday,
    instagram: accounts.instagram,
    locale,
  }

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.signup.verb,
      body: data,
      type: PROFILE.API_SIGNUP
    }
  })
}

export const apiConfirmEmail = ({ token }) => async (dispatch) => {

  // reset auth, instagram, profile
  dispatch(resetAuth())
  dispatch(resetWebInstagramTopSearch())
  dispatch(resetProfile())

  const url = `${apiDomain}${api.confirmEmail.url}?token=${token}`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.confirmEmail.verb,
      type: PROFILE.API_CONFIRM_EMAIL
    }
  })
}

export const apiReConfirmEmail = () => async (dispatch, getState) => {
  const url = `${apiDomain}${api.reConfirmEmail.url}`
  const {
    emailAddress
  } = getState().profile
  const data = {
    emailAddress
  }
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.reConfirmEmail.verb,
      type: PROFILE.API_RE_CONFIRM_EMAIL,
      body: data,
    }
  })
}

export const apiGetSocial = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.getSocial.url}`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.getSocial.verb,
      type: PROFILE.API_GET_SOCIAL,
      body: data,
    }
  })
}

export const apiGetShares = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.getShares.url}`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.getShares.verb,
      type: PROFILE.API_GET_SHARES,
      body: data,
    }
  })
}

export const apiGetSharesByOwnersAndCampaigns = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.getSharesByOwnersAndCampaigns.url}`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.getSharesByOwnersAndCampaigns.verb,
      type: PROFILE.API_GET_SHARES_BY_OWNERS_AND_CAMPAIGNS,
      body: data,
    }
  })
}

export const apiSendPasswordRecoveryEmail = data => async (dispatch, getState) => {
  const state = getState()
  const {
    locale,
  } = state.profile
  const url = `${apiDomain}${api.sendPasswordRecoveryEmail.url}`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.sendPasswordRecoveryEmail.verb,
      type: PROFILE.API_SEND_PASSWORD_RECOVERY_EMAIL,
      body: {
        locale,
        ...data,
      },
    }
  })
}

export const apiGetSocials = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.getSocials.url}`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.getSocials.verb,
      type: PROFILE.API_GET_SOCIALS,
      body: data,
    }
  })
}

export const apiUpdateSocial = (data) => async (dispatch, getState) => {
  const state = getState()
  const {
    locale,
  } = state.profile
  const url = `${apiDomain}${api.updateSocial.url}`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.updateSocial.verb,
      type: PROFILE.API_UPDATE_SOCIAL,
      body: {
        locale,
        ...data,
      },
    }
  })
}

export const apiGetDetail = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.getDetail.url}`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.getDetail.verb,
      type: PROFILE.API_GET_DETAIL,
      body: data,
    }
  })
}

export const apiGetDetails = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.getDetails.url}`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.getDetails.verb,
      type: PROFILE.API_GET_DETAILS,
      body: data,
    }
  })
}