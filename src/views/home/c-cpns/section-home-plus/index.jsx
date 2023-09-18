import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionHomePlusWrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'

const SectionHomePlus = memo((props) => {
  const {inforData, itemWidth, isWrap} = props
  return (
    <SectionHomePlusWrapper>
      <SectionHeader title={inforData.title} subtitle={inforData.subtitle}/>
      <ScrollView>
      {
        inforData.list?.map(item => <RoomItem key={item.id} roomItemData={item} itemWidth={itemWidth} isWrap={isWrap}/>
        )
      }
      </ScrollView>
    </SectionHomePlusWrapper>
  )
})

SectionHomePlus.propTypes = {
  inforData: PropTypes.object
}

export default SectionHomePlus