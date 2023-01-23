import {
  mapDispatchToProps,
  mapStateToProps,
} from '~/src/components/Screen/ScreenContainer'

describe(`(Container) Screen`, () => {
  it(`Should return redux action.`, () => {
    const dispatch = () => {}
    expect(mapDispatchToProps(dispatch).reduxActions).to.be.an.object
  })
  it(`Should return redux state.`, () => {
    const state = {}
    expect(mapStateToProps(state).reduxState).to.be.an.object
  })
})
