import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import st from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              MERN Stack Developer with a demonstrated history of working in
              mobile application development. I believe the most optimized code
              is always the most intuitive one.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className={st.services__container}>
              <div>
                <ServicesItem
                  title="App Development"
                  icon="ri-smartphone-line"
                />
                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>
              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
