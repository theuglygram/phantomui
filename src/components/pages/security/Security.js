import React, { useEffect } from "react";
import styled from "styled-components";
import FifthHero from "../home/sections/FifthHero";
import Footer from "../navbar/Footer";
import NavBar from "../navbar/NavBar";
import HeroSection from "./sections/HeroSection";

const Security = () => {
  useEffect(() => {
    document.title = "Phantom | Security";
  }, []);

  return (
    <Wrap>
      <NavBar />
      <HeroSection />
      <FifthHero />
      <Footer />
    </Wrap>
  );
};

export default Security;

const Wrap = styled.body`
  background: #4e44ce;
`;
