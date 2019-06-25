import axios from 'axios'
// import { fromJS } from 'immutable';
import * as constants from './constants';

export const initiList = (data) =>({
  type: constants.HOME_DATA_LIST,
  // 传值的时候不用fromJS, 在reducer中赋值时再用fromJS
  payload: data
})

export const getHomeData = () => {
  // thunk本身自带参数dispatch
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5d004ef495de7c77f8700638/video/homeData').then(res => {
      // console.log('res.data', res.data.data)
      dispatch(initiList(res.data.data));
    })
  }
}