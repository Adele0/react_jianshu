import { connect } from 'react-redux';
import React, { Component } from 'react';
import { actionCreators } from './store';

import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from './style';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';

class Home extends Component {
  render() {
    const { showBackIcon } = this.props;
    return (
      <div>
        <HomeWrapper className='clearfix'>
          <HomeLeft className='fl'>
            <img className='banner' alt='' src='https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight className='fr'>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
          {
            showBackIcon ? <BackToTop>^</BackToTop> : null
          } 
        </HomeWrapper>
      </div>
    )
  }

  componentDidMount() {
    this.props.getHomeData();
    this.bindScrollEvent();
  }

  componentWillUnmount() { 
    window.removeEventListener('scroll', this.props.isShowBackIcon)
  }
  
  handleBackToTop() {
    window.scrollTo(0,0)
  }

  bindScrollEvent() {
    window.addEventListener('scroll', this.props.isShowBackIcon)
  }
}

const mapStateToProps = (state) => ({
  showBackIcon: state.getIn(['home','showBackIcon'])
})

const mapDispatchToProps = (dispatch) => ({
  getHomeData() {
    dispatch(actionCreators.getHomeData());
  },

  isShowBackIcon() {
    if ( document.documentElement.scrollTop > 100 ) {
      dispatch(actionCreators.setBackShow(true))
    } else {
      dispatch(actionCreators.setBackShow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)