/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import Main from '~/src/components/Main/Main'

describe('(Component) Main', () => {
  describe(`Main with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Main />
      )
    })

    it(`Contains the 'Main' class.`, () => {
      const el = wrapper.find('div.Main')
      expect(el).to.exist
    })
  })

  describe(`Main with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let mainProps = {}

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
      mainProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <Main {...mainProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
