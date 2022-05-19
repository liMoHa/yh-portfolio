import React from "react";
import styled from "styled-components";

const ContactBox = styled.section`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  text-align: center;
  padding: 2em;
  & h4{
      font-size: 0.9em;
  }
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 1em;
  & svg {
    color: ${({ theme }) => theme.colors.black};
    padding: 1em;
    width: 2em;
    height: 2em;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    transition: transform 0.2s ease-in-out;
  }
  & svg:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.white};
    transform: rotate(30deg);
  }
  & h3 {
    font-size: 1.3em;
    font-weight: 700;
    margin-left: 0.7em;
  }
`;
const Contact: React.FC = (): JSX.Element => (
  <ContactBox>
    <InfoBox>
      <Info>
        <i className="fa-solid fa-phone" />
        <h3>010-8070-6382</h3>
      </Info>
      <Info>
        <i className="fa-solid fa-envelope" />
        <h3>yeongha6382@gmail.com</h3>
      </Info>
    </InfoBox>
    <h4>© 2021. 임영하. All rights reserved.</h4>
  </ContactBox>
);

export default Contact;
