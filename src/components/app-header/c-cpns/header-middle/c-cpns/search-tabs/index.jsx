import React, { memo } from 'react'
import { SearchTabsWrapper } from './style'
import classNames from 'classnames'

const SearchTabs = memo((props) => {

  const {titles, currentIndex=0, itemClick} = props


  // search-tabs tab click'index
  const itemclickHandler = (index) => {
    console.log('indexindex', index)
    itemClick && itemClick(index)
  }

  return (
    <SearchTabsWrapper>
      <div className='titles'>
        {titles.map((item, index) => <div onClick={() => itemclickHandler(index)} className={classNames('item', {active: currentIndex === index})} key={index}>{item}</div>)}
      </div>
    </SearchTabsWrapper>
  )
})

export default SearchTabs