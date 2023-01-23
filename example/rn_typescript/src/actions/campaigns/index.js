import CAMPAIGNS from '~/src/constants/campaigns'

export const resetCampaigns = () => {
  return {
    type: CAMPAIGNS.RESET_CAMPAIGNS,
  }
}

export const resetCampaignsField = data => {
  return {
    type: CAMPAIGNS.RESET_CAMPAIGNS_FIELD,
    payload: data
  }
}
