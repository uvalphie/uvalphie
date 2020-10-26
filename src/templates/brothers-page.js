import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import TopSection from "../components/common/TopSection";
import Classes from "../components/Brothers/Classes";
import Exec from "../components/Brothers/Exec";
import Chairs from "../components/Brothers/Chairs";
import "../../static/_globalvariables.scss";

const BrothersPage = () => {
  const queryResults = useStaticQuery(
    graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/brothers/topsection.md/" }) {
          frontmatter {
            title
            centerImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            rightImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            leftImage {
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
      <div id="brothers">
        <TopSection queryResults={queryResults} triangle="true" />
        <Classes />
        <Exec />
        <Chairs />
      </div>
    </Layout>
  );
};

export default BrothersPage;
