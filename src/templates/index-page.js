import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

//Template variable that helps for organization
export const IndexPageTemplate = ({
  image,
  title,
  description,
}) => (
  <div>
    <h1>HELLO</h1>
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}
// ***WHAT ACTUALLY GETS RENDERED
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate />
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

// Here's where we fetch the data from our admin page
// export const pageQuery = graphql`
//   query IndexPageTemplate {
//   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/landing/.*\\.md$/"}}) {
//     nodes {
//       frontmatter {
//         title
//         description
//         header
//       }
//     }
//   }
// }

// `;
