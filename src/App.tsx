import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global-style";

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.lightGreen};
`;

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Heading>Hi</Heading>
    </>
  );
};

export default App;
