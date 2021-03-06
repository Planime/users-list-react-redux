import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from "./Components/Main/Main"

import {Provider} from 'react-redux';
import store from './redux/store'

ReactDOM.render(
        <Provider store={store}>
            <Main/>
        </Provider>,
    document.getElementById('root')
);

