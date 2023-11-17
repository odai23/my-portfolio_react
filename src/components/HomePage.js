import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Project from "./Projects/Project";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Project />
      <Footer />
    </>
  );
};

export default HomePage;