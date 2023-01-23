import { createSelector } from 'reselect'

export const googleSelector = state => state.google
export const citySearchSelector = createSelector(
  googleSelector,
  google => google.citySearch ? google.citySearch : []
)