import React from "react";
import Navbar from "./Navbar/Navbar";
import { Row, Col } from "antd";

const Header = () => {
  return (
    <section className="top-section">
      <Navbar />
      <Row>
        <Col span={16} offset={4}>
          <div className="header-text">
            <h1>Making It simple and Scalable</h1>
            <p>
              Not just websites but a website that <strong>SELLS</strong>
            </p>
            {/* <Button
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
            </Button> */}
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">
                <a
                  href="mailto:nassibshaban345@gmail.com&subject=I want to hire you"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#fff" }}
                >
                  Hire Me
                </a>
              </span>
            </button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Header;
