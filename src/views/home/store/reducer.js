import { fromJS } from 'immutable'
// import * as constants from './constants'


const initialState = fromJS({
  topicList: [
    {
      id: 1,
      url: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180',
      title: '社会道德',
    },
    {
      id: 2,
      url: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180',
      title: '管委会我',
    },
    {
      id: 3,
      url: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180',
      title: '规划师风v',
    },
    {
      id: 4,
      url: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180',
      title: '苍天问题',
    },
  ],
  articleList: [
    {
      id: 1,
      url: 'https://upload-images.jianshu.io/upload_images/5815298-ed34f8414bd3fdb5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: '社会道德',
      desc: '1、脸型    如果一段时间发现你的脸型慢慢变圆，耳垂慢慢增大增厚，而且有显出发福痕迹，这也是你转好运的征兆。 很多人都认为你越来越漂亮，越来越...'
    },
    {
      id: 2,
      url: 'https://upload-images.jianshu.io/upload_images/5815298-ed34f8414bd3fdb5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: '管委会我',
      desc: '1、脸型    如果一段时间发现你的脸型慢慢变圆，耳垂慢慢增大增厚，而且有显出发福痕迹，这也是你转好运的征兆。 很多人都认为你越来越漂亮，越来越...'
    },
    {
      id: 3,
      url: 'https://upload-images.jianshu.io/upload_images/5815298-ed34f8414bd3fdb5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: '规划师风v',
      desc: '1、脸型    如果一段时间发现你的脸型慢慢变圆，耳垂慢慢增大增厚，而且有显出发福痕迹，这也是你转好运的征兆。 很多人都认为你越来越漂亮，越来越...'
    },
    {
      id: 4,
      url: 'https://upload-images.jianshu.io/upload_images/5815298-ed34f8414bd3fdb5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
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
      url: 'https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '的大V额',
      words: '22.6k',
      followers: '15k',
    },
    {
      id: 2,
      url: 'https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '好欧冠',
      words: '9692',
      followers: '16987',
    },
    {
      id: 3,
      url: 'https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '的简欧',
      words: '1.6w',
      followers: '1657',
    },
    {
      id: 4,
      url: 'https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '了皮与阿尔',
      words: '1586K',
      followers: '16.57k',
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