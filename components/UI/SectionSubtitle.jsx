import React from "react";
import st from "../../styles/subtitle.module.css";

const SectionSubtitle = ({ subtitle }) => {
  return <h5 className={st.section__subtitle}>{subtitle}</h5>;
};

export default SectionSubtitle;
