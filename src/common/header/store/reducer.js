import { HEADER_FOCUS_FALSE, HEADER_FOCUS_TRUE } from './constants'

const initialState = {
  focused: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HEADER_FOCUS_FALSE:
    return { focused : true }

  case HEADER_FOCUS_TRUE:
    return { focused : false }

  default:
    return state
  }
}
