import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { SectionHomeWrapper } from './style'
import SectionFooter from '@/components/section-footer'
import { useNavigate } from 'react-router-dom'

const SectionHome = memo((props) => {
  const {inforData, itemWidth, isWrap} = props

  const navigate = useNavigate()

  // click more callback
  const callbackMoreHandler = useCallback(() => {
    navigate('/entries')
  }, [navigate])

  return (
    <SectionHomeWrapper>
        <SectionHeader title={inforData.title} subtitle={inforData.subtitle}/>
        <SectionRooms roomList={inforData.list} itemWidth={itemWidth} isWrap={isWrap}/>
        <SectionFooter callbackMoreHandler={callbackMoreHandler}/>
    </SectionHomeWrapper>
  )
})

SectionHome.propTypes = {
  inforData: PropTypes.object
}

export default SectionHome