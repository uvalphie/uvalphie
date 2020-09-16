import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import TopSection from "../components/About/TopSection";
import MidSection from "../components/About/MidSection";

const AboutPage = () => {
  return (
    <Layout>
      <TopSection />
      <MidSection />
    </Layout>
  );
};

export default AboutPage;
