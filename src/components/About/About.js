import React, { useState } from "react";
import { Row, Col, Card, Avatar, Switch, Button } from "antd";
import shanas from "../../assets/images/photo_2022-02-22_22-09-49.jpg";
import { CloudDownloadOutlined } from "@ant-design/icons";
import { description } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => setLoading(!checked);

  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="about-heading">
        <h1>
          <strong>About Me</strong>
          <hr width="30%" />
        </h1>
      </div>
      <Row>
        <Col md={{ span: 18, offset: 4 }} xs={{ span: 24 }}>
          <div>
            <div className="switch-button">
              <Switch checked={!loading} onChange={onChange} />
              <Button
                style={{ float: "right" }}
                href="/resume/Resume-Shabani-Nassibu.pdf"
                download={true}
              >
                <CloudDownloadOutlined />
                Download CV
              </Button>
            </div>
            <Card
              bordered={true}
              extra={<Avatar src={shanas} size={100} />}
              loading={loading}
              title="Call me Shanas 😀"
              hoverable={true}
              style={{ height: "100%" }}
            >
              <p>{description}</p>
            </Card>
          </div>
        </Col>
      </Row>
    </motion.section>
  );
};

export default About;
