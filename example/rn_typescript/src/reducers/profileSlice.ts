import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import International from '~/src/utils/intl'

// TODO: delete comments and clean up language files

// REDUCER TYPES

export interface ProfileState {
  locale: string;
}

const initialState: ProfileState = {
  locale: new International().getLanguageWithoutRegionCode(),
}

// REDUCER (SLICE)

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// ACTIONS

// export const { increment, decrement, incrementByAmount } = profileSlice.actions

// SELECTORS

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.profile.value)`
// export const selectCount = (state: RootState) => state.profile.value

// EXPORT THE DEFAULT REDUCER

export default profileSlice.reducer;
