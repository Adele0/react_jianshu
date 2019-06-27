import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './views/home';
import Details from './views/details';
import Login from './views/login';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/details/:id' exact component={Details}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
