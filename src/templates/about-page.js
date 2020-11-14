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
      <div id="about">
        <TopSection queryResults={queryResults} circle="true" />
        <MidSection />
      </div>
    </Layout>
  );
};

export default AboutPage;
