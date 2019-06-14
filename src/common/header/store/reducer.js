import * as constants from './constants'
import { fromJS } from 'immutable'

// state是绝对不能被改变的---借助immutable.js

const initialState = fromJS({
  focused: false, 
  list: []
})

export default (state = initialState, { type, payload }) => {
  switch (type) {

  // 改变state数据时，需要使用immutable对象的set方法,配合get方法
  // immutable对象的set没有直接改变state而是返回新的对象
  case constants.HEADER_FOCUS_FALSE:
    return state.set('focused', true)

  case constants.HEADER_FOCUS_TRUE:
    return state.set('focused', false)

  case constants.HEADER_INIT_LIST:
    return state.set('list', payload)

  default:
    return state
  }
}
