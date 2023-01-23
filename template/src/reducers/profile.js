import dotProp from 'dot-prop-immutable'
import PROFILE from '~/src/constants/profile'
import AUTH from '~/src/constants/auth'
import { updateField, resetField } from '~/src/utils/reducers'
import {
  normalizeAccounts,
  normalizeSocials,
  normalizeShares,
} from '~/src/normalize/profile'
import International from '~/src/utils/intl'

// Must be a pure function that requires the state
// and the action being dispatched.
const initialState = {
  locale: new International().getLanguageWithoutRegionCode(),
  birthday: null,
  categories: [],
  accounts: {
    entities: {
      accounts: {}
    },
    result: [],
  },
  isEmailConfirmed: null,
  socials: {
    entities: {
      socials: {}
    },
    result: [],
  },
  shares: {
    entities: {
      sharesByCampaignId: {}
    },
    result: [],
  },
}
export default (state = initialState, action) => {
  switch (action.type) {
    // NEVER mutate the state, always return a new state.
    case PROFILE.UPDATE_PROFILE: {
      return updateField({ state, action })
    }

    case PROFILE.RESET_PROFILE: {
      return initialState
    }

    case PROFILE.RESET_PROFILE_FIELD: {
      return resetField({ initialState, state, action })
    }

    case PROFILE.ADD_PROFILE_CATEGORY: {
      state = dotProp.set(
        state, 
        `categories`, 
        list => [...list, action.payload ]
      )
      return state
    }

    case PROFILE.DELETE_PROFILE_CATEGORY: {
      const index = state.categories.findIndex(item => {
        return item.id === action.payload.id
      })
      state = dotProp.delete(
        state, 
        `categories.${index}`
      )
      return state
    }

    case PROFILE.API_CONFIRM_EMAIL_FAILED: {
      // if no email address is provided then email doesn't exist
      if (!action.payload.response.emailAddress) {
        return {
          ...state,
          emailAddressDoesNotExist: true
        }
      }
      return {
        ...state,
        emailAddress: action.payload.response.emailAddress,
        isEmailConfirmed: false,
      }
    }

    // case PROFILE.API_GET_DETAILS_FULFILLED: {
    //   const nextAccountsRecords = action.payload.record.accounts
    //   const normalizedAccountsData = normalizeAccounts(nextAccountsRecords)
    //   state = dotProp.set(
    //     state,
    //     `accounts.entities.accounts`,
    //     {
    //       ...normalizedAccountsData.entities.accounts,
    //     }
    //   )
    //   state = dotProp.set(
    //     state, 
    //     `accounts.result`, 
    //     list => [...normalizedAccountsData.result]
    //   )

    //   const {
    //     role,
    //     categories,
    //     cities,
    //     id,
    //     birthday,
    //     firstName,
    //     lastName,
    //     emailAddress,
    //   } = action.payload.record
    //   return {
    //     ...state,
    //     role,
    //     categories,
    //     city: cities[0],
    //     id,
    //     birthday,
    //     isLoggedIn: true,
    //     firstName,
    //     lastName,
    //     emailAddress,
    //   }
    // }

    case AUTH.API_LOGIN_FULFILLED: {
      const nextAccountsRecords = action.payload.record.accounts
      const normalizedAccountsData = normalizeAccounts(nextAccountsRecords)
      state = dotProp.set(
        state,
        `accounts.entities.accounts`,
        {
          ...normalizedAccountsData.entities.accounts,
        }
      )
      state = dotProp.set(
        state, 
        `accounts.result`, 
        list => [...normalizedAccountsData.result]
      )

      const {
        role,
        categories,
        cities,
        id,
        birthday,
        firstName,
        lastName,
        emailAddress,
      } = action.payload.record
      return {
        ...state,
        role,
        categories,
        city: cities[0],
        id,
        birthday,
        firstName,
        lastName,
        emailAddress,
      }
    }

    case PROFILE.UPDATE_USER_SOCIAL_RECORDS: {
      const nextSocialsRecords = action.payload.records
      const normalizedSocialsData = normalizeSocials(nextSocialsRecords)
      state = dotProp.set(
        state,
        `socials.entities.socials`,
        {
          ...normalizedSocialsData.entities.socials,
        }
      )
      state = dotProp.set(
        state, 
        `socials.result`, 
        list => [...normalizedSocialsData.result]
      )
      return state
    }

    case PROFILE.UPDATE_USER_SHARE_RECORDS: {
      const nextSharesRecords = action.payload.records
      const normalizedSharesData = normalizeShares(nextSharesRecords)
      state = dotProp.set(
        state,
        `shares.entities.sharesByCampaignId`,
        {
          ...normalizedSharesData.entities.sharesByCampaignId,
        }
      )
      state = dotProp.set(
        state, 
        `shares.result`, 
        list => [...normalizedSharesData.result]
      )
      return state
    }
    

    case AUTH.API_LOGOUT_FULFILLED: {
      return initialState
    }
    
    default:
      return state
  }
}
