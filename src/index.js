import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Components/Header/Header"


ReactDOM.render(
    <React.StrictMode>
        <>
            <Header/>
            <div>Hello</div>
        </>
    </React.StrictMode>,
    document.getElementById('root')
);

