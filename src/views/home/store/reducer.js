import { fromJS } from 'immutable'
// import * as constants from './constants'


const initialState = fromJS({
  topicList: [
    {
      id: 1,
      url: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
      title: '社会道德',
    },
    {
      id: 2,
      url: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
      title: '管委会我',
    },
    {
      id: 3,
      url: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
      title: '规划师风v',
    },
    {
      id: 4,
      url: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
      title: '苍天问题',
    },
  ],
  articleList: [
    {
      id: 1,
      url: 'https://upload-images.jianshu.io/upload_images/13889945-a8bb3ae83954fbdf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      title: '社会道德',
      desc: '1、脸型    如果一段时间发现你的脸型慢慢变圆，耳垂慢慢增大增厚，而且有显出发福痕迹，这也是你转好运的征兆。 很多人都认为你越来越漂亮，越来越...'
    },
    {
      id: 2,
      url: 'https://upload-images.jianshu.io/upload_images/13889945-a8bb3ae83954fbdf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      title: '管委会我',
      desc: '1、脸型    如果一段时间发现你的脸型慢慢变圆，耳垂慢慢增大增厚，而且有显出发福痕迹，这也是你转好运的征兆。 很多人都认为你越来越漂亮，越来越...'
    },
    {
      id: 3,
      url: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
      title: '规划师风v',
      desc: '1、脸型    如果一段时间发现你的脸型慢慢变圆，耳垂慢慢增大增厚，而且有显出发福痕迹，这也是你转好运的征兆。 很多人都认为你越来越漂亮，越来越...'
    },
    {
      id: 4,
      url: 'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
      title: '苍天问题',
      desc: '1、脸型    如果一段时间发现你的脸型慢慢变圆，耳垂慢慢增大增厚，而且有显出发福痕迹，这也是你转好运的征兆。 很多人都认为你越来越漂亮，越来越...'
    },
  ],
  recommendList: [
    {
      id: 1,
      url: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
    },
    {
      id: 2,
      url: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
    },
    {
      id: 3,
      url: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
    },
    {
      id: 4,
      url: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    },
  ],
  writerList: [
    {
      id: 1,
      url: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
    },
    {
      id: 2,
      url: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
    },
    {
      id: 3,
      url: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
    },
    {
      id: 4,
      url: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    },
  ],
})

export default (state = initialState, { type, payload, pages }) => {
  switch (type) {
    // case constants.HOME_TOPIC_LIST:
    //   return state.topicList
  
    default:
      return state
    }
}