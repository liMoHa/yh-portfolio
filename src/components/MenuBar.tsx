import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  position: sticky;
  top:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 1.5em;
  background-color: ${({ theme }) => theme.colors.darkBrown};
  color: ${({ theme }) => theme.colors.white};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
`;

const Menu = styled.li`
  margin: 1.2em;
  cursor: pointer;
  transition: color 0.15s ease-out;
  &.active {
    color: ${({ theme }) => theme.colors.pinkBrown};
  }
  &:hover{
    
    color: ${({ theme }) => theme.colors.pinkBrown};
  }
`;

const MenuBar: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Menu className="active" id="home">
        {"<Home />"}
      </Menu>
      <Menu id="about">{"<About />"}</Menu>
      <Menu id="skills">{"<Skills />"}</Menu>
      <Menu id="project">{"<Project />"}</Menu>
      <Menu id="contact">{"<Contact />"}</Menu>
    </Container>
  );
};
export default MenuBar;
