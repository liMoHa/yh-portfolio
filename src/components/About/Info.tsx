import React from "react";
import styled from "styled-components";

type IconName = {
  iconName: string;
  category: string;
  content: string;
};

const InfoBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2em;
  & svg {
    font-size: 2.2em;
    color: ${({ theme }) => theme.colors.lightGreen};
  }
  & h3 {
    font-weight: 700;
  }
`;

const Info: React.FC<IconName> = ({
  iconName,
  category,
  content,
}: IconName): JSX.Element => {
  return (
    <InfoBox>
      <i className={iconName}></i>
      <h3>{category}</h3>
      {content.split("\n").map((str) => (
        <div key={str}>{str}</div>
      ))}
    </InfoBox>
  );
};

export default Info;
