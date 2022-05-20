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
