import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import Entirerooms from './c-cpns/entrie-rooms'
import filterData from '@/assets/data/filter_data.json'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/entrie/createrActions'
import { changeHeaderAction } from '@/store/main'
const Entire = memo((props) => {


  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderAction({
      isFixed: true
    }))
  }, [dispatch])


  return (
    <EntireWrapper>
      <EntireFilter filterData={filterData}/>
      <Entirerooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})


export default Entire