import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle}from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const GrobalStyle = createGlobalStyle`
  html, body, #root {
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
  }
`;

ReactDOM.render(
    <>
        <BrowserRouter>
            <GrobalStyle/>
            <App />
        </BrowserRouter>
    </>
    , document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
