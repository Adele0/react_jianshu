// 将所有需要派发的action都统一进行管理
import { fromJS } from 'immutable'
import axios from 'axios'
import * as constants from './constants'

/* 不需要导出的放置一起 */
// state的数据是immutable对象，获得的数据也应该转为immutable对象
const initList = (data) => ({
  type: constants.HEADER_INIT_LIST,
  payload: fromJS(data)
})

// 暴露的都是方法
export const setFocusTrue = () => ({
  type: constants.HEADER_FOCUS_TRUE
})

export const setFocusFalse = () => ({
  type: constants.HEADER_FOCUS_FALSE
})

// 使用thunk可以使actionCreator返回函数
export const getInitList = () => {
  // thunk本身自带参数dispatch
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5d004ef495de7c77f8700638/video/mock').then(res => {
      dispatch(initList(res.data.array))
    }).catch(() => {
      alert('error')
    })
  }
}
