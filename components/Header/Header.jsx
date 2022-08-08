import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { Container } from "reactstrap";
import st from "./header.module.css";
import Link from "next/link";
import { NAV__LINK } from "../data/navLinks";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  let debounce = useRef(false);
  const headerFX = useCallback(() => {
    if (debounce) {
      clearTimeout(debounce);
    }
    debounce = setTimeout(() => {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        headerRef.current.classList.add(`${st.header__shrink}`);
      } else {
        headerRef.current.classList.remove(`${st.header__shrink}`);
      }
    }, 500);
  }, [headerRef]);

  useEffect(() => {
    window.addEventListener("scroll", headerFX);

    return () => {
      window.removeEventListener("scroll", headerFX);
    };
  }, [headerFX]);

  const toggleMenu = useCallback(() => {
    menuRef.current.classList.toggle(`${st.menu__active}`);
  }, [menuRef]);

  return (
    <header className={st.header} ref={headerRef}>
      <Container>
        <div className={st.nav__wrapper}>
          {/* ==================NAV logo++++++ */}
          <div className={st.logo}>
            <h1>
              <span>Har</span>preet
            </h1>
          </div>

          {/* =============NAV MENU============== */}
          <div className={st.navigation} ref={menuRef} onClick={toggleMenu}>
            <div className={st.nav__menu}>
              {NAV__LINK.map((item, index) => (
                <Link key={index} href={item.path}>
                  {item.display}
                </Link>
              ))}
              <div className={st.nav__right}>
                <p className=" d-flex align-items-center gap-2 mb-0">
                  <i className="ri-phone-fill"></i>
                  <a href="tel:+919818275371"> +91-98 182 753 71</a>
                </p>
              </div>
            </div>
          </div>
          <span className={st.mobile__menu}>
            <i onClick={toggleMenu} className="ri-menu-3-line"></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
