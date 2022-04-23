import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "assets/svgs/logo.svg";
import { Button } from "styles/Globalstyle";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [backChange, setbackChange] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 50) {
      setbackChange(true);
    } else {
      setbackChange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleHamburger = () => {
    setMenu(!menu);
  };

  return (
    <Wrap>
      <NavContainer>
        <NavWrap backChange={backChange}>
          <LogoWrap>
            <Link to="/">
              <Logo src={logo} />
            </Link>
          </LogoWrap>
          <LinksWrap toggle={menu}>
            <Link to="/">
              <NavLinks>Overview </NavLinks>
            </Link>
            <Link to="/security">
              <NavLinks>Security</NavLinks>
            </Link>
            <Link to="/blog">
              <NavLinks>Blog</NavLinks>
            </Link>

            <NavLinks>Support</NavLinks>
          </LinksWrap>
          <DownWrap>
            <DownBtn>Download</DownBtn>
          </DownWrap>
          <HamMenu onClick={toggleHamburger}>
            <Spans1 toggle={menu}></Spans1>
            <Spans2 toggle={menu}></Spans2>
            <Spans3 toggle={menu}></Spans3>
          </HamMenu>
        </NavWrap>
      </NavContainer>
    </Wrap>
  );
};

export default NavBar;

const Wrap = styled.div`
  width: 100%;
  position: relative;
`;
const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;
const NavWrap = styled.div`
  display: flex;
  z-index: 20;
  width: auto;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 20px;
  height: 50px;
  background: ${(props) => (props.backChange ? "#ffffff03" : "none")};
  backdrop-filter: ${(props) => (props.backChange ? "blur(10px)" : "0")}; ;
`;
const LogoWrap = styled.div`
  z-index: 99999;
`;
const Logo = styled.img`
  z-index: 99999;
`;
const LinksWrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* transition: all 0.9s ease-in;
  -o-transition: all 0.9s ease-in;
  -moz-transition: all 0.9s ease-in; */

  @media only screen and (max-width: 765px) {
    flex-direction: column;
    position: absolute;
    z-index: 10;
    height: 100vh;
    background: rgb(44, 45, 48);
    width: 100%;
    left: 0;
    top: 0;
    justify-content: space-evenly;
    text-align: center;
    transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    transform: ${(props) =>
      props.toggle ? "translateY(0px)" : "translateY(-1500px)"};
  }
`;
const NavLinks = styled.div`
  padding: 0 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  :hover {
    color: #fff;
  }
`;
const DownWrap = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const DownBtn = styled(Button)`
  background: #4e44ce;
  padding: 15px 35px;
`;

const HamMenu = styled.div`
  display: flex;
  flex-direction: column;
  display: none;
  z-index: 99999;
  @media only screen and (max-width: 765px) {
    display: block;
  }
`;
const Spans1 = styled.div`
  width: 35px;
  height: 1px;
  background-color: #484848;
  margin: 3px 0;
  transform: ${(props) =>
    props.toggle ? "rotate(-45deg) translate(-1px,4px)" : "rotate(0)"};
`;
const Spans2 = styled.div`
  width: 35px;
  height: 1px;
  background-color: #484848;
  margin: 3px 0;
  display: ${(props) => (props.toggle ? "none" : "block")};
`;
const Spans3 = styled.div`
  width: 35px;
  height: 1px;
  background-color: #484848;
  margin: 3px 0;
  transform: ${(props) =>
    props.toggle ? "rotate(45deg) translate(1px,-1px)" : "rotate(0)"};
`;
