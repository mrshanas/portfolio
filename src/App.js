import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
