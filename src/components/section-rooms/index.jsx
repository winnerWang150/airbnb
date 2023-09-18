import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '../room-item'
import { SectionRoomWrapper } from './style'

const SectionRooms = memo((props) => {
  const {roomList, itemWidth='25%', isWrap=true, itemClickHandler} = props
  
  return (
    <SectionRoomWrapper isWrap={isWrap}>
    {
      roomList?.slice(0, 8).map(item => <RoomItem itemClickHandler={itemClickHandler} key={item.id} roomItemData={item} itemWidth={itemWidth} isWrap={isWrap}/>
      )
    }
    </SectionRoomWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms