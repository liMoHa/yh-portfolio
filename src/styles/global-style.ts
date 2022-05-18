import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after{
      box-sizing: border-box;
  }

  h1{
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 3.2em;
    margin: 0.2em;
    color: #393332; 
  }

  h3{
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 200;
    font-size: 1.2em;
    margin: 0.3em;
  }

  button{
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;
