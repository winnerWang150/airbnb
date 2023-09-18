import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const Demo = memo(() => {
  const names = ['张三', '李四', '王五', '赵6', '陈七', '周八', 'winner', 'james', 'Ammy']

  const [currentIndex, setCurrentIndex] = useState(0)
  

  // click prev page
  const prevClickHandler = (isPrev = true) => {
    let newPage = isPrev ? currentIndex - 1 : currentIndex + 1
    if (newPage < 0) {
      newPage = names.length -1
    } else if (newPage > names.length -1 ) {
      newPage = 0
    }
    console.log(newPage)
    setCurrentIndex(newPage)
  }

  // click Btn page 
  const changeBtnPosition = (index) => {
    setCurrentIndex(index)
  } 

  return (
    <DemoWrapper>
      <div className='control'>
        <div className='left' onClick={() => prevClickHandler(true)}>上一页</div>
        <div className='下一页' onClick={() => prevClickHandler(false)}>下一页</div>
      </div>
      <div className='list'>
        <Indicator currentIndex = {currentIndex}>
          {
            names.map((item, index) => <button className={classNames({isActive: currentIndex === index})} key={index} onClick={() => changeBtnPosition(index)}>{item}</button>)
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo