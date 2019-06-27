// 为方便管理状态，combineReducers从redux-immutable来
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../views/home/store'
import { reducer as detailsReducer } from '../views/details/store'
import { reducer as loginReducer } from '../views/login/store'

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  details: detailsReducer,
  login: loginReducer,
})
