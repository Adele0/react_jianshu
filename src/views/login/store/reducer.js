import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  isLogin: false
})

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case constants.LOGIN_IS_LOGIN:
    return state.set('isLogin', payload)

  default:
    return state
  }
}
