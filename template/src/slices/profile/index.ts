import { createSlice } from '@reduxjs/toolkit'
import International from '~/src/utils/intl'

export interface ProfileState {
  locale: string;
}

const initialState: ProfileState = {
  locale: new International().getLanguageWithoutRegionCode(),
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
})

export default profileSlice