import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper } from '../style';

class Writer extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <WriterWrapper>
          {
            list.map((item) => {
              return item.get('id')
            })
          }
        </WriterWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapStateToProps, null)(Writer) 