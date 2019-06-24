import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem, } from '../style';

class Topic extends Component {
  render() {
    const { list } = this.props 
    return (
      <div>
        <TopicWrapper className='clearfix'>
          {
            // ()直接写，{}需要return
            list.map((item) => (
              <TopicItem className='fl' key={item.get('id')}>
                <img
                  alt=''
                  src={item.get('url')}
                  className='topic-pic'
                />
                {item.get('title')}
              </TopicItem>
            ))
          }
        </TopicWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'topicList'])
  // list: state.get('home').get('topicList') 
})

export default connect(mapStateToProps, null)(Topic)