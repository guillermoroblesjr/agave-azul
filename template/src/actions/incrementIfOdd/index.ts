import { AppThunk } from '~/src/store'
import { selectCount } from '~/src/selectors/count'
import { incrementByAmount } from '~/src/actions/counter'

// DIFFERENT THUNK

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount))
    }
  }