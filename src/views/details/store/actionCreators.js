import axios from 'axios'
import * as constants from './constants';

const detailsList = (data) => ({
  type: constants.DETAILS_DATA_LIST,
  payload: data
})

export const getDetailsList = (id) => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5d004ef495de7c77f8700638/video/details/:id'+id).then((res) => {
      dispatch(detailsList(res.data.data[0]))
    })
  }
}