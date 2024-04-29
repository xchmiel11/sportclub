import { BiCopyright as CopyrightIcon } from "react-icons/bi";
import { AiFillHeart as HeartIcon } from "react-icons/ai";
import { Colors } from "./../../assets/styles/Colors";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <FooterItem>
        SportClub <CopyrightIcon /> {new Date().getFullYear()}
      </FooterItem>
      <FooterItem>
        Designed & created with <LoveIcon /> by{" "}
        <FooterLink href="https://github.com/xchmiel11" target="_BLANK">
          xchmiel11
        </FooterLink>
      </FooterItem>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding: 0.5rem;
`;

const FooterItem = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;

  &:nth-child(1) {
    margin-bottom: 5px;
  }

  &:nth-child(1)::before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 1px;
    background-color: ${Colors.black};
  }
`;

const LoveIcon = styled(HeartIcon)`
  color: #e00929;
`;

const FooterLink = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: ${Colors.black};
`;
