import React from "react";
import { Row, Col } from "antd";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  return (
    <Row className="footer-container">
      <Col sm={{ span: 24 }} xs={{ span: 24 }}>
        <div className="footer-links">
          <ul>
            <li>
              <a
                href="https://github.com/mrshanas"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shabani-nassibu-9335b2219/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/mrshanas"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/users/910065174977847326"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord />
              </a>
            </li>
          </ul>
        </div>
      </Col>
      <Col sm={{ span: 24 }} xs={{ span: 24 }}>
        <p className="footer-text footer-contact">
          <a href="mailto:nassibshaban345@gmail.com" className="footer-text">
            nassibshaban345@gmail.com
          </a>
          <a href="tel:255716689401" className="footer-text">
            +255716689401
          </a>
        </p>
      </Col>
      <Col span={22} offset={2}>
        <p className="footer-text">&copy; {date.getFullYear()} Mr Shanas</p>
      </Col>
    </Row>
  );
};

export default Footer;
