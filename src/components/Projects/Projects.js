import React from "react";
import { Col, Row, Card, Divider } from "antd";
import cover from "../../assets/images/1947484.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  const { Meta } = Card;
  const title =
    "This a shop management app that lets the shop owner track his/her business from anywhere by tracking sales,products and acts as a POS app by generating receipts for each transactions";

  const WeDevs =
    "An ecommerce website and mobile app built for my client based on selling electronic devices like Computers, Monitors, Gamepads, Hard drives etc";

  return (
    <motion.section
      className="about-section"
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 2, type: "spring" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
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
              description={
                <a href="https://pos-smartshop.herokuapp.com">Check it out</a>
              }
            />
          </Card>
        </Col>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 20, offset: 2 }}>
          <Divider>Nasmart</Divider>
          <Card
            hoverable={true}
            className="project-card"
            cover={<img alt="WeDevs project" src={cover} />}
          >
            <p>{WeDevs}</p>
            <Meta
              description={
                //<a href="https://wedevs.mrshanas.com">Check it out</a>
                <p>Under Development</p>
              }
            />
          </Card>
        </Col>
      </Row>
    </motion.section>
  );
};

export default Projects;
