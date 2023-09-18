import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import classNames from 'classnames'

import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const {tabNames = [], emitClickHandler} = props
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemClickHandler = (index, name) => {
    setCurrentIndex(index, name)
    emitClickHandler(index, name)
  } 

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => <div key={item} className={classNames({'active': index === currentIndex})} onClick={() => itemClickHandler(index,item)}>{item}</div>)
        }
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs