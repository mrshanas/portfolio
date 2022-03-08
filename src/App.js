import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
    </div>
  );
};

export default App;
