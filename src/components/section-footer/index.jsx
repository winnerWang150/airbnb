import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import {lightTheme} from '@/assets/theme'
const SectionFooter = memo((props) => {
  const {name, callbackMoreHandler} = props

  let currentName = '显示全部'
  if (name) currentName = '显示更多' + name
  
  // more click
  const clickHandler = () => {
    callbackMoreHandler && callbackMoreHandler()
  }

  return (
    <SectionFooterWrapper color={name? lightTheme.color.secondaryColor : '#000'}>
      <div className='container' onClick={clickHandler}>
        <div>{currentName}</div>
        <IconArrowRight/>
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter