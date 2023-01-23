import { createSelector } from 'reselect'
import _ from 'lodash'

export const instagramSelector = state => state.instagram
export const webTopSearchSelector = createSelector(
  instagramSelector,
  instagram => _.isUndefined(instagram.webTopSearch) ? {} : instagram.webTopSearch
)
export const usersSelector = createSelector(
  webTopSearchSelector,
  webTopSearch => _.isUndefined(webTopSearch.users) ? [] : webTopSearch.users
)
