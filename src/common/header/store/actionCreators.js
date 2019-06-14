// 将所有需要派发的action都统一进行管理
import { HEADER_FOCUS_FALSE, HEADER_FOCUS_TRUE } from './constants';

// 暴露的都是方法
export const setFocusTrue = () => ({
  type: HEADER_FOCUS_TRUE
})

export const setFocusFalse = () => ({
  type: HEADER_FOCUS_FALSE
})