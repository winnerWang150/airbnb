import React, { memo } from 'react'
import { FooterWrapper } from './style'

const Footer = memo(() => {
  console.log('app footer')
  return (
      <FooterWrapper>
        <div className='footer-content'>
          <div className='item'>
            <div className='item-inner'>
              <div className='spec'>爱彼迎</div>
              <div>爱彼迎新闻</div>
              <div>政策</div>
              <div>无障碍设施</div>
            </div>
          </div>
          <div className='item'>
            <div className='item-inner'>
                <div className='spec'>发现</div>
                <div>信任与安全</div>
                <div>旅行基金</div>
                <div>商务差旅</div>
                <div>爱彼迎杂志</div>
                <div>Airbnb.org</div>
            </div>
          </div>
          <div className='item'>
            <div className='item-inner'>
                <div className='spec'>出租</div>
                <div>为什么要出租</div>
                <div>待客之道</div>
                <div>房东义务</div>
                <div>开展体验</div>
                <div>资源中心</div>
            </div>
          </div>
          <div className='item'>
            <div className='item-inner'>
                <div className='spec'>客服支持</div>
                <div>帮助</div>
                <div>邻里支持</div>
            </div>
          </div>
        </div>
        <div className='copy-right'>
          @2022Airbnb,inc,All right reserved条款 隐私政策 网站地图 全国旅游投诉渠道 12301
        </div>
      </FooterWrapper>
  )
})

export default Footer