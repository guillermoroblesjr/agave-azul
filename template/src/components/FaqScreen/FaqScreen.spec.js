/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import FaqScreen from '~/src/components/FaqScreen/FaqScreen'

describe('(Component) FaqScreen', () => {
  describe(`FaqScreen with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <FaqScreen />
      )
    })

    it(`Contains the 'FaqScreen' class.`, () => {
      const el = wrapper.find('div.FaqScreen')
      expect(el).to.exist
    })
  })

  describe(`FaqScreen with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let faqScreenProps = {}

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
      faqScreenProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <FaqScreen {...faqScreenProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
