import React, { memo, useCallback } from 'react'
import { EntireRoomWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeRoomDetailAction } from '@/store/detail'

const Entirerooms = memo((props) => {

  const {list, totalCount, isLoading} = useSelector((state) => ({
    list: state.entrie.list,
    totalCount: state.entrie.totalCount,
    currentPage: state.entrie.currentPage,
    isLoading: state.entrie.isLoading
  }), shallowEqual)

  const dispatch = useDispatch()

  const Navigate = useNavigate()

  const itemClickHandler = useCallback((roomItem) => {
    console.log('roomItem', roomItem)
    Navigate('/detail')
    dispatch(changeRoomDetailAction(roomItem))
  }, [Navigate, dispatch])

  return (
    <EntireRoomWrapper>
      <div className='title'>共{totalCount}处住所</div>
      <div className='entrie-room-container'>
        {list.map(item => <RoomItem itemHandler={itemClickHandler} roomItemData={item} key={item._id} itemWidth="20%" isWrap={true}></RoomItem>)}
      </div>
      {isLoading && <div className='is-cover'></div>}
    </EntireRoomWrapper>
  )
})

export default Entirerooms