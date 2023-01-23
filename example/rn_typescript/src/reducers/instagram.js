import INSTAGRAM from '~/src/constants/instagram'
import AUTH from '~/src/constants/auth'

// Must be a pure function that requires the state
// and the action being dispatched.
const initialState = {
  webTopSearch: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    // NEVER mutate the state, always return a new state.
    case INSTAGRAM.API_INSTAGRAM_WEB_TOPSEARCH_FULFILLED: {
      return {
        ...state,
        webTopSearch: action.payload
      }
    }

    case INSTAGRAM.RESET_INSTAGRAM_WEB_TOPSEARCH: {
      return {
        ...state,
        webTopSearch: []
      }
    }

    case AUTH.API_LOGOUT_FULFILLED: {
      return initialState
    }

    default:
      return state
  }
}
