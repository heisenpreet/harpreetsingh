import React from "react";

import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import SectionSubtile from "./SectionSubtitle";
import st from "../../styles/hero.module.css";
import HeroImg from "../../public/Images/HeroImg.png";
const Hero = () => {
  return (
    <section className={st.hero}>
      <Container>
        <Row>
          {/* ==============hero content===================== */}
          <Col lg="6" md="6">
            <div className={st.hero__content}>
              <SectionSubtile subtitle="Hello 👋"></SectionSubtile>
              <h2 className="mt-3 mb-3">I&apos;m Harpreet Singh</h2>
              <h5 style={{ color: " #0e76a8 !important" }} className="mb-4">
                ReactJS Developer
              </h5>
              <p>
                Experienced Full Stack Developer(MERN). Skilled in JavaScript,
                and DSA. Strong engineering professional with a Bachelor of
                Technology focused in Electronics and Communications Engineering
                and Computer Science Engineering, New Delhi.
              </p>
              <div className="mt-5">
                <button
                  type="button"
                  className={`primary__btn ${st.btn__linkedin}`}
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/harpreet-singh-a903a3170/"
                  >
                    LinkedIn
                  </a>
                </button>
                <button type="button" className="secondary__btn">
                  <a
                    target="_blank"
                    href="/resume__2_.pdf"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </Col>
          {/* ==============hero img===================== */}
          <Col lg="6" md="6">
            <div className={`${st.hero__img} text-end`}>
              <Image
                alt="profile Image"
                src={HeroImg}
                width="400"
                height="400"
              />
              <div className={st.hero__skills}>
                <h6>MERN</h6>

                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>
              <div
                className={`${st.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-flashlight-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">2+Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default React.memo(Hero);
