import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterList } from '../style';

class Writer extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <WriterWrapper>
          <div className='download clearfix'>
            <p className='fl'>
              <img alt='' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' />
            </p>
            <div className='fl'>
              <p className='app'>下载简书手机App ></p>
              <p>随时随地发现和创作内容</p>
            </div>
          </div>
          <div className='ads'></div>
          <p className='clearfix'>
            <span className='fl'>推荐作者</span>
            <span className='fr'>
              <i className='iconfont'>&#59473; </i>
              换一批
            </span>
          </p>
          {
            list.map((item) => {
              return (
                <WriterList key={item.get('id')}>
                  <div className='clearfix'>
                    <p className='fl'>
                      <img className='avatar' alt='' src={item.get('url')} />
                    </p>
                    <div className='fl left'>
                      <p className='clearfix info'>
                        <span>{item.get('name')}</span>
                        <span className='fr'>+关注</span>
                      </p>
                      <p className='follower'>写了{item.get('words')}k字 · {item.get('followers')}k喜欢</p>
                    </div>
                  </div>
                </WriterList>
              )
            })
          }
          <div className='ads'></div>
        </WriterWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapStateToProps, null)(Writer) 