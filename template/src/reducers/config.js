import { 
  LOGOUT_FULFILLED,
} from '~/src/constants/auth'
import CONFIG from '~/src/constants/config'
import AUTH from '~/src/constants/auth'
import { updateField, resetField } from '~/src/utils/reducers'

// Must be a pure function that requires the state
// and the action being dispatched.
const initialState = {
  editCategoriesModal: {
    showModal: false,
    updatedName: ``,
    categoryId: null,
  },
  editCity: {
    updatedCity: {},
    cityId: null,
  },
  deepLinks: new Map(),
  confirmAccounts: {
    accounts: [],
    accountsDetails: [],
  },
  cookies: {},
}
export default (state = initialState, action) => {
  switch (action.type) {
    // NEVER mutate the state, always return a new state.
    case LOGOUT_FULFILLED: {
      return initialState
    }

    case CONFIG.UPDATE_CONFIG: {
      return updateField({ state, action })
    }

    case CONFIG.RESET_CONFIG_FIELD: {
      return resetField({ initialState, state, action })
    }
    
    case CONFIG.API_GET_CONFIG_CAMPAIGN_CATEGORIES_FULFILLED: {
      return {
        ...state,
        categories: action.payload
      }
    }

    case CONFIG.API_GET_CONFIG_CAMPAIGN_CITIES_FULFILLED: {
      return {
        ...state,
        cities: action.payload.records
      }
    }

    case AUTH.API_LOGOUT_FULFILLED: {
      return {
        ...initialState,
        deepLinks: state.deepLinks,
      }
    }

    default:
      return state
  }
}
