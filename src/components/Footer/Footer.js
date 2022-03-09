import React from "react";
import { Layout, Row, Col, Input, Button } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const { Footer } = Layout;
  const { Group } = Input;
  return (
    <Layout>
      <Footer className="footer-container">
        <Row>
          <Col sm={{ span: 10, offset: 2 }} xs={{ span: 10, offset: 2 }}>
            <h3 className="footer-text">Hey I write blog posts</h3>
            <p className="footer-text">
              Subscribe to our newsletter to receive updates on our blog posts
            </p>
            <Group compact>
              <Input
                style={{ width: "80%" }}
                placeholder="Enter your email..."
              />
              <Button type="primary">Subscribe</Button>
            </Group>
          </Col>
          <Col sm={{ span: 10, offset: 2 }} xs={{ span: 10 }}>
            <h3 className="footer-text">Find me in</h3>
            <ul>
              <li>
                <a href="#">
                  <GithubOutlined /> Github
                </a>
              </li>
              <li>
                <a href="">
                  <LinkedinOutlined /> Linkedin
                </a>
              </li>
              <li>
                <a href="">
                  <TwitterOutlined /> Twitter
                </a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </Col>
          <Col span={22} offset={2}></Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default Footer;
