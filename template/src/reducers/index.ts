"use strict";

import counterReducer from '~/src/reducers/counter'
import profileReducer from '~/src/reducers/profile'

const rootReducer = {
  counter: counterReducer,
  profile: profileReducer,
}

export default rootReducer