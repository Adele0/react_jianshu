import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// home组件并没有被BrowserRouter包住、导致用a标签跳转article，相当于切换了路由，跳回来页面刷新，store被重置
class Write extends PureComponent {
	render() {
		const { isLogin } = this.props;
		if (isLogin) {
			return (
				<div>写文章页面</div>
			)
		} else {
			return <Redirect to='/login'/>
		}
	}
}

const mapState = (state) => ({
	isLogin: state.getIn(['login', 'isLogin'])
})

export default connect(mapState, null)(Write);