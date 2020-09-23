import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import TopSection from "../components/common/TopSection";
import MidSection from "../components/About/MidSection";
import "../../static/_globalvariables.scss";

const AboutPage = () => {
  const queryResults = useStaticQuery(
    graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/about/topsection.md/" }) {
          frontmatter {
            title
            center_image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            right_image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            left_image {
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
      <div id="about">
        <TopSection queryResults={queryResults} circle="true" />
        <MidSection />
      </div>
    </Layout>
  );
};

export default AboutPage;
