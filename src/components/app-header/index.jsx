import React, { memo, useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import {ContextExtendWrapper, HeaderWrapper} from './style'
import Left from './c-cpns/header-left'
import Middle from './c-cpns/header-middle'
import Right from './c-cpns/header-right'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const Header = memo(() => {

  // is Show cover
  const [isShowCover, setIsShowCover] = useState(false)

  const {headerConfig} = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }))
  const {isFixed, isAlpha} = headerConfig
  
  // get ScrollX and ScrollY
  const {scrollY} = useScrollPosition()
  const preScrollY = useRef(0)
  if (!isShowCover) preScrollY.current = scrollY
  if (isShowCover && Math.abs(scrollY - preScrollY.current)> 30) setIsShowCover(false)

  const isHeaderAlpha = isAlpha && scrollY === 0

  // show cover
  const coverClickHandler = () => {
    setIsShowCover(false)
  }

  // click headerMiddle 
  const isShowCoverHandler = useCallback(() => {
    setIsShowCover(true)
    
  }, [])

  return (
    <ThemeProvider theme={{isHeaderAlpha}}>
      <HeaderWrapper isFixed={isFixed} className={classNames({fixed: isFixed})} >
        <div className='top'>
          <div className='context'>
            <Left/>
            <Middle isShowCover={isShowCover || isHeaderAlpha} isShowCoverHandler={() => isShowCoverHandler()}/>
            <Right/>
          </div>
          <ContextExtendWrapper isShowCoverHandler={isShowCover || isHeaderAlpha}></ContextExtendWrapper>
        </div>
        {isShowCover && <div className='cover' onClick={() => coverClickHandler()}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default Header