import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle  } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: currentColor;
}
ul,
ol,
li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
  
}
html,
body {
  height: 100%;
  line-height: 1;
  font-family:'Raleway';
  font-size: 18px;
  font-weight: 500;
}
`

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <>
    <GlobalStyle/>
    <App />
  </>

);