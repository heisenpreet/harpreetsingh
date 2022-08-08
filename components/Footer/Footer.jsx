import React from "react";
import { Container, Row, Col } from "reactstrap";
import st from "./footer.module.css";
import Link from "next/link";
import { NAV__LINK } from "../data/navLinks";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          {/* ===============footer top================ */}
          <Col lg="6" className={st.footer__top}>
            <div className={st.nav__menu}>
              {NAV__LINK.map((item, index) => (
                <Link key={index} href={item.path}>
                  {item.display}
                </Link>
              ))}
            </div>
          </Col>
          <Col lg="6" className={st.footer__top}>
            <div className={st.footer__creator}>
              <h6>Created by Harpreet</h6>
            </div>
          </Col>
          {/* =================footer bottom=========== */}
          <Col lg="12">
            <div className={st.footer__copyright}>
              <p>
                &copy; Copyright{year} - Developed by Harpreet Singh. All rights
                reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
