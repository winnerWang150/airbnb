import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchGoodPriceAction, fetchHighScoreInfoAction, fetchHomeDiscountAction, fetchHomeHotRecommendDestAction, fetchHomeLongforAction, fetchHomePlusAction} from '@/store/home'

import HomeWrapper from './style'
import BannerWrapper from './c-cpns/home-banner'
// import RoomItem from '@/components/room-item'
import SectionHome from './c-cpns/section-home-v1'
import SectionHomeV2 from './c-cpns/section-home-v2'
import SectionLongfor from '@/views/home/c-cpns/section-longfor'


import { isEmptyObject } from '@/utils'
import SectionHomePlus from './c-cpns/section-home-plus'
import { changeHeaderAction } from '@/store/main'

// import SectionHeader from '@/components/section-header'
// import SectionRooms from '@/components/section-rooms'
// import SectionTabs from '@/components/section-tabs'

const Home = memo(() => {

  const {goodPriceInfo, highScoreInfo, discountInfo, hotRecommendDestInfo, longforInfo, homePlusInfo} = useSelector((state) => {
    console.log(state)
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendDestInfo: state.home.hotRecommendDestInfo,
      longforInfo: state.home.longforInfo,
      homePlusInfo: state.home.homePlusInfo
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHighScoreInfoAction())
    dispatch(fetchGoodPriceAction())
    dispatch(fetchHomeDiscountAction()) 
    dispatch(fetchHomeHotRecommendDestAction())
    dispatch(fetchHomeLongforAction())
    dispatch(fetchHomePlusAction())
    // home header is fixed
    dispatch(changeHeaderAction({
      isFixed: true,
      isAlpha: true
    }))


  }, [dispatch]) 

  // const tabNames = discountInfo.dest_address?.map(item => item.name)

  // // getAreaIndex
  // const [tabName, setTabName] = useState('佛山')
  // const getEmitIndexHandler = useCallback ((index, name) => {
  //   // console.log(index, name)
  //   setTabName(name)
  // }, [])

  return (
    <HomeWrapper>
      <BannerWrapper/>
      <div className='content'>

        {/* <div>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionTabs tabNames={tabNames} emitClickHandler={(index, name) => getEmitIndexHandler(index, name)}/>
          <SectionRooms roomList={discountInfo.dest_list?.[tabName]} itemWidth={'33.3%'}/>
        </div> */}

        {/* discount */}
        {isEmptyObject(discountInfo) && <SectionHomeV2 inforData={discountInfo} itemWidth='33.33%'/>}

        {/*hotRecommendDestInfo*/}
        {isEmptyObject(hotRecommendDestInfo) && <SectionHomeV2 inforData={hotRecommendDestInfo} itemWidth='33.33%'/>}

        {/* longforInfo */}
        {isEmptyObject(longforInfo) && <SectionLongfor inforData={longforInfo}/>}

        {/* goodPrice */}
        {isEmptyObject(goodPriceInfo) && <SectionHome inforData={goodPriceInfo}/>}
        
        {/* highScore */}
        {isEmptyObject(highScoreInfo) && <SectionHome inforData={highScoreInfo}/>}

        {/* homeplus */}
        {isEmptyObject(homePlusInfo) && <SectionHomePlus inforData={homePlusInfo} isWrap={false} itemWidth='20%'/>}
        
      </div>
    </HomeWrapper>
  )
})

export default Home