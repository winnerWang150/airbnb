import React, { memo, useEffect } from 'react'

import { DetailWrapper } from './style'
import DetailPicture from './c-cpns/detail-picture'
import DetailInfos from './c-cpns/detail-infos'
import { useDispatch } from 'react-redux'
import { changeHeaderAction } from '@/store/main'

const Detail = memo(() => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderAction({
      isFixed: false
    }))
  })

  return (
    <DetailWrapper>
      <DetailPicture></DetailPicture>
      <DetailInfos></DetailInfos>
    </DetailWrapper>
  )
})

export default Detail