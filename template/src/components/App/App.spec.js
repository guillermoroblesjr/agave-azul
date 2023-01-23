/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import App from '~/src/components/App/App'

describe('(Component) App', () => {
  describe(`App with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <App />
      )
    })

    it(`Contains the 'App' class.`, () => {
      const el = wrapper.find('div.App')
      expect(el).to.exist
    })
  })

  describe(`App with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let appProps = {}

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
      appProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <App {...appProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
