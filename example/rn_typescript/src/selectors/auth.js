import { createSelector } from 'reselect'
// import createCachedSelector from 're-reselect'

export const authSelector = state => state.auth
export const isLoggedInSelector = createSelector(
  authSelector,
  auth => typeof auth.isLoggedIn !== undefined ? auth.isLoggedIn : false
)
// export const isLoggedInSelector = createCachedSelector(
//   authSelector,
//   auth => typeof auth.isLoggedIn !== undefined ? auth.isLoggedIn : false
// )(
//   (state, arg1) => arg1 // Use arg1 as cacheKey
// )
export const roleSelector = createSelector(
  authSelector,
  auth => typeof auth.role !== undefined ? auth.role : ``
)
