/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import Faq from '~/src/components/Faq/Faq'

describe('(Component) Faq', () => {
  describe(`Faq with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Faq />
      )
    })

    it(`Contains the 'Faq' class.`, () => {
      const el = wrapper.find('div.Faq')
      expect(el).to.exist
    })
  })

  describe(`Faq with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let faqProps = {}

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
      faqProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <Faq {...faqProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
