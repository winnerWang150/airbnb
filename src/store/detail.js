import {createSlice} from '@reduxjs/toolkit'

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    roomDetail: JSON.parse(localStorage.getItem('roomDetail')) || {}
  },
  reducers: {
    changeRoomDetailAction (state, {payload}) {
      state.roomDetail = payload
      localStorage.setItem('roomDetail', JSON.stringify(payload))
    }
  }
})

export const {changeRoomDetailAction} = detailSlice.actions

export default detailSlice.reducer