import { Helmet, HelmetProvider } from "react-helmet-async";
import { Colors } from "./../../assets/styles/Colors";
import { LinkButton } from "./../../assets/styles/Buttons";
import styled from "styled-components";
import basketball from "./../../assets/images/homepage/basketball.webp";
import football from "./../../assets/images/homepage/football.webp";

export default function Homepage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SportClub</title>
      </Helmet>
      <Wrapper>
        <Item>
          <Heading>Basketball</Heading>
          <LinkButton link="/basketball" text="Read more" color="orange" />
        </Item>
        <Item>
          <Heading>Football</Heading>
          <LinkButton link="/football" text="Read more" color="blue" />
        </Item>
      </Wrapper>
    </HelmetProvider>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 113px - 61px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: grayscale(70%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: grayscale(0%);
  }

  &:nth-child(odd) {
    background-image: url(${basketball});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 3px solid ${Colors.orange};
  }

  &:nth-child(even) {
    background-image: url(${football});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 3px solid ${Colors.blue};
  }

  @media only screen and (hover: none) {
    filter: grayscale(0);
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
`;

const Heading = styled.h1`
  padding: 0 0.5rem 1rem;
  font-size: 2rem;
  text-align: center;
  color: ${Colors.white};

  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`;
