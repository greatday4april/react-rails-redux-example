import App from '../components/app'
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import React from 'react'
import ReactDOM from 'react-dom'
import {store} from '../store'

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root store={store}/>,
    document.body.appendChild(document.createElement("div"))
  );
})
