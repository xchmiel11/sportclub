import { Colors } from "./../../assets/styles/Colors";
import styled from "styled-components";

export default function Header({ title, color }) {
  return (
    <Wrapper
      color={
        color !== undefined && color !== null && color !== "" ? color : null
      }
    >
      <Heading>
        {title !== undefined && title !== null && title !== ""
          ? title
          : "Page title"}
      </Heading>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.color === "orange"
      ? Colors.orange
      : props.color === "blue"
      ? Colors.blue
      : Colors.black};
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  color: ${Colors.white};
`;
