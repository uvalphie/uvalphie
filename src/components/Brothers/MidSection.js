import React from "react";
import Classes from "./Classes.js";
import Exec from "./Exec.js";
import Chairs from "./Chairs.js";
import "./css/midsection.scss";

const MidSection = () => {
  return (
    <div className="mid-section" id="brothers">
      <Classes />
      <div className="exec-chairs">
        <Exec />
        <Chairs />
      </div>
    </div>
  );
};

export default MidSection;
