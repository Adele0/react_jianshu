import { FOCUS_FALSE, FOCUS_TRUE } from './actionTypes'

const initialState = {
  focused: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FOCUS_FALSE:
    return { focused : true }

  case FOCUS_TRUE:
    return { focused : false }

  default:
    return state
  }
}
