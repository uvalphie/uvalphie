import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import TopSection from "../components/common/TopSection";
import MidSection from "../components/Philantrophy/MidSection";

const PhilantrophyPage = () => {
  const queryResults = useStaticQuery(
    graphql`
      {
        markdownRemark(
          fileAbsolutePath: { regex: "/philantrophy/topsection.md/" }
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
      <div id="philantrophy">
        <TopSection queryResults={queryResults} rectangle="true" />
        <MidSection />
      </div>
    </Layout>
  );
};

export default PhilantrophyPage;
