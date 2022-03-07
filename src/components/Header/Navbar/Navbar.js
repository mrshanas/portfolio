import React from "react";
import { Row, Col } from "antd";

const Navbar = () => {
  return (
    <>
      <nav>
        <Row>
          <Col span={8}>
            <h6 className="label">Shanas</h6>
          </Col>
          <Col span={16}>
            <ul>
              <li>
                <a href="#">About Me</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </Col>
        </Row>
      </nav>
    </>
  );
};

export default Navbar;
