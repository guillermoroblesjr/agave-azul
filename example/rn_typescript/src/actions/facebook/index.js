import { 
  FB_LOGIN_FULFILLED,
  FB_LOGOUT_FULFILLED,
} from '~/src/constants/facebook'

export const fbLoginSuccess = data => {
  return {
    type: FB_LOGIN_FULFILLED,
    payload: data
  }
}

export const fbLogoutSuccess = data => {
  return {
    type: FB_LOGOUT_FULFILLED,
    payload: data
  }
}

// export const facebookThunk = () => (dispatch, getState) => {
//   const {} = getState()
//   dispatch(
//     facebook({})
//   )
//   return null
// }
