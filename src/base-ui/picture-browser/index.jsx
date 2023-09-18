import React, { memo, useEffect, useState } from 'react'

import { PictureBrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import IconToggle from '@/assets/svg/icon-toggle'
import Indicator from '../indicator'
import classNames from 'classnames'

const PictureBrowSer = memo((props) => {
  const {cancelBrowserHandler, picture_urls = []} = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [isShowList, setIsShowList] = useState(true)

  useEffect(() => {
    document.querySelector('body').style.overflow="hidden"
    return () => {
      document.querySelector('body').style.overflow="auto"
    } 
  })

  const cancelHandler = () => {
    cancelBrowserHandler&&cancelBrowserHandler()
  }

  // changePic left or right
  const changePicHandler = (isLeft) => {
    let newIndex = isLeft? currentIndex - 1 : currentIndex + 1
    if (newIndex > picture_urls.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = picture_urls.length - 1
    console.log(newIndex)
    let newIsNext = isLeft? false : true
    setIsNext(newIsNext)
    setCurrentIndex(newIndex)
  }

  // currentindex changed when indicator click 
  const indicatorClickHandler = (index) => {
    if (currentIndex > index) setIsNext(false)
    else setIsNext(true)
    setCurrentIndex(index)
  }


  return (
    <PictureBrowserWrapper isNext={isNext} isShowList={isShowList}>
      <div className='picture-browser-top' onClick={() => cancelHandler()}>
        <div className='icon-close'>
          <IconClose/>
        </div>
      </div>
      <div className='picture-browser-list'>
        <div className='control'>
          <div className='btn left' onClick={() =>  changePicHandler(true)}>
            <IconArrowLeft width='77' height='77'/>
          </div>
          <div className='btn right' onClick={() =>  changePicHandler(false)}>
            <IconArrowRight width='77' height='77'/>
          </div>
        </div>
        <div className='picture'>
          <SwitchTransition mode='in-out'>
            <CSSTransition key={picture_urls[currentIndex]} classNames='pic' timeout={200}>
              <img src={picture_urls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className='picture-browser-indicator'>
        <div className='info-position'>
          <div className='info-container'>
            <div className='info'>
              <div className='count'>{currentIndex + 1}/{picture_urls.length}</div>
              <div className='desc'>I SETTE CONI - TRULLO EDERA图片22</div>
            </div>
            <div className='toggle' onClick={() => {setIsShowList(!isShowList)}}>
              <span>隐藏照片列表</span>
              <IconToggle/>
            </div>
          </div>
          <div className='indicator'>
            <Indicator currentIndex={currentIndex}>
              {picture_urls.map((item, index) => <div className='dot' onClick={() => indicatorClickHandler(index)}>
                <img src={item} className={classNames('item', {isActive: currentIndex === index})} alt="" />
              </div> )}
            </Indicator>
          </div>

        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

export default PictureBrowSer