/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import Scroll from '~/src/components/Scroll/Scroll'

describe('(Component) Scroll', () => {
  describe(`Scroll with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Scroll />
      )
    })

    it(`Contains the 'Scroll' class.`, () => {
      const el = wrapper.find('div.Scroll')
      expect(el).to.exist
    })
  })

  describe(`Scroll with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let scrollProps = {}

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
      scrollProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <Scroll {...scrollProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
