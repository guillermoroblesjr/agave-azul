import { RSAA } from 'redux-api-middleware'
import config from '~/src/config'
import CONFIG from '~/src/constants/config'
import _ from 'lodash'

const {
  api,
  apiDomain,
  appVersionControl
} = config.get()

export const updateConfig = data => {
  return {
    type: CONFIG.UPDATE_CONFIG,
    payload: data
  }
}

export const resetConfigField = data => {
  return {
    type: CONFIG.RESET_CONFIG_FIELD,
    payload: data
  }
}

export const apiGetAppVersionControl = () => async (dispatch, getState) => {
  const url = appVersionControl.url
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: `GET`,
      headers: {
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
      },
      type: CONFIG.API_CONFIG_GET_APP_VERSION_CONTROL
    }
  })
}

/* Config Campaign Categories */

export const getConfigCampaignCategories = () => async (dispatch, getState) => {
  const url = `${apiDomain}${api.getCategories.url}`

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.getCategories.verb,
      type: CONFIG.API_GET_CONFIG_CAMPAIGN_CATEGORIES
    }
  })
}

export const apiAddConfigCampaignCategory = () => async (dispatch, getState) => {
  const url = `${apiDomain}${api.addCategory.url}`

  const state = getState()
  const data = {
    name: state.config.addCategory
  }

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.addCategory.verb,
      body: data,
      type: CONFIG.API_ADD_CONFIG_CAMPAIGN_CATEGORY
    }
  })
}

export const apiUpdateConfigCampaignCategory = () => async (dispatch, getState) => {
  const url = `${apiDomain}${api.updateCategory.url}`

  const state = getState()
  const {
    updatedName,
    categoryId: id,
    isDisabled,
  } = state.config.editCategoriesModal
  const data = {
    name: updatedName,
    id,
  }
  if (isDisabled !== undefined) {
    data.isDisabled = isDisabled
  }

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.updateCategory.verb,
      body: data,
      type: CONFIG.API_UPDATE_CONFIG_CAMPAIGN_CATEGORY
    }
  })
}

/* Config Campaign Cities */

// this is using thunk to dispatch the throttled action
export const getConfigCampaignCities = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.getCities.url}`

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.getCities.verb,
      body: data,
      type: CONFIG.API_GET_CONFIG_CAMPAIGN_CITIES
    }
  })
}

// we only want to set up the throttling once
const throttledApiGetConfigCampaignCities = _.throttle(
  (dispatch, data) => dispatch(getConfigCampaignCities(data)),
  800,
  {
    leading: true,
    trailing: true,
  }
)

export const apiGetConfigCampaignCities = (data) => dispatch => throttledApiGetConfigCampaignCities(dispatch, data)

export const apiAddConfigCampaignCity = () => async (dispatch, getState) => {
  const url = `${apiDomain}${api.addCity.url}`

  const state = getState()
  const data = {
    city: state.config.addCity
  }

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.addCity.verb,
      body: data,
      type: CONFIG.API_ADD_CONFIG_CAMPAIGN_CITY
    }
  })
}

export const apiUpdateConfigCampaignCity = () => async (dispatch, getState) => {
  const url = `${apiDomain}${api.updateCity.url}`

  const state = getState()
  const {
    updatedCity,
    cityId: id,
    isDisabled,
  } = state.config.editCity
  const data = {
    city: updatedCity,
    id,
  }
  if (isDisabled !== undefined) {
    data.isDisabled = isDisabled
  }

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.updateCity.verb,
      body: data,
      type: CONFIG.API_UPDATE_CONFIG_CAMPAIGN_CITY
    }
  })
}

export const apiGetCitiesWithinRange = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.getCitiesWithinRange.url}`

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.getCitiesWithinRange.verb,
      body: data,
      type: CONFIG.API_GET_CITIES_WITHIN_RANGE
    }
  })
}