import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Services />
    </div>
  );
};

export default App;
