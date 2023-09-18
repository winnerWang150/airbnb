import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  const children = props.children
  console.log('children', children)
  // 获取可滚动区域
  const scrollRef = useRef()

  const [rightBtnStatus, setRightBtnStatus] = useState(true)

  const [leftBtnStatus, setLeftBtnStatus] = useState(false)

  // const [positionIndex, setPositionIndex] = useState(0)
  const positionIndex = useRef(0)

  const scrollDistance = useRef()

  useEffect(() => {
    console.log('change')
    const scrollWidth = scrollRef.current.scrollWidth
    const clientWidth = scrollRef.current.clientWidth
    scrollDistance.current = scrollWidth - clientWidth
    if (scrollDistance.current === 0) {
      setRightBtnStatus(false)
    } 
  }, [children])

  // 右切
  const clickLeftHandler = (isLeft) => {
      isLeft ? positionIndex.current -= 1 : positionIndex.current += 1
      let newIndex = positionIndex.current
      let newOffsetLeft =  scrollRef.current.children[newIndex].offsetLeft
      scrollRef.current.style.transform = `translateX(${-newOffsetLeft}px)`
      // setPositionIndex(newIndex)
      setRightBtnStatus(scrollDistance.current > newOffsetLeft)
      setLeftBtnStatus( newOffsetLeft > 0)
  }

  // 左切
  // const clickLeftHandler = () => {
  //   let newIndex = positionIndex - 1
  //   let newOffsetLeft = scrollRef.current.children[newIndex].offsetLeft
  //   scrollRef.current.style.transform = `translateX(${-newOffsetLeft}px)`
  //   setPositionIndex(newIndex)
  //   setRightBtnStatus( scrollDistance.current > newOffsetLeft)
  //   setLeftBtnStatus( newOffsetLeft > 0)
  // }

  return (
    <ScrollViewWrapper>
      {leftBtnStatus && (<span className='left' onClick={() => clickLeftHandler(true)}>
        <IconArrowLeft/>
      </span>)}
      <div className='scroll-container'>
        <div className='context' ref={scrollRef}>
          {children}
        </div>
      </div>
      {rightBtnStatus && <span className='right' onClick={() => clickLeftHandler(false)}>
      <IconArrowRight/>
      </span>}
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {
  children: PropTypes.array
}

export default ScrollView