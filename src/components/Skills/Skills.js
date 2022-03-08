import React from "react";
import { Row, Col } from "antd";
import { languages, frontend, backend } from "./constants";

const Skills = () => {
  return (
    <section className="about-section" id="skills">
      <h1 className="about-heading">Skills</h1>
      <Row>
        <Col md={{ span: 7, offset: 1 }} xs={{ span: 20, offset: 2 }}>
          <h1 className="about-heading">
            Languages
            <hr width="70%" />
          </h1>
          <Row>
            {languages.map(({ key, url, desc }) => (
              <Col
                key={key}
                md={{ span: 6, offset: 2 }}
                xs={{ span: 10, offset: 2 }}
              >
                <img src={url} alt={desc} />
                <br />
                <strong>{desc}</strong>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={{ span: 7, offset: 1 }} xs={{ span: 20, offset: 2 }}>
          <h1 className="about-heading">
            Frontend
            <hr width="70%" />
          </h1>
          <Row>
            {frontend.map(({ key, url, desc }) => (
              <>
                <Col
                  key={key}
                  md={{ span: 6, offset: 2 }}
                  xs={{ span: 10, offset: 2 }}
                >
                  <img src={url} alt={desc} />
                  <br />
                  <strong align="center">{desc}</strong>
                </Col>
              </>
            ))}
          </Row>
        </Col>
        <Col md={{ span: 7, offset: 1 }} xs={{ span: 20, offset: 2 }}>
          <h1 className="about-heading">
            Backend
            <hr width="70%" />
          </h1>
          <Row>
            {backend.map(({ key, url, desc }) => (
              <Col
                key={key}
                md={{ span: 6, offset: 2 }}
                xs={{ span: 10, offset: 2 }}
              >
                <img src={url} alt={desc} />
                <br />
                <strong align="center">{desc}</strong>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Skills;
