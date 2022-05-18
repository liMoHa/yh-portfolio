import React from "react";
import styled from "styled-components";
import About from "./components/About/Index";
import Home from "./components/Home";
import MenuBar from "./components/MenuBar";
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
        </MainBox>
      </Container>
    </>
  );
};

export default App;
