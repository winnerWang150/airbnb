import * as actionTypes from './constance'
const initalState = {
  name: 'wxl',
  currentPage: 1,
  totalCount: 300,
  list: [],
  isLoading: false
}

function reducer (state = initalState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case actionTypes.CHANGE_TOTAL_COUNT:
      return {...state, totalCount: action.totalCount}
    case actionTypes.CHANGE_ROOM_LIST:
      return {...state, list: action.list}
    case actionTypes.CHANGE_IS_LOADING:
      return {...state, isLoading: action.isLoading}
    default:
      return state
  }
}

export default reducer