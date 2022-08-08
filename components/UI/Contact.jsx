import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import st from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${st.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Connect with me" />
            <h3 className="mt-4 mb-4">Contact details</h3>
            <p>
              Feel free to connect with me on my linkedin page , You can also
              email me or call me on the given phone number or leave me a
              message using the message box on your right, If you wish to hire
              me you can download my CV here:{" "}
              <a style={{ color: "#01d293 " }} href="#">
                Download CV
              </a>
            </p>
            <ul className={st.contact__info__list}>
              <li className={st.info__item}>
                <span>
                  <i className="ri-map-pin-2-line"></i>
                </span>
                <span>
                  <p>New Delhi, India</p>
                </span>
              </li>
              <li className={st.info__item}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <span>
                  <p>
                    <a
                      className="contactmeacnhor"
                      href="mailto:harpreetsinghsodi152@gmail.com"
                    >
                      harpreetsinghsodi152@gmail.com
                    </a>
                  </p>
                </span>
              </li>
              <li className={st.info__item}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <span>
                  <p>
                    <a className="contactmeacnhor" href="tel:+919818275371">
                      +919818275371
                    </a>
                  </p>
                </span>
              </li>
            </ul>
            <div className={st.social__links}>
              <a
              rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/harpreet-singh-a903a3170/"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a rel="noreferrer" target="_blank" href="https://github.com/heisenpreet">
                <i className="ri-github-fill"></i>
              </a>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
