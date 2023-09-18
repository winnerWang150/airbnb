import {configureStore} from '@reduxjs/toolkit'


import homeReducer from './home'
import entrieReducer from './entrie'
import detailReducer from './detail'
import mainReducer from './main'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entrie: entrieReducer,
    detail: detailReducer,
    main: mainReducer
  }
})

export default store