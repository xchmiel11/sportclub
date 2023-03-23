import { Colors } from "./../../assets/styles/Colors";
import { LinkButton } from "./../../assets/styles/Buttons";
import styled from "styled-components";

export default function Contact({ color }) {
  return (
    <Wrapper>
      <Heading color={color}>Get in touch</Heading>
      <LinkButton
        link="/contact"
        text="Contact"
        color={color === "orange" || color === "blue" ? color : "black"}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

const Heading = styled.h2`
  position: relative;
  display: flex;
  margin: 0 auto 1.5rem;
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
    background-color: ${(props) =>
      props.color === "orange"
        ? Colors.darkOrange
        : props.color === "blue"
        ? Colors.darkBlue
        : Colors.darkOrange};
  }

  @media (min-width: 768px) {
    text-align: center;
    font-size: 2.2rem;
  }
`;
