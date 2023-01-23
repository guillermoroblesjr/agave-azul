import React, { memo, PureComponent } from 'react'
import { Text } from 'react-native'
import { Component as SplashScreen } from '~/src/components/SplashScreen'
import { Component as Redux } from '~/src/components/Redux'
import { Action, AnyAction, Store } from '@reduxjs/toolkit'
import { Persistor } from "redux-persist/es/types"
import { NavigationContainer } from '@react-navigation/native'
// import { Container as ApiSpinner } from '~/src/components/ApiSpinner'
import { Container as Main } from '~/src/components/Main'
// import configureStore from '~/src/store/configureStore'
// import { DebuggerUI } from 'react-native-debugger'
// import { LOG_WITH_DEBUGGER } from '~/src/config'
import { store } from '~/src/store'

interface PropsFromState {}

interface Props {
  store: Store;
  persistor: Persistor;
  children: JSX.Element;
}

type ComponentProps = Props & PropsFromState;

export default class App extends PureComponent<ComponentProps> {

  persistor?: Persistor;

  // TODO: Clean up App component
  // This component should only include the components: Redux, SplashScreen and Main

  render() {
    return (
      <React.StrictMode>
        <Redux store={store} persistor={this.persistor}>
          <Main />
        </Redux>
      </React.StrictMode>
    )
  }
}
