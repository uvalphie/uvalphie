import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import TopSection from "../components/About/TopSection";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  return <section></section>;
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <TopSection />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;
