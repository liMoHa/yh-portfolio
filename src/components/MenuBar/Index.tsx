import React from "react";
import styled from "styled-components";

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
  const onClickMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.nodeName !== "LI") return;
    // 활성화되어있는 요소 가져와서 비활성화시키기
    const activedElment = document.querySelector("li.active");
    activedElment?.classList.remove("active");
    activedElment!.textContent = `<${activedElment?.id} />`;
    // 클릭된 요소 활성화시키기
    target.classList.add("active");
    target.textContent = `<${target.id}>`;
    // 해당 위치로 이동
    const curPosition = document.querySelector(`section[data-id=${target.id}]`);
    curPosition?.scrollIntoView({behavior:'smooth'});
  };
  return (
    <Container onClick={onClickMenu}>
      <Menu className="active" id="Home">
        {"<Home>"}
      </Menu>
      <Menu id="About">{"<About />"}</Menu>
      <Menu id="Skills">{"<Skills />"}</Menu>
      <Menu id="Project">{"<Project />"}</Menu>
      <Menu id="Contact">{"<Contact />"}</Menu>
    </Container>
  );
};
export default MenuBar;
