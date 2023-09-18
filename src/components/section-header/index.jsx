import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionHeaderWrapper } from './style'
const SectionHeader = memo((props) => {
  const {title, subtitle} = props
  return (
    <SectionHeaderWrapper>
      <div className='item'>
        <div className='title'>{title}</div>
        <div className='sub-title'>{subtitle ?? '来看看这些颇受好评的房源吧！'}</div>
      </div>
      <div className='item more'>
        {'>'}
      </div>
    </SectionHeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader