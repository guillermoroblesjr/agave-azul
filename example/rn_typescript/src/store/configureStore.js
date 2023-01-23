import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { createLogger } from 'redux-logger'
import async from "~/src/middleware/async"
import promise from "~/src/middleware/promise"
import array from "~/src/middleware/array"
import rootReducer from '~/src/reducers'
import DEV from '~/src/config'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { mapTransform } from '~/src/store/transforms'
import { createDebugger } from 'react-native-debugger'
import { LOG_WITH_DEBUGGER, IS_DEBUGGER_VISIBLE } from '~/src/config'

// TODO: add missing items to configureStore in ~/src/store/index.ts

const loggerMiddleware = createLogger({predicate: (getState,action) => DEV})

const persistConfig = {
  key: 'root',
  storage,
  transforms: [mapTransform({
    config: { whitelist: ['config'] }
  })]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = (initialState) => {
  const enhancer = LOG_WITH_DEBUGGER 
    ? compose(
      createDebugger({ // It should be placed before applyMiddleware!
        isVisible: IS_DEBUGGER_VISIBLE,
        allowServerLogging: false,
        eventTypes: [
        {
          TYPE: 'NETWORK_REQUEST',
          CATEGORY_NAME: 'Network request logging',
          EVENT_NAME: 'Net. Request',
        },
        ],
      }),
      applyMiddleware(
        thunk,
        async,
        apiMiddleware,
        promise,
        array,
        loggerMiddleware,
      ),
    )
    : compose(
      applyMiddleware(
        thunk,
        async,
        apiMiddleware,
        promise,
        array,
        loggerMiddleware,
      ),
    )
  return createStore(persistedReducer, initialState, enhancer)
}

export default (cb = () => null) => {
  let store = configureStore()
  let persistor = persistStore(store, null, () => cb(store))
  return { store, persistor }
}