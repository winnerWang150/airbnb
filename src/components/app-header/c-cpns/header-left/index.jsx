import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconHeaderLogo from '@/assets/svg/icon-header-logo'
import { useNavigate } from 'react-router-dom'

const Left = memo(() => {

  const navigate = useNavigate()

  const logoClickHandler = () => {
    navigate('/home')
  }

  return (
    <LeftWrapper>
      <div className='logo' onClick={logoClickHandler}>
        <IconHeaderLogo/>
      </div>
    </LeftWrapper>
  )
})

export default Left