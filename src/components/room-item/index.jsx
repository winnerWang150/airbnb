import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'

import { Carousel } from 'antd'
import classNames from 'classnames'

import { RoomItemWrapper , RatingCpn, SwiperWrapper} from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'

const RoomItem = memo((props) => {
  const {roomItemData, itemWidth, isWrap, itemHandler} = props

  const carouselRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)


  // carsousel Element render
  const CarouselElement = (
    <SwiperWrapper >
      <div className='control'>
        <div className='left' onClick={(event) => prevHandler(true, event)}>
          <IconArrowLeft width='20' height='20'/>
        </div>
        <div className='right' onClick={(event) => prevHandler(false, event)}>
          <IconArrowRight width='20' height='20'/>
        </div>
      </div>
      <Carousel ref={carouselRef}  dots={false}>
        {roomItemData.picture_urls?.map(url => <div className='cover'><img src={url} alt="" /></div>)}
      </Carousel>
      <div className='indicator'>
        <Indicator currentIndex={currentIndex}>
          {roomItemData.picture_urls?.map((item, index) => <div key={index} className='dot-item'  onClick={() => dotHandler(index)}>
            <span className={classNames('dot',{isActive: currentIndex === index})}></span>
          </div>)}
        </Indicator>
      </div>
    </SwiperWrapper>
    )

    // normal picture render
  
    const normalElement = <div className='cover'><img src={roomItemData.picture_url} alt="" /></div>


  // change carousel to left or right
  const prevHandler = (isLeft, event) => {
    event.stopPropagation()
    let newIndex = currentIndex
    if (isLeft) {
      carouselRef.current.prev()
    } else {
      carouselRef.current.next()
    }

    isLeft? newIndex-=1 : newIndex+=1
    
    if(newIndex > roomItemData.picture_urls.length - 1)  newIndex = 0
    if(newIndex < 0) newIndex = roomItemData.picture_urls.length - 1

    setCurrentIndex(newIndex)

  }

  // click dot handler 
  const dotHandler = (index) => {
    setCurrentIndex(index)

  }

  const itemClickHandler = (roomItemData) => {
    itemHandler && itemHandler(roomItemData)
  }

  return (
    <RoomItemWrapper onClick={() => itemClickHandler(roomItemData)} verifyinfocolor={roomItemData.verify_info?.text_color || '#39576a'} itemwidth={itemWidth} isWrap={isWrap}>
      {roomItemData.picture_urls ? 
      CarouselElement : normalElement
    }
      <div className='describe'>{roomItemData.verify_info.messages.join('·')}</div>
      <div className='name'>
        {roomItemData.name}
      </div>
      <div className='price'>
        ¥{roomItemData.price}/晚
      </div>
      <div className='rating'>
        <div>
          <RatingCpn name="size-small" defaultValue={roomItemData.star_rating ?? 0} readOnly size="small" precision={0.5} fillcolor={roomItemData.star_rating_color || 'grey'} />
        </div>
        <div className='count'>
          {roomItemData.reviews_count}
        </div>
        <div className='comments'>
          {roomItemData.bottom_info?.content}
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  roomItemData: PropTypes.object
}

export default RoomItem