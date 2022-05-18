import React from "react";
import styled from "styled-components";

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.beige};
`;

const Profile = styled.img`
  width: 13em;
`;

const IconBox = styled.div`
  & svg {
    width: 1em;
    height: 1em;
    font-size: 2em;
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    padding: 0.25em;
    margin: 0.5em;
    transition: background-color 0.2s ease-out;
  }
  & svg:hover {
    background-color: ${({ theme }) => theme.colors.darkBrown};
  }
`;

const ContactButton = styled.button`
  background-color: ${({ theme }) => theme.colors.pinkBrown};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2em;
  width: 10em;
  padding: 0.8em;
  margin-top: 2em;
  border-radius: 0.5em;
  box-shadow: 2px 2px 2px lightgray;
  transition: background-color 0.2s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBrown};
  }
`;

const Home: React.FC = (): JSX.Element => {
  return (
    <HomeBox>
      <Profile src="image/profileImg.png" alt="profile" />
      <h1>YeongHa Im</h1>
      <h3>Frontend Developer</h3>
      <IconBox>
        <a href="https://github.com/liMoHa">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://yeongha.tistory.com/">
          <i className="fa-brands fa-blogger-b" />
        </a>
      </IconBox>
      <ContactButton>Contact me</ContactButton>
    </HomeBox>
  );
};

export default Home;
