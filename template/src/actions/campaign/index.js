import { RSAA } from 'redux-api-middleware'
import config from '~/src/config'
import CAMPAIGN from '~/src/constants/campaign'
import { Platform } from 'react-native'

const { 
  UPDATE_CAMPAIGN,
  ADD_CAMPAIGN_CITY,
  DELETE_CAMPAIGN_CITY,
  RESET_CAMPAIGN,
  ADD_CAMPAIGN_CATEGORY,
  DELETE_CAMPAIGN_CATEGORY,
  SUBMIT_CAMPAIGN,
  API_GET_CAMPAIGN,
  API_GET_CAMPAIGNS,
  API_ADD_POST,
  API_UPDATE_POST,
  API_DELETE_POST,
  RESET_CAMPAIGN_FIELD,
  API_UPDATE_CAMPAIGN,
} = CAMPAIGN

const {
  api,
  apiDomain,
} = config.get()

export const updateCampaign = data => {
  return {
    type: UPDATE_CAMPAIGN,
    payload: data
  }
}

export const addCampaignCity = data => {
  return {
    type: ADD_CAMPAIGN_CITY,
    payload: data
  }
}

export const deleteCampaignCity = data => {
  return {
    type: DELETE_CAMPAIGN_CITY,
    payload: data
  }
}

export const addCampaignCategory = data => {
  return {
    type: ADD_CAMPAIGN_CATEGORY,
    payload: data
  }
}

export const deleteCampaignCategory = data => {
  return {
    type: DELETE_CAMPAIGN_CATEGORY,
    payload: data
  }
}

// export const addCampaignPost = data => (dispatch, getState) => {
//   const state = getState()
//   return dispatch({
//     type: ADD_CAMPAIGN_POST,
//     payload: state.campaign.createPost
//   })
// }

// export const deleteCampaignPost = data => {
//   return {
//     type: DELETE_CAMPAIGN_POST,
//     payload: data
//   }
// }

export const apiAddPost = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.addPost.url}`
  const createFormData = ({
    images = [],
    keys = {},
  }) => {
    const formData = new FormData()
    Object.keys(keys).forEach(key => {
      formData.append(key, keys[key])
    })
    images.forEach(item => {
      formData.append(item.key, {
        name: Platform.OS === "android" ? item.image.fileName : item.image.name,
        type: item.image.type,
        uri: Platform.OS === "android" ? item.image.uri : item.image.uri.replace("file://", "")
      })
    })
    return formData
  }

  const state = getState()
  const {
    caption,
    image,
  } = state.campaign.createPost
  const {
    id: campaignId,
  } = state.campaign


  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.addPost.verb,
      body: createFormData({
        images: [{ key: `object`, image }],
        keys: {
          campaignId: campaignId,
          caption,
        }
      }),
      type: API_ADD_POST
    }
  })
}

export const apiUpdatePost = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.updatePost.url}`
  const createFormData = ({
    images = [],
    keys = {},
  }) => {
    const formData = new FormData()
    Object.keys(keys).forEach(key => {
      formData.append(key, keys[key])
    })
    images.forEach(item => {
      formData.append(item.key, {
        name: Platform.OS === "android" ? item.image.fileName : item.image.name,
        type: item.image.type,
        uri: Platform.OS === "android" ? item.image.uri : item.image.uri.replace("file://", "")
      })
    })
    return formData
  }

  const state = getState()
  const {
    caption,
    image,
    id: postId,
  } = state.campaign.createPost

  const keys = {
    postId,
    caption,
  }
  if (image && image.uri) {
    keys.updateImage = true
  }

  const images = []
  if (image && image.uri) {
    images.push({ key: `object`, image })
  }

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.updatePost.verb,
      body: createFormData({
        keys,
        images,
      }),
      type: API_UPDATE_POST
    }
  })
}

export const apiDeletePost = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.deletePost.url}`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.deletePost.verb,
      body: data,
      type: API_DELETE_POST
    }
  })
}

export const resetCampaign = () => {
  return {
    type: RESET_CAMPAIGN,
  }
}

export const resetCampaignField = data => {
  return {
    type: RESET_CAMPAIGN_FIELD,
    payload: data
  }
}

export const addCampaign = () => async (dispatch, getState) => {
  const url = `${apiDomain}${api.addCampaign.url}`

  const state = getState()
  const {
    name,
    companyName,
    categories,
    description,
    cities,
    startDate,
    endDate,
    minimumAgeLimit,
    requiredNumOfFollowers,
    influencerMaxLimit,
  } = state.campaign
  const data = {
    name,
    companyName,
    categories: categories.map(category => category.id),
    description,
    cities: cities.map(city => city.id),
    startDate,
    endDate,
    minimumAgeLimit: minimumAgeLimit === undefined
      ? 0
      : minimumAgeLimit,
    requiredNumOfFollowers: requiredNumOfFollowers === undefined
      ? 300
      : requiredNumOfFollowers,
    influencerMaxLimit: influencerMaxLimit === undefined
      ? 100
      : influencerMaxLimit,
  }

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.addCampaign.verb,
      body: data,
      type: SUBMIT_CAMPAIGN
    }
  })
}

export const getCampaign = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.getCampaign.url}`

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.getCampaign.verb,
      body: data,
      type: API_GET_CAMPAIGN
    }
  })
}

export const getCampaigns = data => async (dispatch, getState) => {
  const url = `${apiDomain}${api.getCampaigns.url}`

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.getCampaigns.verb,
      body: data,
      type: API_GET_CAMPAIGNS
    }
  })
}

export const apiUpdateCampaign = () => async (dispatch, getState) => {
  const url = `${apiDomain}${api.updateCampaign.url}`
  const state = getState()
  const {
    name,
    companyName,
    categories,
    description,
    cities,
    startDate,
    endDate,
    id,
    minimumAgeLimit,
    requiredNumOfFollowers,
    influencerMaxLimit,
  } = state.campaign
  const data = {
    name,
    companyName,
    categories: categories.map(category => category.id),
    description,
    cities: cities.map(city => city.id),
    startDate,
    endDate,
    id,
    minimumAgeLimit: minimumAgeLimit === undefined
      ? 0
      : minimumAgeLimit,
    requiredNumOfFollowers: requiredNumOfFollowers === undefined
      ? 300
      : requiredNumOfFollowers,
    influencerMaxLimit: influencerMaxLimit === undefined
      ? 100
      : influencerMaxLimit,
  }

  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.updateCampaign.verb,
      body: data,
      type: API_UPDATE_CAMPAIGN
    }
  })
}

export const apiAddShare = () => async (dispatch, getState) => {
  const url = `${apiDomain}${api.addShare.url}`
  const state = getState()
  const {
    id: campaignId,
    savePostingDetails,
  } = state.campaign
  const data = {
    campaignId,
    shareLink: savePostingDetails.shareLink,
  }
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: api.addShare.verb,
      body: data,
      type: CAMPAIGN.API_ADD_SHARE
    }
  })
}