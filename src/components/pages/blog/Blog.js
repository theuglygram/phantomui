import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../navbar/Footer";
import NavBar from "../navbar/NavBar";
import Blogsection from "./sections/Blogsection";
const Blog = () => {
  useEffect(() => {
    document.title = "Phantom | Blog";
  }, []);

  return (
    <Wrap>
      <NavBar />
      <Blogsection />
      <Footer />
    </Wrap>
  );
};

export default Blog;

const Wrap = styled.body`
  background: rgb(44, 45, 48);
`;
