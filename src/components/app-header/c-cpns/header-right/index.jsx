import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
const Right = memo(() => {
  const [isShow, setShow] = useState(false)

  const profileClickHandler = (e) => {
    // e.stopPropagation()
    setShow(true)
  }

  useEffect(() => {
    const cancelProfileClickHandler = () => {
      setShow(false)
    }
    window.addEventListener('click', cancelProfileClickHandler, true)
    return () => {
      window.removeEventListener('click', cancelProfileClickHandler, true)
    }
  },[])

  return (
    <RightWrapper>
      <div className='btns'>
        <span>登录</span>
        <span>注册</span>
        <IconGlobal/>
      </div>
      <div className='profile' onClick={profileClickHandler}>
        <span className='profile-menu'>
          <IconProfileMenu/>
        </span>
        <span className='avatar'>
          <IconProfileAvatar/>
        </span>
        {isShow ? (
        <div className='pannel'>
          <div className='pannel-top'>
            <div className='btn'>注册</div>
            <div className='btn'>登录</div>
          </div>
          <div className='pannel-bottom'>
            <div className='btn'>出租房源</div>
            <div className='btn'>开展体验</div>
            <div className='btn'>帮助</div>
          </div>
        </div>
        ): ''}

      </div>
    </RightWrapper>
  )
})

export default Right