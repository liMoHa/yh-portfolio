import React, { useEffect } from "react";
import styled from "styled-components";
import MenuBar from "./components/MenuBar/Index";
import Home from "./components/Home/Index";
import About from "./components/About/Index";
import Skills from "./components/Skills/Index";
import Project from "./components/Project/Index";
import Contact from "./components/Contact/Index";
import { GlobalStyle } from "./styles/global-style";
import { getActiveElement } from "@testing-library/user-event/dist/utils";

const Container = styled.div`
  display: flex;
`;

const MainBox = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = (): JSX.Element => {
  useEffect(() => {
    // component다 만들어진 후 마지막에 실행
    return () => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };
      const boxes = document.querySelectorAll("section");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting){
            // 활성상태 메뉴 비활성화시키기
            const activedElement= document.querySelector('li.active');
            activedElement?.classList.remove("active");
            activedElement!.textContent = `<${activedElement?.id} />`;
            // 현재 위치 메뉴 활성화시키기
            const id = (entry.target as HTMLElement).dataset.id;
            const target = document.querySelector(`#${id}`);
            target?.classList.add("active");
            target!.textContent = `<${target?.id}>`;
          }
        });
      }, options);
      boxes.forEach((box) => observer.observe(box));
    };

  }, []);
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
