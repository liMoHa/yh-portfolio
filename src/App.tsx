import React from "react";
import styled from "styled-components";
import MenuBar from "./components/MenuBar/Index";
import Home from "./components/Home/Index";
import About from "./components/About/Index";
import Skills from "./components/Skills/Index";
import Project from "./components/Project/Index";
import Contact from "./components/Contact/Index";
import { GlobalStyle } from "./styles/global-style";

const Container = styled.div`
  display: flex;

  /* 테블릿 */
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    /* MenuBar  */
    & ul {
      padding: 0;
      top: 0;
      width: 100%;
      height: auto;
      flex-direction: row;
      z-index: 1;
      font-size: 1em;
    }
    /* Skills */
    & section[data-id="Skills"] .stackInfoBox {
      max-width: 40em;
    }
  }

  /* 모바일 */
  @media screen and (max-width: 768px) {
    /* MenuBar */
    & > button {
      display: block;
      z-index: 2;
      font-size: 1.5em;
    }

    & > button.clicked {
      color: ${({ theme }) => theme.colors.white};
    }

    & > button.clicked ~ ul {
      flex-direction: column;
      padding: 3.5em 0 2em 0;
      & li {
        display: block;
      }
    }
    & ul {
      position: fixed;
      padding: 1.5em;
      & li {
        display: none;
      }
    }
    /* About */
    & section[data-id="About"] .info-box-container {
      max-width: 20em;
      margin-top: 1em;
    }
    /* Contact */
    & section[data-id="Contact"] .info-box {
      align-items: center;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 380px) {
    font-size: 0.8em;
  }
`;

const MainBox = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MenuBar />
        <MainBox>
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
        </MainBox>
      </Container>
    </>
  );
};

export default App;
