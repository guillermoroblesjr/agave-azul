import { RSAA } from 'redux-api-middleware'
import config from '~/src/config'
import INSTAGRAM from '~/src/constants/instagram'
import _ from 'lodash'

const {
  instagram,
} = config.get()

// this is using thunk to dispatch the throttled action
const webTopSearch = (data) => async (dispatch) => {
  const url = `${instagram.topsearch.url}?query=${data.query}`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: instagram.topsearch.verb,
      type: INSTAGRAM.API_INSTAGRAM_WEB_TOPSEARCH
    }
  })
}

// we only want to set up the throttling once
const throttledInstagramWebTopSearch = _.throttle(
  (dispatch, data) => dispatch(webTopSearch(data)),
  800,
  {
    leading: true,
    trailing: true,
  }
)

export const apiInstagramWebTopSearch = (data) => dispatch => throttledInstagramWebTopSearch(dispatch, data)

export const resetWebInstagramTopSearch = () => ({
  type: INSTAGRAM.RESET_INSTAGRAM_WEB_TOPSEARCH,
})