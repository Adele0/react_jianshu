import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
// 样式组件
import { HeaderWrapper, 
         Logo, 
         Nav, 
         NavItem, 
         SearchWrapper, 
         NavSearch, 
         Addition, 
         Button, 
         SearchKeywords,
         SearchKeywordsTitle,
         SearchKeywordsChange,
         KeywordsList,
         Keywords,
       } from './style';
import { actionCreators } from './store';

class Header extends Component {
 
  // 搜索关键字的显示/隐藏
  isKeywordsShow = () => {
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchKeywords className='clearfix'>
          <SearchKeywordsTitle>
            热门搜索
            <SearchKeywordsChange className='fr'>
            <i className='iconfont'>&#59473; </i>
              换一批
            </SearchKeywordsChange>
          </SearchKeywordsTitle>
          <KeywordsList>
            {
              list.map(item => {
                return <Keywords key={item}>{item}</Keywords>
              })
            }
          </KeywordsList>
        </SearchKeywords>
      )
    } else {
      return null
    }
  }

  render () {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper className='clearfix'>
        <Logo href='/' className='fl' />
        <Nav className='fl clearfix'>
          <NavItem className='fl active'>首页</NavItem>
          <NavItem className='fl'>下载app</NavItem>
          {/* 搜索动画 */}
          <SearchWrapper className='fl'>
            <CSSTransition
              in={focused}
              timeout={500}>
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont zoom focused' : 'iconfont zoom'}>&#58900;</i>
            {/* 关键字 调用方法需要使用插值表达式*/}
            {this.isKeywordsShow(focused)}
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
}

const mapStateToProps = (state) => {
  return {
    // 当state的使用immutable的fromJs后，不能直接使用对象调用，需使用immutable对象的get方法
    // focused : state.get('header').get('focused') 两种写法等价
    focused : state.getIn(['header','focused']),
    list : state.getIn(['header','list']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputBlur () {
      dispatch(actionCreators.setFocusTrue())
    },
    handleInputFocus () {
      dispatch(actionCreators.getInitList())
      dispatch(actionCreators.setFocusFalse())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);