import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';


class Details extends Component {
  render() {
    return (
      <DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content 
					dangerouslySetInnerHTML={{__html: this.props.content}}
				/>
			</DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.initData(this.props.match.params.id)
  }
  
}

const mapState = (state) => ({
  title: state.getIn(['details', 'title']),
  content: state.getIn(['details', 'content']),
})

const mapDispatch = (dispatch) => ({
  initData(id) {
    dispatch(actionCreators.getDetailsList(id));
  }
})

export default connect(mapState, mapDispatch)(Details)