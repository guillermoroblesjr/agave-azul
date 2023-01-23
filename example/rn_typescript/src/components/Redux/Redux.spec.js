/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import Redux from '~/src/components/Redux/Redux'

describe('(Component) Redux', () => {
  describe(`Redux with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Redux />
      )
    })

    it(`Contains the 'Redux' class.`, () => {
      const el = wrapper.find('div.Redux')
      expect(el).to.exist
    })
  })

  describe(`Redux with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let reduxProps = {}

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
      reduxProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <Redux {...reduxProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
