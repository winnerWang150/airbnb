import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '../../../../components/section-header'
import SectionTabs from '@/components/section-tabs'
import ScrollView from '@/base-ui/scroll-view'

import { SectionLongforWrapper } from './style'

const SectionLongfor = memo((props) => {
  const {inforData} = props
  console.log(inforData)
  return (
    <SectionLongforWrapper>
      <SectionHeader title={inforData.title} subtitle={inforData.subtitle}/>
      <SectionTabs />
      {/* <div className='longfor'> */}
      <ScrollView>
        {
            inforData.list.map((item,index) => (
              <div className='longfor-item' key={index}>
                <div className='longfor-item-img'>
                  <img src={item.picture_url} alt="" />
                  <div className='longfor-conver'></div>
                </div>
                <div className='longfor-item-text'>
                  <div className='city'>{item.city}</div>
                  <div className='price'>均价{item.price}</div>
                </div>
              </div>
            ))
          }
      </ScrollView>
      {/* </div> */}
    </SectionLongforWrapper>
  )
})

SectionLongfor.propTypes = {
  inforData: PropTypes.object
}

export default SectionLongfor