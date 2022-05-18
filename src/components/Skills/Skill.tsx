import React from "react";
import styled from "styled-components";

type SkillProps = {
  path: string;
  skill: string;
  content?: string;
};

const SkillBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5em;
  text-align: center;
`;

const SkillCircle = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 7.8em;
  height: 7.8em;
  border-radius: 100%;
  box-shadow: 3px 3px 5px gray;
  margin-bottom: 1em;
  transition: transform 0.15s ease-out;
  &:hover {
    transform: scale(1.1);
  }
  & img {
    width: 3em;
    margin-bottom: 0.5em;
  }
  & span {
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
  }
`;

const Skill: React.FC<SkillProps> = ({
  path,
  skill,
  content,
}: SkillProps): JSX.Element => (
  <SkillBox>
    <SkillCircle>
      <img src={path} alt={skill} />
      <span>{skill}</span>
    </SkillCircle>
    {content?.split("\n").map((str) => (
      <h3 key={str}>{str}</h3>
    ))}
  </SkillBox>
);

export default Skill;
