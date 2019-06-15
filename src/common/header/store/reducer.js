import * as constants from './constants'
import { fromJS } from 'immutable'

// state是绝对不能被改变的---借助immutable.js

const initialState = fromJS({
  focused: false, 
  mouseIn: false, 
  list: [],
  pages: 1,
  currentPage: 1
})

export default (state = initialState, { type, payload, pages }) => {
  switch (type) {

  // 改变state数据时，需要使用immutable对象的set方法,配合get方法
  // immutable对象的set没有直接改变state而是返回新的对象
  case constants.HEADER_FOCUS_FALSE:
    return state.set('focused', true)

  case constants.HEADER_FOCUS_TRUE:
    return state.set('focused', false)

  case constants.HEADER_INIT_LIST:
    // 需要修改的值多的时候可以使用merge方法
    // return state.set('list', payload).set('pages', pages)
    return state.merge({
      'list': payload,
      'pages': pages,
    })
 
  case constants.HEADER_CHANGE_PAGE:
    return state.set('currentPage', payload)

  case constants.HEADER_MOUSE_TRUE:
    return state.set('mouseIn', true)
  
  case constants.HEADER_MOUSE_FALSE:
    return state.set('mouseIn', false)

  default:
    return state
  }
}
