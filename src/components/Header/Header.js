import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import { Row, Col } from "antd";

const Header = () => {
  return (
    <section className="top-img">
      <Navbar />
      <Hero />
    </section>
  );
};

export default Header;
