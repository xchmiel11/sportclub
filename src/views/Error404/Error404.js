import { Helmet, HelmetProvider } from "react-helmet-async";
import { LinkButton } from "../../assets/styles/Buttons";
import styled from "styled-components";
import image from "./../../assets/images/error-404/image.svg";

export default function Error404() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SportClub - 404</title>
      </Helmet>
      <Wrapper>
        <ImgWrapper>
          <Img src={image} alt="Grafika 404" />
        </ImgWrapper>
        <Heading>The specified site does not exist</Heading>
        <LinkButton link="/" text="Back to home page" color="black" />
      </Wrapper>
    </HelmetProvider>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 113px - 61px);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 300px;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  margin: 1rem 0;

  @media (min-width: 991px) {
    margin: 2rem 0 1rem;
  }
`;
