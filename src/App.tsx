import React, { useEffect } from "react";
import styled from "styled-components";
import MenuBar from "./components/MenuBar/Index";
import Home from "./components/Home/Index";
import About from "./components/About/Index";
import Skills from "./components/Skills/Index";
import Project from "./components/Project/Index";
import Contact from "./components/Contact/Index";
import { GlobalStyle } from "./styles/global-style";
import { activeMenu } from "./utils/activeMenu";

const Container = styled.div`
  display: flex;
`;

const MainBox = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const idArr = ["Home", "About", "Skills", "Project", "Contact"];

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const App: React.FC = (): JSX.Element => {
  useEffect(() => {
    // component다 만들어진 후 마지막에 실행
    return () => {
      const boxes = document.querySelectorAll("section");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.intersectionRatio > 0) {
            let id = (entry.target as HTMLElement).dataset.id;
            let idx = id && idArr.indexOf(id);
            if (entry.boundingClientRect.y < 0) {
              if (idx === 0 || idx) activeMenu(idArr[idx + 1]);
            } else {
              if (idx === 0 || idx) activeMenu(idArr[idx - 1]);
            }
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
