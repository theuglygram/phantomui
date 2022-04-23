import Blog from "components/pages/blog/Blog";
import Home from "components/pages/home/Home";
import Security from "components/pages/security/Security";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/security" element={<Security />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
