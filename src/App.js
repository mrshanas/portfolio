import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
};

export default App;
