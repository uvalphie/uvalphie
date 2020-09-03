import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import TopSection from "../components/Landing/TopSection";


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <TopSection/>
    </Layout>
  );
};

// Always good to define your props
IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;
