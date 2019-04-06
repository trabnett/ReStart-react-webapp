import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import actions from "./redux/actions";
import store from "./redux/store";
import { login } from "./redux/actions";
window.store = store;
window.addArticle = login;



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
