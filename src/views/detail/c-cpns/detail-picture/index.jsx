import React, { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import { DetailPictureWrapper } from './style'
import PictureBrowSer from '@/base-ui/picture-browser'

const DetailPicture = memo(() => {

  const [showMorePic, setShowMorePic] = useState(false)

  const {roomDetail} = useSelector((state) => ({
    roomDetail: state.detail.roomDetail
  }))

  // cancel dialog model
  const cancelBrowserHandler = useCallback(() => {
    setShowMorePic(false)
  }, [])


  return (
    <DetailPictureWrapper>
      <div className='pictures'>
        <div className='pictures-left'>
          <div className='item' onClick={() => setShowMorePic(true)}>
            <img src={roomDetail.picture_urls[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='pictures-right'>
          {
            roomDetail.picture_urls.slice(1, 5).map((item, index) => {
              return (
                <div className='item' key={index} onClick={() => setShowMorePic(true)}>
                  <img src={item} alt="" />
                  <div className='cover'></div>
              </div>
              )
            })
          }
        </div>
      </div>
      <div className='show-picture' onClick={() => setShowMorePic(!showMorePic)}>
        显示照片
      </div>
      {showMorePic && <PictureBrowSer cancelBrowserHandler={cancelBrowserHandler} picture_urls={roomDetail.picture_urls}/>}
    </DetailPictureWrapper>
  )
})

export default DetailPicture