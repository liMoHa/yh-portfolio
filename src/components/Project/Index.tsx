import React from "react";
import styled from "styled-components";

const ProjectBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  padding-bottom: 4em;
  & > h2 {
    color: ${({ theme }) => theme.colors.lightBeige};
    padding-bottom: 0.4em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightBeige};
  }
`;

const ProjectBoard = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.lightBeige};
  border-radius: 1.2em;
  box-shadow: 2px 2px 2px gray;
  width: 95%;
  margin-top: 2em;
  padding-bottom: 2em;
  & h2 {
    color: ${({ theme }) => theme.colors.black};
  }
  & h5 {
    color: gray;
    margin-bottom: 2em;
  }
  & img {
    width: 90%;
    margin-bottom: 1em;
  }
`;

const Description = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > h3:first-child {
    text-align: center;
    margin-bottom: 1em;
  }
  & > h3 {
    text-align: start;
    & em {
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`;

const DetailInfo = styled.div`
  padding: 1em 0.5em;
  margin: 0 auto;
  margin-top: 1.5em;
  border-top: 1px solid lightgray;
  width: 90%;
`;

const Box = styled.div`
  display: flex;
  & em {
    font-weight: bold;
  }
`;

const Project: React.FC = (): JSX.Element => (
  <ProjectBox>
    <h2>Project</h2>
    <ProjectBoard>
      <h2>STREACT</h2>
      <h5>2022.03 ~ 현재 (5人 팀 프로젝트)</h5>
      <Description>
        <h3>
          <em>드래그 앤 드랍</em>으로 레이아웃 및 컴포넌트를 배치하여 간편하게
          웹 사이트를 제작할 수 있으며 최종 결과는 <em>React 소스</em>로 다운
          받을 수 있는 <em>노코드 서비스</em>를 개발하고 있습니다.
        </h3>
        <h3>
          ✔️ react-dnd, Zustand와 같은 생소한 리액트 라이브러리를 사용하기 위해
          구글링을 하며 빠르게 습득 및 적용하는 법을 배웠습니다.
        </h3>
        <h3>
          ✔️ Jira를 통해 이슈를 발급 받고 의미있는 브랜치를 생성하여 작업합니다.
        </h3>
        <h3>
          ✔️ confluence에는 wiki를 만들어 프로젝트 생성하는 방법, 코딩 및 커밋
          컨벤션 등을 지정하여 이를 지켜가며 협업을 하고 있습니다.
        </h3>
      </Description>
      <img src="images/streactImg.png" alt="streact main img" />
      <DetailInfo>
        <Box>
          <h3>
            <em>사용 기술 스택</em>
          </h3>
          <h3>React, react-dnd, Zustand, TypeScript, Emotion, Vite</h3>
        </Box>
        <Box>
          <h3>
            <em>구현한 기능</em>
          </h3>
          <h3>
            header UI, 데스크탑/모바일 크기 변경, 메인 영역, 초기 drag and drop 구조,
            미리보기, 저장하기
          </h3>
        </Box>
        <Box>
          <h3>
            <em>GitHub</em>
          </h3>
          <h3>
            <a href="https://github.com/STREACT">https://github.com/STREACT</a>
          </h3>
        </Box>
      </DetailInfo>
    </ProjectBoard>
  </ProjectBox>
);

export default Project;
