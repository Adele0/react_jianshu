import React, { Component } from 'react';
// import { Link } from 'react-router-dom';   会报错
import { connect } from 'react-redux';
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
import { actionCreators as LoginActionCreators } from '../../views/login/store';

class Header extends Component {
 
  // 搜索关键字的显示/隐藏
  isKeywordsShow = () => {
    const { focused, list, currentPage, pages, mouseIn, handleMouseEnter, handleMouseLeave, handlePageChange } = this.props;
    // list现在是immutable对象，要取list中的每一项，需要把list转为普通的js对象
    const jsList = list.toJS();
    const pageList = []

    // 将本来在KeywordsList中循环的keywords提取到外部
    // 组件加载就会执行，JSList此时为空却先要执行10遍，所以加上条件
    if (jsList.length>0) {
      for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++) {
        // 最后一页不为10整数不在加入数组
        if (jsList[i]) {
          pageList.push(
            <Keywords key={jsList[i]}>{jsList[i]}</Keywords>
          )
        }
      }
    }

    // focused和mouse情景下都需要显示
    if (focused || mouseIn) {
      return (
        <SearchKeywords
          className='clearfix' 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchKeywordsTitle>
            热门搜索
            <SearchKeywordsChange className='fr' onClick={() => handlePageChange(currentPage, pages, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#59473; </i>
              换一批
            </SearchKeywordsChange>
          </SearchKeywordsTitle>
          <KeywordsList>
            {/* 循环的keywords被添加到pageList中，此处引用就行 */}
            {pageList}
          </KeywordsList>
        </SearchKeywords>
      )
    } else {
      return null
    }
  }

  render () {
    const { focused, list, handleInputFocus, handleInputBlur, isLogin, logout } = this.props;
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
                onFocus={() => {handleInputFocus(list)}}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont zoom focused' : 'iconfont zoom'}>&#58900;</i>
            {/* 关键字 调用方法需要使用插值表达式*/}
            {this.isKeywordsShow(focused)}
          </SearchWrapper>
          {
            isLogin ? 
                      <NavItem className='fr' onClick={logout}>退出</NavItem>
                    : 
                      // 报错 
                      // <Link to='/login'>
                      <a style={{'display': 'block'}} href='/login'>
                        <NavItem className='fr'>登录</NavItem>
                      </a>
                      // </Link>
          }
          <NavItem className='fr'>
            <i className='iconfont'>&#58934;</i>
          </NavItem>
        </Nav>
        <Addition className='clearfix'>
          <Button className='fr writting'>
            <i className='iconfont'>&#58901;</i>
            <a href='/articles'> 写文章</a>
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
    mouseIn : state.getIn(['header','mouseIn']),
    list : state.getIn(['header','list']),
    pages : state.getIn(['header','pages']),
    currentPage : state.getIn(['header','currentPage']),
    isLogin : state.getIn(['login','isLogin']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputBlur () {
      dispatch(actionCreators.setFocusTrue())
    },
    handleInputFocus (list) {
      list.size === 0 && dispatch(actionCreators.getInitList())
      dispatch(actionCreators.setFocusFalse())
    },
    handleMouseEnter () {
      dispatch(actionCreators.setMouseTrue())
    },
    handleMouseLeave () {
      dispatch(actionCreators.setMouseFalse())
    },
    handlePageChange (currentPage, pages, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      originAngle ? originAngle = parseInt(originAngle) : originAngle = 0;
      spin.style.transform = 'rotate('+ (originAngle + 360) + 'deg)';
      (currentPage < pages) ? dispatch(actionCreators.changePage(currentPage+1))
                            : dispatch(actionCreators.changePage(1));
    },
    logout() {
      dispatch(LoginActionCreators.changeLogout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);