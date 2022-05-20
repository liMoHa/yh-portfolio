import React, { useRef } from "react";
import styled from "styled-components";
import { activeMenu } from "../../utils/activeMenu";
import { scrollIntoView } from "../../utils/scrollIntoView";

const ToggleButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0.5em;
  right: 0.5em;
  font-size: 2em;
  display: none;
`;

const Container = styled.ul`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 12em;
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
  &:hover {
    color: ${({ theme }) => theme.colors.pinkBrown};
  }
`;

const MenuBar: React.FC = (): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClickMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    scrollIntoView(target);
    buttonRef.current?.classList.toggle("clicked");
    activeMenu(target.id);
  };

  const onClickButton = () => {
    buttonRef.current?.classList.toggle("clicked");
  };
  return (
    <>
      <ToggleButton ref={buttonRef} onClick={onClickButton}>
        <i className="fa-solid fa-bars" />
      </ToggleButton>
      <Container onClick={onClickMenu}>
        <Menu className="active" id="Home">
          {"<Home>"}
        </Menu>
        <Menu id="About">{"<About />"}</Menu>
        <Menu id="Skills">{"<Skills />"}</Menu>
        <Menu id="Project">{"<Project />"}</Menu>
        <Menu id="Contact">{"<Contact />"}</Menu>
      </Container>
    </>
  );
};

export default MenuBar;
