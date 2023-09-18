import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { EntireFilterWrapper } from './style'
import { useSelector } from 'react-redux'

const EntireFilter = memo((props) => {
  const {filterData} = props
  const [selectedArr, setSelectedArr] = useState([])

  const {headerConfig} = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }))

  const {isFixed} = headerConfig

  // click item event
  const clickItemHandler = (item) => {
    let newArr = [...selectedArr]
    if (selectedArr.includes(item)) {
      const index = selectedArr.findIndex(name => name === item)
      newArr.splice(index, 1)
    } else {
      newArr.push(item)
    }
    setSelectedArr(newArr)
  }

  return (
    <EntireFilterWrapper className={classNames({fixed: isFixed})}>
      <div className='fitler-container'>
        {
          filterData.map((item, index) => <div className={classNames('filter-item', {active: selectedArr.includes(item)})} onClick={() => clickItemHandler(item)} key={index}>{item}</div>)
        }
      </div>
    </EntireFilterWrapper>
  )
})

EntireFilter.propTypes = {
  filterData: PropTypes.array
}

export default EntireFilter