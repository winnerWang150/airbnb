import { fetchEntire } from '@/services'
import * as actionTypes from './constance'

export const changeCurrentPageAction = (currentPage) => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
  }
}

export const changeChangeRoomList = (list) => {
  return {
    type: actionTypes.CHANGE_ROOM_LIST,
    list
  }
}

export const changeTotalCount = (totalCount) => {
  return {
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
  }
}

export const changeLoadingAction = (isLoading) => {
  return {
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading
  }
}


export const fetchRoomListAction = (currentPage) => {
  return (dispatch, getState) => {
    dispatch(changeLoadingAction(true))
    fetchEntire.fetchEntireList(currentPage * 20).then(res => {
      dispatch(changeChangeRoomList(res.list))
      dispatch(changeTotalCount(res.totalCount))
      dispatch(changeLoadingAction(false))
    })
  }
}