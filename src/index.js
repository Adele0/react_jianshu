import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  { Globalstyle } from './style.js';
import  { GlobalIcon } from './statics/iconfont/iconfont';

ReactDOM.render(
  <div>
    <Globalstyle />
    <GlobalIcon />
    <App />
  </div>
  , document.getElementById('root'));
