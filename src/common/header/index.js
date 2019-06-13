import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style';

class Header extends Component {
  
  constructor (props) {
    super(props)
    this.state = { 
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  render() { 
    return ( 
      <HeaderWrapper className='clearfix'>
        <Logo href='/' className='fl' />
        <Nav className='fl clearfix'>
          <NavItem className='fl active'>首页</NavItem>
          <NavItem className='fl'>下载app</NavItem>
          <SearchWrapper className='fl'>
            <CSSTransition
              in={this.state.focused}
              timeout={500}>
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.state.focused ? 'iconfont zoom focused' : 'iconfont zoom'}>&#58900;</i>
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
    );
  }

  handleInputFocus () {
    this.setState({focused : true})
  }

  handleInputBlur () {
    this.setState({focused : false})
  }
}
 
export default Header;