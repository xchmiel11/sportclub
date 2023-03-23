import { Helmet, HelmetProvider } from "react-helmet-async";
import { Colors } from "../../assets/styles/Colors";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import img from "./../../assets/images/basketball/section.webp";

export default function Basketball() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SportClub - basketball</title>
      </Helmet>
      <Header title="Basketball" color="orange" />
      <Wrapper>
        <Section01>
          <ImgWrapper>
            <Img src={img} alt="basketball img" />
          </ImgWrapper>
          <TextWrapper>
            <Heading>About us</Heading>
            <p>
              Integer in varius augue. Donec velit enim, euismod pulvinar ipsum
              nec, ultrices fermentum arcu. Nulla posuere mollis urna, quis
              malesuada leo faucibus quis. Aliquam et pulvinar odio, a mattis
              dui. Nulla nunc turpis, eleifend in fringilla vel, condimentum in
              risus. Nam arcu purus, suscipit at viverra ac, iaculis eu libero.
            </p>
            <p>
              Aliquam et pulvinar odio, a mattis dui. Nulla nunc turpis,
              eleifend in fringilla vel, condimentum in risus. Nam arcu purus,
              suscipit at viverra ac, iaculis eu libero.
            </p>
          </TextWrapper>
        </Section01>
        <Section02>
          <Heading>How we work</Heading>
          <p>
            Donec velit enim, euismod pulvinar ipsum nec, ultrices fermentum
            arcu. Nulla posuere mollis urna, quis malesuada leo faucibus quis.
            Aliquam et pulvinar odio, a mattis dui. Nulla nunc turpis, eleifend
            in fringilla vel.
          </p>
        </Section02>
        <Section03>
          <Heading>Why us</Heading>
          <Box>Nulla posuere mollis urna, quis malesuada leo faucibus quis</Box>
          <Box>Nulla posuere mollis urna, quis malesuada leo faucibus quis</Box>
          <Box>Nulla posuere mollis urna, quis malesuada leo faucibus quis</Box>
        </Section03>
        <Contact color="orange" />
      </Wrapper>
    </HelmetProvider>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  margin: 5vw auto;

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
    margin: 2.5vw auto;
  }

  @media (min-width: 992px) {
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }

  @media (min-width: 1400px) {
    width: 1320px;
  }

  @media (min-width: 1600px) {
    width: 1540px;
  }
`;

const Section01 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 48%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  color: ${Colors.black};

  p {
    text-align: center;
  }

  p:first-of-type {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    width: 48%;
    margin-top: 0;

    p {
      text-align: left;
    }
  }
`;

const Heading = styled.h2`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-align: left;
  font-size: 2rem;
  font-weight: 800;
  color: ${Colors.lightBlack};

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 5px;
    background-color: ${Colors.darkOrange};
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Section02 = styled.div`
  margin-top: 4rem;
  padding: 1rem;
  text-align: center;
  background-color: ${Colors.gray};
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 70%;
    margin: 6rem 0 auto 0;
    text-align: left;
  }
`;

const Section03 = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

const Box = styled.div`
  width: 100%;
  min-height: 150px;
  margin: 0.5rem 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.orange};
  color: ${Colors.white};
  text-align: center;
  font-weight: 500;
  border: 3px solid ${Colors.orange};
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.orange};
  }

  @media (min-width: 768px) {
    width: 32%;
  }
`;
