import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  title: '',
  content: ''
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.DETAILS_DATA_LIST:
      return state.merge({
        title: fromJS(payload.title),
        content: fromJS(payload.content),
      })

    default:
      return state
  }
}
