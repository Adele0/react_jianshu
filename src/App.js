import React, { Component }  from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './views/home';
// 使用react-loadable让details变成异步加载组件
// import Details from './views/details';
import Details from './views/details/loadable';
import Login from './views/login';
import Articles from './views/articles';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/articles' exact component={Articles}></Route>
          <Route path='/details/:id' exact component={Details}></Route>
        </BrowserRouter>
      </Provider>
    )   
  }
}

export default App;
