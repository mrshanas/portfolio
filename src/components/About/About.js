import React, { useState } from "react";
import { Row, Col, Card, Avatar, Switch, Button } from "antd";
import shanas from "../../assets/images/photo_2022-02-22_22-09-49.jpg";
import { CloudDownloadOutlined } from "@ant-design/icons";
import { description } from "../constants";

const About = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => setLoading(!checked);

  return (
    <section className="about-section" id="about">
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
              <Button style={{ float: "right" }}>
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
    </section>
  );
};

export default About;
