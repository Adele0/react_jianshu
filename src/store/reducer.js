// 为方便管理状态，combineReducers从redux-immutable来
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'

export default combineReducers({
  header: headerReducer
})
