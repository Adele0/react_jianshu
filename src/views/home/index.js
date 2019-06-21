import React, { Component } from 'react'
import { 
         HomeWrapper,
         HomeLeft,
         HomeRight,
       } from './style';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper className='clearfix'>
          <HomeLeft className='fl'>
            <img className='banner' src='https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight className='fr'>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
        </HomeWrapper>
      </div>
    )
  }
}