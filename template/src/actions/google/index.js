import { RSAA } from 'redux-api-middleware'
import config from '~/src/config'
import {
  PLACE_AUTOCOMPLETE,
  RESET_PLACE_AUTOCOMPLETE,
} from '~/src/constants/google'
import _ from 'lodash'

const {
  google,
} = config.get()

// this is using thunk to dispatch the throttled action
const autoComplete = (data) => async (dispatch) => {
  const url = `${google.maps.url}&input=${data.input}&types=(cities)`
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: google.maps.verb,
      type: PLACE_AUTOCOMPLETE
    }
  })
}

// we only want to set up the throttling once
const throttledAutoComplete = _.throttle(
  (dispatch, data) => dispatch(autoComplete(data)),
  800,
  {
    leading: true,
    trailing: true,
  }
)

export const placeAutocomplete = (data) => dispatch => throttledAutoComplete(dispatch, data)

export const resetPlaceAutocomplete = () => ({
  type: RESET_PLACE_AUTOCOMPLETE,
})