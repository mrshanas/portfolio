import React from "react";
import { Row, Col, Divider, Card } from "antd";
import { data } from "../constants";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <Divider width="80%">
        <h1>Services I offer</h1>
      </Divider>
      <Row>
        <Col span={20} offset={2}>
          <>
            <Row>
              {data.map(({ url, title, desc }, i) => (
                <Col
                  md={{ span: 6, offset: 2 }}
                  sm={{ span: 10, offset: 2 }}
                  xs={{ span: 22, offset: 2 }}
                  key={i}
                  style={{ paddingBottom: 30 }}
                >
                  <Card hoverable={true} bodyStyle={{ textAlign: "center" }}>
                    <img src={url} alt={title} />
                    <br />
                    <h2>{title}</h2>
                    <p>{desc}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        </Col>
      </Row>
    </section>
  );
};

export default Services;
