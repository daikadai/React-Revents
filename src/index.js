import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  , rootEl)
}

if(module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render)
  })
}

render();
serviceWorker.unregister();
