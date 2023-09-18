import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndecatorWrapper } from './style'

const Indicator = memo((props) => {

  // props carousel currentIndex
  const {currentIndex = 0} = props


  // get carousel Element`s father Element
  const currentFatherRef = useRef()

  
  useEffect(() => {
   console.log(currentIndex)
   // get currentIndex Element 
   const getCurrentElement = currentFatherRef.current.children[currentIndex]
   console.log(getCurrentElement.offsetLeft)
   console.log(currentFatherRef.current.clientWidth)
   // get currentIndex Element distance from start Element 
   debugger
   let getCurrentElementDistance = getCurrentElement.offsetLeft + getCurrentElement.clientWidth*0.5 - currentFatherRef.current.clientWidth * 0.5

   console.log(getCurrentElementDistance)
   
    // left move limit

   if (getCurrentElementDistance < 0) getCurrentElementDistance = 0


   // right move limit
   const totalMoveDistance = currentFatherRef.current.scrollWidth - currentFatherRef.current.clientWidth

    if (totalMoveDistance < getCurrentElementDistance) getCurrentElementDistance = totalMoveDistance

  //  transform X
   currentFatherRef.current.style.transform = `translateX(${-getCurrentElementDistance}px)`
  },[currentIndex])

  return (
    <IndecatorWrapper>
      <div className='item-content' ref={currentFatherRef}>
        {props.children}
      </div>
    </IndecatorWrapper>
  )
})

Indicator.propTypes = {
  currentIndex: PropTypes.number
}

export default Indicator