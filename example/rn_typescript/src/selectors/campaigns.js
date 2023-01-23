import { createSelector } from 'reselect'

export const campaignsSelector = state => state.campaigns
export const campaignsEntitiesSelector = createSelector(
  campaignsSelector,
  campaigns => campaigns.entities && campaigns.entities.campaigns
    ? campaigns.entities.campaigns
    : {}
)
export const campaignsResultSelector = createSelector(
  campaignsSelector,
  campaigns => campaigns.result ? campaigns.result : []
)