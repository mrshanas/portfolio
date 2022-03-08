import React, { useState } from "react";
import { Row, Col, Card, Avatar, Switch } from "antd";
import shanas from "../../assets/images/photo_2022-02-22_22-09-49.jpg";
import { CloudDownloadOutlined } from "@ant-design/icons";

const About = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => setLoading(!checked);
  const { Meta } = Card;
  const description =
    "I've been programming since 2021 and am mostly interested in web development, ";

  return (
    <section className="about-section">
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
            </div>
            <Card
              bordered={true}
              extra={
                <a>
                  <CloudDownloadOutlined />
                </a>
              }
              loading={loading}
              title="Download CV"
              hoverable={true}
              style={{ height: 200 }}
            >
              <Meta
                avatar={<Avatar src={shanas} />}
                title="About shanas"
                description={description}
              />
            </Card>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
