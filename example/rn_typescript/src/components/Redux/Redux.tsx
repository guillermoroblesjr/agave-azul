import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { Action, AnyAction, Store } from '@reduxjs/toolkit'
import { PersistGate } from 'redux-persist/integration/react'
import { Persistor } from "redux-persist/es/types"

interface PropsFromState {}

interface Props {
  store: Store;
  persistor?: Persistor;
  children: JSX.Element;
}

type ComponentProps = Props & PropsFromState;

// TODO: add PersistGate component

export default class Redux extends PureComponent<ComponentProps> {
  render() {
    return (
      <Provider store={this.props.store}>
        {this.props.children}
        {/* <PersistGate loading={null} persistor={this.props.persistor}>
          {this.props.children}
        </PersistGate> */}
      </Provider>
    )
  }
}
