import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

const SkillsBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2em;
  background-color: ${({ theme }) => theme.colors.lightBeige};
  & h2 {
    margin-bottom: 1em;
    padding-bottom: 0.4em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkBrown};
  }
  & > h3 {
    font-size: 1.5em;
    font-weight: 400;
  }
`;

const StackInfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ToolsInfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const stackInfo = [
  {
    path: "images/skills/html5.svg",
    skill: "HTML5",
    content: "시맨틱 태그\nBEM",
  },
  {
    path: "images/skills/css3.svg",
    skill: "CSS3",
    content: "FlexBox\nGrid\nResponsive Web",
  },
  {
    path: "images/skills/javascript.svg",
    skill: "JavaScript",
    content: "ES6+\nDOM APIs\nFetch API",
  },
  {
    path: "images/skills/styledcomponents.svg",
    skill: "CSS library",
    content: "SCSS\nStyled-components\nEmotion",
  },
  {
    path: "images/skills/react.svg",
    skill: "React",
    content: "Hooks\nreact-router\nreact-dnd\nRedux, Recoil\naxios",
  },
  {
    path: "images/skills/typescript.svg",
    skill: "TypeScript",
    content: "type/interface\ngeneric",
  },
];

const toolsInfo = [
  {
    path: "images/skills/github.svg",
    skill: "Github",
  },
  {
    path: "images/skills/notion.svg",
    skill: "Notion",
  },
  {
    path: "images/skills/jira.svg",
    skill: "Jira",
  },
];

const Skills = () => {
  return (
    <SkillsBox>
      <h2>Skills</h2>
      <h3>- my tech stack -</h3>
      <StackInfoBox>
        {stackInfo.map((info) => (
          <Skill
            key={info.path}
            path={info.path}
            skill={info.skill}
            content={info.content}
          />
        ))}
      </StackInfoBox>
      <h3>- tools -</h3>
      <ToolsInfoBox>
        {toolsInfo.map((info) => (
          <Skill key={info.path} path={info.path} skill={info.skill} />
        ))}
      </ToolsInfoBox>
    </SkillsBox>
  );
};

export default Skills;
