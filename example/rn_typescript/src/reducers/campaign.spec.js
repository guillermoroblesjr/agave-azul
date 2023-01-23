import deepFreeze from 'deep-freeze-strict'
import { MY_ACTION_TYPE } from '~/src/constants/myActionGroup/myActionTypeFile'

import campaign from '~/src/reducers/campaign'

describe(`(Reducers)`, () => {
  describe(`campaign`, () => {
    it(`Should return a default state.`, () => {
      expect(
        campaign(undefined, {})
      ).to.not.be.undefined
    })

    it(`Should return a new state and not modify the previous state.`, () => {
      const stateBefore = `#`
      const stateAfter = `#`
      const action = {
        type: undefined
      }

      deepFreeze(stateBefore)
      deepFreeze(action)

      expect(stateBefore).to.be.frozen
      expect(action).to.be.frozen

      expect(
        campaign(stateBefore, action)
      ).to.eql(stateAfter)
    })

    describe(`Case: user logs out.`, () => {
      it(`Should return the initial state`, () => {
        const stateBefore = `someUrl`
        const stateAfter = `#`
        const action = {
          type: MY_ACTION_TYPE,
        }

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(stateBefore).to.be.frozen
        expect(action).to.be.frozen

        expect(
          campaign(stateBefore, action)
        ).to.eql(stateAfter)
      })
    })
  })
})
