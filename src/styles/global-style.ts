import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after{
      box-sizing: border-box;
  }

  li{
    list-style: none;
  }

  body{
    font-family: "Noto Sans KR", sans-serif;
  }

  h1, h2{
    color: #393332; 
  }

  h1{
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 3.2em;
    margin: 0.2em;
    
  }

  h2{
    font-weight: 900;
    font-size: 2.5em;
    margin-top: 1em;
    margin-bottom: 0.2em
  }

  h3{
    font-weight: 200;
    font-size: 1.2em;
    margin: 0.3em;
  }

  h4{
    font-weight: 700;
    font-size: 1em;
  };

  p{
    padding: 1em;
    font-weight: 400;
    font-size: 1.2em;
  }

  button{
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;
