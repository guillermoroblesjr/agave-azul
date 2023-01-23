/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import SplashScreen from '~/src/components/SplashScreen/SplashScreen'

describe('(Component) SplashScreen', () => {
  describe(`SplashScreen with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <SplashScreen />
      )
    })

    it(`Contains the 'SplashScreen' class.`, () => {
      const el = wrapper.find('div.SplashScreen')
      expect(el).to.exist
    })
  })

  describe(`SplashScreen with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let splashScreenProps = {}

    beforeEach(() => {
      middlewares = [ thunk ]
      mockStore = configureMockStore(middlewares)
      store = mockStore({
        lob: {
          pick: '123'
        },
        userWants: {
          need: 'XXX'
        },
        lobDependantList: 'lobDependantList',
        geosuggestLocation: 'geosuggestLocation',
        wmUsNav: 'wmUsNav',
        masData: 'masData',
        mapLocationDetails: {
          userAddress: '123'
        },
        smartySuggestion: {
          suggestions: [{
            city: 'city',
            state: 'state',
            street: 'street'
          }]
        },
      })
      splashScreenProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <SplashScreen {...splashScreenProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
