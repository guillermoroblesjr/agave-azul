import { createSelector } from 'reselect'

export const activeRequestsSelector = state => state.activeRequests ? state.activeRequests : []
export const hasActiveRequestsSelector = createSelector(
  activeRequestsSelector,
  activeRequests => {
    if (!activeRequests) return false
    return  activeRequests.length > 0
  }
)