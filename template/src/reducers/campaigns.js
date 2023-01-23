import dotProp from 'dot-prop-immutable'
import { 
  LOGOUT_FULFILLED,
} from '~/src/constants/auth'
import CAMPAIGN from '~/src/constants/campaign'
import CAMPAIGNS from '~/src/constants/campaigns'
import AUTH from '~/src/constants/auth'
import {
  normalizeCampaigns
} from '~/src/normalize/campaigns'

// Must be a pure function that requires the state
// and the action being dispatched.
const initialState = {
  entities: {
    campaigns: {}
  },
  result: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
    // NEVER mutate the state, always return a new state.
    case LOGOUT_FULFILLED: {
      return initialState
    }

    case CAMPAIGN.API_GET_CAMPAIGNS_FULFILLED: {
      const nextCampaignRecords = action.payload.records
      const normalizedCampaignsData = normalizeCampaigns(nextCampaignRecords)
      
      state = dotProp.set(
        state,
        `entities.campaigns`,
        {
          ...state.entities.campaigns,
          ...normalizedCampaignsData.entities.campaigns,
        }
      )
      state = dotProp.set(
        state, 
        `result`, 
        list => [...list, ...normalizedCampaignsData.result]
      )
      return state
    }

    case CAMPAIGNS.RESET_CAMPAIGNS: {
      return initialState
    }

    case AUTH.API_LOGOUT_FULFILLED: {
      return initialState
    }

    default:
      return state
  }
}
