import dotProp from 'dot-prop-immutable'
import { 
  LOGOUT_FULFILLED,
} from '~/src/constants/auth'
import AUTH from '~/src/constants/auth'
import CAMPAIGN from '~/src/constants/campaign'
import GenID from '~/src/utils/arrayIdGenerator'
import { normalizePosts } from '~/src/normalize/campaign'
import { updateField, resetField } from '~/src/utils/reducers'

const { 
  UPDATE_CAMPAIGN,
  ADD_CAMPAIGN_CITY,
  DELETE_CAMPAIGN_CITY,
  RESET_CAMPAIGN,
  ADD_CAMPAIGN_CATEGORY,
  DELETE_CAMPAIGN_CATEGORY,
  ADD_CAMPAIGN_POST,
  DELETE_CAMPAIGN_POST,
  RESET_CAMPAIGN_FIELD,
  API_GET_CAMPAIGN_FULFILLED,
} = CAMPAIGN

// Must be a pure function that requires the state
// and the action being dispatched.
const initialState = {
  cities: [],
  categories: [],
  posts: [],
  createPost: {},
  influencerSavePost: {} 
}
export default (state = initialState, action) => {
  switch (action.type) {
    // NEVER mutate the state, always return a new state.
    case LOGOUT_FULFILLED: {
      return initialState
    }

    case UPDATE_CAMPAIGN: {
      return updateField({ state, action })
    }

    case RESET_CAMPAIGN_FIELD: {
      return resetField({ initialState, state, action })
    }

    case ADD_CAMPAIGN_CITY: {
      state = dotProp.set(
        state, 
        `cities`, 
        list => [...list, action.payload ]
      )
      return state
    }

    case DELETE_CAMPAIGN_CITY: {
      const index = state.cities.findIndex(item => {
        return item.id === action.payload.id
      })
      state = dotProp.delete(
        state, 
        `cities.${index}`
      )
      return state
    }

    case ADD_CAMPAIGN_CATEGORY: {
      state = dotProp.set(
        state, 
        `categories`, 
        list => [...list, action.payload ]
      )
      return state
    }

    case DELETE_CAMPAIGN_CATEGORY: {
      const index = state.categories.findIndex(item => {
        return item.id === action.payload.id
      })
      state = dotProp.delete(
        state, 
        `categories.${index}`
      )
      return state
    }

    case ADD_CAMPAIGN_POST: {
      const genId = new GenID()
      const id = genId.gen()
      const payload = {
        id,
        ...action.payload
      }
      state = dotProp.set(
        state, 
        `posts`, 
        list => [...list, payload ]
      )
      return state
    }

    case DELETE_CAMPAIGN_POST: {
      const index = state.posts.findIndex(item => {
        return item.id === action.payload.id
      })
      state = dotProp.delete(
        state, 
        `posts.${index}`
      )
      return state
    }

    case API_GET_CAMPAIGN_FULFILLED: {
      const campaign = action.payload.records[0]
      state = {
        ...campaign,
      }
      const normalizedPostsData = normalizePosts(campaign.posts)
      state = dotProp.set(
        state, 
        `posts`, 
        normalizedPostsData
      )
      return state
    }

    case AUTH.API_LOGOUT_FULFILLED: {
      return initialState
    }

    case RESET_CAMPAIGN: {
      return initialState
    }

    default:
      return state
  }
}
