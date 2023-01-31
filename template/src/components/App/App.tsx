import React, { memo } from 'react'
import { Store } from '@reduxjs/toolkit'
import { Persistor } from "redux-persist/es/types"
import Redux from '~/src/components/Redux'
import Main from '~/src/components/Main'
import { store } from '~/src/store'

// Internal Components
// ...

// Props
export type Props = {
  store: Store;
  persistor: Persistor;
  children: JSX.Element;
}

// Memo'd Component
const App: React.FC<Props> = memo(function App() {
  return (
    // <React.StrictMode>
      <Redux store={store} persistor={undefined}>
        <Main />
      </Redux>
    // </React.StrictMode>
  )
})

// Default Export
export default App
