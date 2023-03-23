import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Colors } from "./../../assets/styles/Colors";
import Logo from "./../../assets/images/logo/logo.webp";

export default function Navbar() {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  useEffect(() => {
    openMenu
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [openMenu]);

  return (
    <Wrapper>
      <Link to="/">
        <Img src={Logo} alt="Logo SportClub" />
      </Link>
      <Hamburger onClick={() => setOpenMenu(!openMenu)}>
        <HamburgerBox>
          <HamburgerInner open={openMenu}></HamburgerInner>
        </HamburgerBox>
      </Hamburger>
      <MenuWrapper open={openMenu}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="basketball">Basketball</MenuLink>
        <MenuLink to="football">Football</MenuLink>
        <MenuLink to="gallery">Gallery</MenuLink>
        <MenuLink to="contact">Contact</MenuLink>
      </MenuWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  vertical-align: middle;
`;

const Hamburger = styled.button`
  padding: 10px;
  display: inline-block;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 820px) {
    display: none;
  }
`;

const HamburgerBox = styled.span`
  width: 30px;
  height: 24px;
  position: relative;
  display: inline-block;
`;

const HamburgerInner = styled.span`
  content: "";
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${(props) => (props.open ? "transparent" : Colors.black)};
  transition: background-color 0.1s 0.2s ease-in-out;

  &::before,
  &::after {
    content: "";
    width: 80%;
    height: 3px;
    position: absolute;
    right: 0;
    background-color: ${(props) => (props.open ? Colors.white : Colors.black)};
    transition: all 0.2s 0.2s ease-in-out;
  }

  &::before {
    top: -10px;
    transform: ${(props) => props.open && "translateY(10px) rotate(45deg)"};
    width: ${(props) => props.open && "100%"};
  }

  &::after {
    top: 10px;
    transform: ${(props) => props.open && "translateY(-10px) rotate(-45deg)"};
    width: ${(props) => props.open && "100%"};
  }
`;

const MenuWrapper = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(${(props) => (props.open ? "0" : "-100vh")});
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.black};
  list-style: none;
  transition: transform 0.2s ease-in-out;
  z-index: 1;

  @media (min-width: 820px) {
    position: static;
    height: auto;
    width: auto;
    flex-direction: row;
    background-color: transparent;
    transform: translateY(0);
  }
`;

const MenuLink = styled(Link)`
  margin: 0.5rem 0;
  text-decoration: none;
  font-size: 1.3rem;
  color: ${Colors.white};
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:nth-child(odd):hover {
    color: ${Colors.blue};
  }

  &:nth-child(even):hover {
    color: ${Colors.orange};
  }

  @media (min-width: 820px) {
    margin: 0 0.5rem;
    font-size: 1rem;
    color: ${Colors.black};
  }
`;
