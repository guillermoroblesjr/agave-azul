import { 
  FB_LOGIN_FULFILLED,
  FB_LOGOUT_FULFILLED,
} from '~/src/constants/facebook'
import AUTH from '~/src/constants/auth'
import PROFILE from '~/src/constants/profile'
import { updateField, resetField } from '~/src/utils/reducers'

// Must be a pure function that requires the state
// and the action being dispatched.
const initialState = {
  isLoggedIn: false,
  fbToken: null,
  role: ``,
}
export default (state = initialState, action) => {
  switch (action.type) {
    // NEVER mutate the state, always return a new state.
    case AUTH.UPDATE_AUTH: {
      return updateField({ state, action })
    }

    case AUTH.RESET_AUTH: {
      return initialState
    }

    case AUTH.RESET_AUTH_FIELD: {
      return resetField({ initialState, state, action })
    }

    // case PROFILE.API_GET_DETAILS_FULFILLED: {
    //   return {
    //     ...state,
    //     isLoggedIn: true,
    //     role: action.payload.record.role,
    //   }
    // }

    case FB_LOGIN_FULFILLED: {
      return {
        ...state,
        isLoggedIn: true,
        fbToken: action.payload.token,
      }
    }

    case FB_LOGOUT_FULFILLED: {
      return {
        isLoggedIn: false,
        fbToken: null,
      }
    }

    case AUTH.API_LOGIN_FULFILLED: {
      return {
        ...state,
        isLoggedIn: true,
        role: action.payload.record.role,
      }
    }

    case AUTH.API_LOGOUT_FULFILLED: {
      return initialState
    }

    default:
      return state
  }
}
