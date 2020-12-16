import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import TopSection from "../components/common/TopSection";
import MidSection from "../components/Brothers/MidSection";

const BrothersPage = () => {
  const queryResults = useStaticQuery(
    graphql`
      {
        markdownRemark(
          fileAbsolutePath: { regex: "/brothers/topsection.md/" }
        ) {
          frontmatter {
            title
            centerImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
        
            desktopImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <div id="brothers" class="section">
        <TopSection queryResults={queryResults} triangle="true" />
        <MidSection />
      </div>
    </Layout>
  );
};

export default BrothersPage;
