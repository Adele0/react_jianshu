import axios from 'axios'
import * as constants from './constants'

const isLogin = () => ({
  type: constants.LOGIN_IS_LOGIN,
  payload: true
})

export const changeLogout = () => ({
  type: constants.LOGIN_IS_LOGIN,
  payload: false
})

export const changeLogin = (ac, pwd) => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5d004ef495de7c77f8700638/video/login?ac='+ac+'&pwd='+pwd).then(res => {
      if (res.data.success) {
        dispatch(isLogin())
      } else {
        alert('登录失败')
      }
    })
  }
}