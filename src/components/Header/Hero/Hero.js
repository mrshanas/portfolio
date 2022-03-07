import React from "react";
import { Row, Col, Space, Button } from "antd";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import shanas from "../../../assets/images/photo_2022-02-22_22-09-49.jpg";

const Hero = () => {
  return (
    <Row gutter={[48]}>
      <Col span={12}>
        <div className="hero-text">
          <div className="circular-image">
            <img src={shanas} alt="Shanas image" />
          </div>

          <br />
          <Space>
            <a href="https://github.com/mrshanas" target="_blank">
              <GithubFilled className="icons" />
            </a>
            <a>
              <LinkedinFilled className="icons" />
            </a>
          </Space>
          <br />
          <br />
          <Button type="primary" href="" shape="round">
            Hire Me
          </Button>
        </div>
      </Col>
      <Col span={12}>
        <h1>Hi, I'm Shanas</h1>
        <p>Web Developer based in Tanzania</p>
      </Col>
    </Row>
  );
};

export default Hero;
