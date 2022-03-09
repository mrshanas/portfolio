import React from "react";
import { Row, Col, Divider, Card, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const Services = () => {
  const data = [
    {
      url: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/48/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png",
      title: "Web Development",
      desc: "Both frontend development of single page applications and backend development with popular tech stacks like Django, NodeJS",
    },
    {
      url: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/48/000000/external-scraper-construction-and-tools-kiranshastry-lineal-color-kiranshastry.png",
      title: "Web Scraping and Automation",
      desc: "Web crawling and scraping using powerful tools like Scrapy,Beatifulsoup and Selenium for scraping sites like Ecommerce sites, Blogs",
    },
    {
      url: "https://img.icons8.com/clouds/48/000000/api.png",
      title: "API Development and Documentation",
      desc: "API development and integration with multiple sites also documentation with tools like Swagger",
    },

    {
      url: "https://img.icons8.com/ios-filled/48/000000/devops.png",
      title: "DevOps",
      desc: "Continuos Integration and Continous Delivery(CI/CD),Automating workflows using Github Actions",
    },
    {
      url: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/000000/external-mobile-phone-computer-programming-flaticons-lineal-color-flat-icons.png",
      title: "Progressive Web Apps",
      desc: "Building web apps that can run natively on both iOS and Android devices with native features like push notifications",
    },
    {
      url: "https://img.icons8.com/fluency/48/000000/chatbot.png",
      title: "Chatbots",
      desc: "Building chatbots for telegram that can be used for providing realtime services to customers ",
    },
  ];
  return (
    <section>
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
            <div align="center">
              Interested?? <SmileOutlined /> <Button>Lets Talk</Button>
            </div>
          </>
        </Col>
      </Row>
    </section>
  );
};

export default Services;
