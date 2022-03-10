import React, { useState } from "react";
import { Row, Col, Drawer, Space } from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  TwitterOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);
  return (
    <>
      <Row>
        <Col xl={{ span: 8, offset: 2 }} xs={{ span: 0 }}>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </nav>
        </Col>
        <Col xl={{ span: 8, offset: 2 }} xs={{ span: 24 }}>
          <div className="icons-links">
            <ul>
              <li>
                <a
                  href="https://github.com/mrshanas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubFilled />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shabani-nassibu-9335b2219/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinFilled />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/mrshanas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterOutlined />
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu">
            <a onClick={showDrawer} className="drawer-button" href="#ff">
              <MenuOutlined className="toggle-icon" />
            </a>
            <Space>
              <Drawer
                placement="left"
                width={200}
                onClose={onClose}
                visible={visible}
              >
                <ul className="mobile-links">
                  <li>
                    <a href="#about">About Me</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                </ul>
              </Drawer>
            </Space>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
