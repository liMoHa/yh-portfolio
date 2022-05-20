import React from "react";
import styled from "styled-components";
import { scrollIntoView } from "../../utils/scrollIntoView";

const HomeBox = styled.section`
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
  margin-top: 1em;
  display: flex;
  align-items: center;
  & a {
    display: inline-block;
    text-align: center;
    width: 3em;
    height: 3em;
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    padding: 0.5em;
    margin: 0.5em;
    transition: background-color 0.2s ease-out;
    & svg {
      font-size: 2em;
    }
  }
  & a:hover {
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
  const onClickContactButton = (e:React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    scrollIntoView(target);
  }
  return (
    <HomeBox data-id="Home">
      <Profile src="images/profileImg.png" alt="profile" />
      <h1>YeongHa Im</h1>
      <h3>Frontend Developer</h3>
      <IconBox>
        <a href="https://github.com/liMoHa">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://yeongha.tistory.com/">
          <i className="fa-brands fa-blogger-b" />
        </a>
        <a
          className="notion"
          href="https://cat-pearl-b11.notion.site/yeongha-s-study-space-14fc2ae59a4c410b9101988207dc4123"
        >
          <img src="images/notionToHome.svg" alt="notion" />
        </a>
      </IconBox>
      <ContactButton id="Contact" onClick={onClickContactButton}>Contact me</ContactButton>
    </HomeBox>
  );
};

export default Home;
