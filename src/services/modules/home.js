import requestHttp from ".."

export const fetchGoodPriceData = () => {
  return requestHttp.get({url: '/home/goodprice'})
}

export const fetchHighScoreData = () => {
  return requestHttp.get({url: '/home/highscore'})
}

export const fetchHomeDiscount = () => {
  return requestHttp.get({url: '/home/discount'})
}

export const fetchHomeHotRecommendDest = () => {
  return requestHttp.get({url: '/home/hotRecommenddest'})
}

export const fetchLongForData = () => {
  return requestHttp.get({url: '/home/longfor'})
}

export const fetchHomePlusData = () => {
  return requestHttp.get({url: '/home/plus'})
}