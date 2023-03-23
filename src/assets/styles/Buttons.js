import { Link } from "react-router-dom";
import { Colors } from "./Colors";
import styled from "styled-components";

const LinkButton = ({ link, text, color }) => {
  return (
    <StyledLinkButton
      to={link !== undefined && link !== "" ? link : "/"}
      color={color === "orange" || color === "blue" ? color : "black"}
    >
      {text !== undefined && text !== "" ? text : "Tekst"}
    </StyledLinkButton>
  );
};

const Button = ({ text, clicked }) => {
  return (
    <StyledButton onClick={() => clicked(true)}>
      {text !== undefined && text !== "" ? text : "Tekst"}
    </StyledButton>
  );
};

const StyledLinkButton = styled(Link)`
  min-width: 150px;
  padding: 0.75rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  background: linear-gradient(
      to left,
      ${(props) =>
          props.color === "orange"
            ? Colors.orange
            : props.color === "blue"
            ? Colors.blue
            : Colors.lightBlack}
        50%,
      ${(props) =>
          props.color === "orange"
            ? Colors.darkOrange
            : props.color === "blue"
            ? Colors.darkBlue
            : Colors.black}
        50%
    )
    right;
  background-size: 200%;
  color: ${Colors.white};
  border-radius: 4px;
  transition: 0.2s ease-out;

  &:hover {
    background-position: left;
  }
`;

const StyledButton = styled.button`
  min-width: 150px;
  padding: 0.75rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  background: linear-gradient(
      to left,
      ${Colors.orange} 50%,
      ${Colors.darkOrange} 50%
    )
    right;
  background-size: 200%;
  color: ${Colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-position: left;
  }
`;

export { LinkButton, Button };
