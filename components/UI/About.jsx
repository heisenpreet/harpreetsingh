import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import { skillsLogos } from "../data/skillsLogo";
import { exp } from "../data/exp";
const About = () => {
  return (
    <section id="about" style={{ paddingTop: "0", marginTop: "9rem" }}>
      <Container>
        <Row>
          <Col lg="6">
            <SectionSubtitle subtitle="Skills and Experience" />
            <div className="app__skills-exp">
              {exp.map((exp) => (
                <div className="app__skills-exp-item" key={exp.year}>
                  <div
                    style={{ marginLeft: "1.5rem" }}
                    className="app__skills-exp-year"
                  >
                    <h5 className="yearh">{exp.year}</h5>
                  </div>
                  <div className="app__skill-exp-works">
                    {exp.work.map((work) => (
                      <div key={work.name} className="app__skills-exp-work">
                        <h5>{work.name}</h5>
                        <p>{work.company}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg="6">
            <div className="app__skills-container">
              <div className="app__skills-list">
                {skillsLogos.map((skill) => (
                  <div key={skill.name} className="app__skills-item app__flex">
                    <div className="app__flex">
                      <Image src={skill.img} alt="skilllogo" />
                    </div>
                    <p className="p-text">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default React.memo(About);
