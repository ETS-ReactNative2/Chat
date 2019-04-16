import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';
import './style/style.css';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";




    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
    registerServiceWorker();


