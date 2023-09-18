import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { changeCurrentPageAction, fetchRoomListAction } from '@/store/entrie/createrActions'
import { EntirePaginationWrapper } from './style'
import { Pagination } from '@mui/material'
import { useScrollTop } from '@/utils'
const EntirePagination = memo((props) => {
  const {currentPage, totalCount, list} = useSelector((state) => ({
    list: state.entrie.list,
    totalCount: state.entrie.totalCount,
    currentPage: state.entrie.currentPage
  }), shallowEqual)

  const dispatch = useDispatch()

  const [, setScrollY] = useScrollTop()

  const pageNumb = Math.ceil(totalCount / 20)

  const [counter, setCounter] = useState()

  const [, setNewPages] = useState()

  useEffect(() => {
    setCounter(pageNumb)
  }, [pageNumb])

  const changePageHandler = useCallback( (event, newPage) => {
    debugger
    setNewPages(newPage)
    dispatch(changeCurrentPageAction(newPage))
    dispatch(fetchRoomListAction(newPage - 1))
    setScrollY(0)
  }, [dispatch, setScrollY])
  return (
    <EntirePaginationWrapper>
      <div className='pagination'>
        <Pagination count={counter} onChange={changePageHandler}/>
      </div>
      {!!list.length && <div className='describe'>
        {`第${(currentPage - 1) * 20 + 1} - ${currentPage * 20}个房源 总共${totalCount}个`}
      </div>}
    </EntirePaginationWrapper>
  )
})


export default EntirePagination