import React, { useEffect } from "react";
import Footer from "../navbar/Footer";
import NavBar from "../navbar/NavBar";
import FifthHero from "./sections/FifthHero";
import FirstHero from "./sections/FirstHero";
import FourthHero from "./sections/FourthHero";
import SecondHero from "./sections/SecondHero";
import ThirdHero from "./sections/ThirdHero";
import styled from "styled-components";

const Home = () => {
  useEffect(() => {
    document.title = "Phantom | Home";
  }, []);

  return (
    <Wrap>
      <NavBar />
      <FirstHero />
      <SecondHero />
      <ThirdHero />
      <FourthHero />
      <FifthHero />
      <Footer />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.body`
  background: rgb(44, 45, 48);
`;
