import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CardTemplate from "../CardTemplate.js";

const MidSection = () => {
  return (
    <div className="mid-section">
      <CardTemplate header="ohioho" description="oihoih"/>
    </div>
  );
};

export default MidSection;
