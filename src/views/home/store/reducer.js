import { fromJS } from 'immutable';
import * as constants from './constants';


const initialState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.HOME_DATA_LIST:
      return state.merge({
        'topicList': fromJS(payload.topicList),
        'articleList': fromJS(payload.articleList),
        'recommendList': fromJS(payload.recommendList),
        'writerList': fromJS(payload.writerList),
      })
  
    default:
      return state
    }
}