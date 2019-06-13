import React from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style';
import { FOCUS_FALSE, FOCUS_TRUE } from './store/actionTypes';

// 无状态组件
const Header = (props) => {
  const { focused } = props
  return ( 
    <HeaderWrapper className='clearfix'>
      <Logo href='/' className='fl' />
      <Nav className='fl clearfix'>
        <NavItem className='fl active'>首页</NavItem>
        <NavItem className='fl'>下载app</NavItem>
        <SearchWrapper className='fl'>
          <CSSTransition
            in={focused}
            timeout={500}>
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'iconfont zoom focused' : 'iconfont zoom'}>&#58900;</i>
        </SearchWrapper>
        <NavItem className='fr'>登录</NavItem>
        <NavItem className='fr'>
          <i className='iconfont'>&#58934;</i>
        </NavItem>
      </Nav>
      <Addition className='clearfix'>
        <Button className='fr writting'>
          <i className='iconfont'>&#58901;</i>
          <span> 写文章</span>
        </Button>
        <Button className='fr reg'>注册</Button>
      </Addition>
    </HeaderWrapper> 
  )
}

const mapStateToProps = (state) => {
  return {
    focused : state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputBlur () {
      const action = {
        type: FOCUS_TRUE
      }
      dispatch(action)
    },
    handleInputFocus () {
      const action = {
        type: FOCUS_FALSE
      }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);