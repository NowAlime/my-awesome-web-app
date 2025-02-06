import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "../Skills";
import Projects from "../Projects";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Layout;