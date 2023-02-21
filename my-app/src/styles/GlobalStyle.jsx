import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';
import './global.css';

const GlobalStyle = createGlobalStyle`

  /* 리셋 css */
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, 
  body {
    font-family:'SANGJUDajungdagam', sans-serif;
    text-align: center;
    max-width: 390px;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    /* overflow-x: hidden; */
    /* overflow-y: auto;  */

  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button, input, textarea {
    font-family: 'SANGJUDajungdagam', sans-serif;
    padding: 0;
    border: none;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    background-color: inherit;
  }

  button {
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
