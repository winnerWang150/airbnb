import {createSlice} from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: true,
      isAlpha: false
    }
  },
  reducers: {
    changeHeaderAction (state, {payload}) {
      state.headerConfig = payload
    }
  }
})

export const {changeHeaderAction} = mainSlice.actions
export default mainSlice.reducer