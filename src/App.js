import React from "react";
import "antd/dist/antd.css";
import { BackTop } from "antd";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Services id="services" />
      <BackTop />
      <Footer />
    </div>
  );
};

export default App;
