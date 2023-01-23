import {
  PLACE_AUTOCOMPLETE_FULFILLED,
  RESET_PLACE_AUTOCOMPLETE,
} from '~/src/constants/google'
import AUTH from '~/src/constants/auth'


// Must be a pure function that requires the state
// and the action being dispatched.
const initialState = {
  citySearch: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    // NEVER mutate the state, always return a new state.
    case PLACE_AUTOCOMPLETE_FULFILLED: {
      return {
        ...state,
        citySearch: action.payload.predictions
      }
    }

    case RESET_PLACE_AUTOCOMPLETE: {
      return {
        ...state,
        citySearch: []
      }
    }

    case AUTH.API_LOGOUT_FULFILLED: {
      return initialState
    }

    default:
      return state
  }
}
