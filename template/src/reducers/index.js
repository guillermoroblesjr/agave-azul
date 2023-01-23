"use strict";

import counterReducer from '~/src/reducers/counterSlice'
import profileReducer from '~/src/reducers/profileSlice'

const rootReducer = {
  counter: counterReducer,
  profile: profileReducer,
}

export default rootReducer