import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ListItem, ListInfo } from '../style';

class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'/details/' + item.get('id')}>
                <ListItem className='clearfix' key={item.get('id')}>
                  <img className='pic fr' src={item.get('url')} alt='' />
                  <ListInfo className='fl'>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list : state.getIn(['home', 'articleList'])
})

export default connect(mapStateToProps, null)(List)