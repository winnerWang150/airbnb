import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '../../../../components/section-header'
import { SectionLongforWrapper } from './style'
import SectionTabs from '@/components/section-tabs'

const SectionLongfor = memo((props) => {
  const {inforData} = props
  console.log(inforData)
  return (
    <SectionLongforWrapper>
      <SectionHeader title={inforData.title} subtitle={inforData.subtitle}/>
      <SectionTabs />
      <div className='longfor'>
        {
          inforData.list.map(item => (
            <div className='longfor-item'>
              <div className='longfor-item-img'>
                <img src={item.picture_url} alt="" />
              </div>
              <div className='longfor-item-text'>
                <div className='city'>{item.city}</div>
                <div className='price'>均价{item.price}</div>
              </div>
              <div></div>
            </div>
          ))
        }
      </div>
    </SectionLongforWrapper>
  )
})

SectionLongfor.propTypes = {
  inforData: PropTypes.object
}

export default SectionLongfor