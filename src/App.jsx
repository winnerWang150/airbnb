import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routers from './router'

// import { Button, Space } from 'antd';

import Header from './components/app-header'
import Footer from './components/app-footer'
import useScrollTop from './hooks/useScrollTop'

const App = memo(() => {
  useScrollTop()

  return (
    <div className='app'>
      <Header/>
      <Suspense fallback={<h3>加载中...</h3>}>
        <div className='page'>
          {useRoutes(routers)}
        </div>
      </Suspense>
      <Footer/>
      <div>
      {/* <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space> */}
      </div>
    </div>
  )
})

export default App