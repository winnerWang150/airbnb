import React, { memo } from 'react'
import { SearchSectionsWrapper } from './style'

const SearchSections = memo((props) => {
  console.log(props)
  const {searchInfos} = props
  return (
    <SearchSectionsWrapper>
      <div className='search-section-container'>
        {searchInfos.map((item, index) => {
          return (
            <div className='item'>
              <div className='info'>
                <div className='title'>{item.title}</div>
                <div className='desc'>{item.desc}</div>
              </div>
              {index !== searchInfos.length-1 && <div className='divide'>
              </div>}
            </div>
          )
        })}
      </div>
    </SearchSectionsWrapper>
  )
})

export default SearchSections