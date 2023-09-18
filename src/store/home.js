import { fetchHome } from '@/services'
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

 const fetchGoodPriceAction = createAsyncThunk('home/fetchGoodPrice', async () => {
  const res = await fetchHome.fetchGoodPriceData()
  return res
})

const fetchHighScoreInfoAction =  createAsyncThunk('home/fetchHighScore', async (payload, store) => {
  console.log('payloadpayload', payload)
  console.log('contextcontext', store)
  const res = await fetchHome.fetchHighScoreData()
  return res

})

const fetchHomeDiscountAction =  createAsyncThunk('home/fetchDiscount', async (payload, store) => {
  const res = await fetchHome.fetchHomeDiscount()
  return res
})

const fetchHomeHotRecommendDestAction = createAsyncThunk('home/fetchHotRecommendDest', async (payload, store) => {
  const res = await fetchHome.fetchHomeHotRecommendDest()
  return res
})

const fetchHomeLongforAction = createAsyncThunk('/home/fetchLongfor', async () => {
  const res = await fetchHome.fetchLongForData()
  return res
})

const fetchHomePlusAction = createAsyncThunk('/home/fetchHomePlus', async () => {
  const res = await fetchHome.fetchHomePlusData()
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendDestInfo: {},
    longforInfo: {},
    homePlusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction (state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction (state, {payload}) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction (state, {payload}) {
      state.discountInfo = payload
    },
    changeHotRecommendDestInfoAction (state, {payload}) {
      state.initialState = payload
    },
    changeLongforAction (state, {payload}) {
      state.longforInfo = payload
    },
    changeHomePlusAction (state, {payload}) {
      state.homePlusInfo = payload
    } 
  },
  extraReducers: {
    [fetchGoodPriceAction.fulfilled] (state, {payload}) {
      state.goodPriceInfo = payload
    },
    [fetchHighScoreInfoAction.fulfilled] (state, {payload}) {
      state.highScoreInfo = payload
    },
    [fetchHomeDiscountAction.fulfilled] (state, {payload}) {
      state.discountInfo = payload
    },
    [fetchHomeHotRecommendDestAction.fulfilled] (state, {payload}) {
      state.hotRecommendDestInfo = payload
    },
    [fetchHomeLongforAction.fulfilled] (state, {payload}) {
      state.longforInfo = payload
    },
    [fetchHomePlusAction.fulfilled] (state, {payload}) {
      state.homePlusInfo = payload
    }
  }
})

export const {changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeHotRecommendDestInfoAction, changeLongforAction, changeHomePlusAction} = homeSlice.actions

export {fetchGoodPriceAction, fetchHighScoreInfoAction, fetchHomeDiscountAction, fetchHomeHotRecommendDestAction, fetchHomeLongforAction, fetchHomePlusAction} 

export default homeSlice.reducer