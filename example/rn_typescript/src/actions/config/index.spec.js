import configureMockStore from 'redux-mock-store'
import deepFreeze from 'deep-freeze-strict'
import thunk from 'redux-thunk'
import { bindActionCreators } from 'redux'
import { MY_ACTION_TYPE } from '~/src/constants/myActionGroup/myActionTypeFile'
import config from '~/src/actions/config'
// import configThunk from '~/src/actions/config'

describe(`(Action Creators)`, () => {
  describe(`config`, () => {
    let middlewares, mockStore, store
    let spies = {}

    beforeEach(() => {
      middlewares = [ thunk ]
      mockStore = configureMockStore(middlewares)
      store = mockStore({
        // lob: {
        //   pick: `residence`
        // },
      })
    })

    it(`Should be exported as a function.`, () => {
      expect(config).to.be.a('function')
    })

    it(`Should return an action with type "SOME_ACTION_GOES_HERE".`, () => {
      const data = store.getState()
      expect(
        config(data)
      ).to.have.property('type', MY_ACTION_TYPE)
    })

    it(`Should return an action with a payload that is defined`, () => {
      const data = store.getState()
      expect(
        config(data).payload
      ).to.not.be.undefined
    })
  })

  // describe(`configThunk`, () => {
  //   let middlewares, mockStore, store
  //   let _spies = {}
  //
  //   beforeEach(() => {
  //     middlewares = [ thunk ]
  //     mockStore = configureMockStore(middlewares)
  //     store = mockStore({
  //       lob: {
  //         pick: `business`
  //       },
  //     })
  //   })
  //
  //   it(`Should dispatch configThunk()`, () => {
  //     const action = configThunk()
  //     const expectedActions = [
  //       { type: `SOME_ACTION_GOES_HERE` }
  //     ]
  //     store.dispatch(action)
  //     expect(
  //       store.getActions()[0].type
  //     ).to.eql(expectedActions[0].type)
  //   })
  // })

})
