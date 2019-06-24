import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <RecommendWrapper>
          {
            list.map((item) => {
              return <RecommendItem imgUrl={item.get('url')} key={item.get('id')}></RecommendItem>
            })
          }
        </RecommendWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapStateToProps, null)(Recommend)