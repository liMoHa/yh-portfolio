import React from "react";
import styled from "styled-components";
import Info from "./Info";

const AboutBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 1.2em;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Intro = styled.h3`
  width: 80%;
`;

const InfoBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const info = [
  {
    iconName: "fa-solid fa-user",
    category: "이름",
    content: "임영하",
  },
  {
    iconName: "fa-solid fa-graduation-cap",
    category: "학력",
    content: "한림대학교\n(빅데이터학과)",
  },

  {
    iconName: "fa-solid fa-cake-candles",
    category: "생년월일",
    content: "2000.10.05",
  },
  {
    iconName: "fa-solid fa-pencil",
    category: "공부중",
    content: "Node.js, express",
  },
];

const About: React.FC = (): JSX.Element => {
  return (
    <AboutBox>
      <h2>About me</h2>
      <Intro>
        안녕하세요. 자기개발에 진심인 프론트엔드 개발자입니다. 새로운 기술을
        익히고 소스를 작성해보며 점차 익숙해지는 과정을 즐기며, 책임감 있는
        성격과 마음 먹은 것은 반드시 해내는 것이 저의 장점입니다. 현재는 단순히
        기능 구현하는 것에 만족하지 않고 좋은 소스를 작성하는 방법과 올바른 협업
        방식 및 의사소통 방법에 관심을 가지고 공부하고 있습니다.
      </Intro>
      <InfoBoxContainer>
        {info.map((info) => (
          <Info
            key={info.iconName}
            iconName={info.iconName}
            category={info.category}
            content={info.content}
          />
        ))}
      </InfoBoxContainer>
    </AboutBox>
  );
};

export default About;
