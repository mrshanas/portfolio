import React from "react";
import Navbar from "./Navbar/Navbar";
import { Row, Col, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <section className="top-section">
      <Navbar />
      <Row>
        <Col span={16} offset={4}>
          <div className="header-text">
            <h1>Hello there 👋 I'm Shanas</h1>
            <p>Fullstack web developer based in Tanzania</p>
            <Button
              shape="round"
              type="primary"
              ghost={true}
              style={{ margin: "1rem 1rem" }}
            >
              I need a website
            </Button>
            <Button
              shape="round"
              type="primary"
              icon={<MailOutlined />}
              style={{ margin: "1rem 1rem" }}
            >
              Hire Me
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Header;
