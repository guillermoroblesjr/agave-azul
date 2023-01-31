import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { Store } from '@reduxjs/toolkit'
import { PersistGate } from 'redux-persist/integration/react'
import { Persistor } from "redux-persist/es/types"

// Internal Components
// ...

// Props
export type Props = {
  store: Store;
  persistor?: Persistor;
  children: JSX.Element;
}

// Memo'd Component
const Redux: React.FC<Props> = memo(function Redux({ store, children }) {
  return (
    <Provider store={store}>
      {children}
      {/* <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate> */}
    </Provider>
  )
})

// Default Export
export default Redux
