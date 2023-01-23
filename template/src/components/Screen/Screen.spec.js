/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import Screen from '~/src/components/Screen/Screen'

describe('(Component) Screen', () => {
  describe(`Screen with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Screen />
      )
    })

    it(`Contains the 'Screen' class.`, () => {
      const el = wrapper.find('div.Screen')
      expect(el).to.exist
    })
  })

  describe(`Screen with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let screenProps = {}

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
      screenProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <Screen {...screenProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
