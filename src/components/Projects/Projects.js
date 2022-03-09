import React from "react";
import { Col, Row, Card, Divider } from "antd";
import cover from "../../assets/images/1947484.jpg";

const Projects = () => {
  const { Meta } = Card;
  const title =
    "This a shop management app that lets the shop owner track his/her business from anywhere by tracking sales,products and acts as a POS app by generating receipts for each transactions";

  const WeDevs =
    "Where developers meet and exchange ideas through blog articles, realtime communication through chatting and helping each others when stuck";

  return (
    <section className="about-section">
      <div>
        <h1 className="about-heading">
          Projects
          <hr width="30%" />
        </h1>
      </div>
      <Row>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 20, offset: 2 }}>
          <Divider>Smartshop</Divider>
          <Card
            hoverable={true}
            className="project-card"
            cover={<img alt="Smartshop project" src={cover} />}
          >
            <p>{title}</p>
            <Meta
              description={<a href="https://nasmart.com">Check it out</a>}
            />
          </Card>
        </Col>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 20, offset: 2 }}>
          <Divider>WeDevs</Divider>
          <Card
            hoverable={true}
            className="project-card"
            cover={<img alt="WeDevs project" src={cover} />}
          >
            <p>{WeDevs}</p>
            <Meta description={<a href="https://wedevs.com">Check it out</a>} />
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Projects;
