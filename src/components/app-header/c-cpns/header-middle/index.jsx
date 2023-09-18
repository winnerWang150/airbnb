import React, { memo, useState } from 'react'

import { MiddleWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c-cpns/search-tabs'
import SearchTitles from '@/assets/data/search_titles.json'
import SearchSections from './c-cpns/search-sections'
import { CSSTransition } from 'react-transition-group'

const Middle = memo((props) => {
  const {isShowCoverHandler, isShowCover=false} = props
  const [currentIndex, setCurrentIndex] = useState(0)


  // get SearchTitles jsondata
  const titles = SearchTitles.map(item => item.title)

  const clickMiddleHandler = () => {
    isShowCoverHandler&&isShowCoverHandler()
  }

  const itemclickHandler = (index) => {
    console.log(index)
    setCurrentIndex(index)
  }

  return (
    <MiddleWrapper onClick={() => clickMiddleHandler()}>
      <CSSTransition 
        in={!isShowCover}
        classNames={'bar'}
        timeout={200}
        unmountOnExit={true}
      >
        <div className='search'>
          <div className='search-frame'>
            搜索房源和体验
          </div>
          <div className='search-icon'>
            <IconSearchBar/>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isShowCover}
        classNames={'detail'}
        timeout={200}
        unmountOnExit={true}
      >
        <div className='searchDetail'>
          <SearchTabs titles={titles} currentIndex={currentIndex} itemClick={(index) => itemclickHandler(index)}/>
          <div className='search-sections'>
            <SearchSections searchInfos={SearchTitles[currentIndex].searchInfos}/>
          </div>
        </div>
      </CSSTransition>


      {/* {!isShowCover ? 
      (<div className='search'>
        <div className='search-frame'>
          搜索房源和体验
        </div>
        <div className='search-icon'>
          <IconSearchBar/>
        </div>
      </div>) : (
      <div className='searchDetail'>
        <SearchTabs titles={titles} currentIndex={currentIndex} itemClick={(index) => itemclickHandler(index)}/>
        <div className='search-sections'>
          <SearchSections searchInfos={SearchTitles[currentIndex].searchInfos}/>
        </div>
        </div>
      )} */}
    </MiddleWrapper>
  )
})

export default Middle