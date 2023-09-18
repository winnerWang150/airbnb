import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { SectionHomeV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
import { useNavigate } from 'react-router-dom'

const SectionHomeV2 = memo((props) => {
  const {inforData, itemWidth} = props

  const navigate = useNavigate()

  const tabNames = inforData?.dest_address?.map(item => item.name)
  console.log('props', props)
  // getAreaIndex

  const initialName =  Object.keys(inforData?.dest_list ?? {})[0]
  console.log('destList', initialName)

  const [tabName, setTabName] = useState(initialName)
  
  const getEmitIndexHandler = useCallback ((index, name) => {
    setTabName(name)
  }, [])

    // click more callback
    const callbackMoreHandler = () => {
      navigate('/entries')
    }

  return (
    <SectionHomeV2Wrapper>
      <SectionHeader title={inforData?.title} subtitle={inforData?.subtitle} />
      <SectionTabs tabNames={tabNames} emitClickHandler={(index, name) => getEmitIndexHandler(index, name)}/>
      <SectionRooms roomList={inforData?.dest_list?.[tabName]} itemWidth={itemWidth}/>
      <SectionFooter name={tabName} callbackMoreHandler={callbackMoreHandler}/>
  </SectionHomeV2Wrapper>
  )
})

SectionHomeV2.propTypes = {
  infoData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default SectionHomeV2