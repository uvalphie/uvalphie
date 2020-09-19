import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./css/topsection.scss";

const TopSection = () => {
  const queryResults = useStaticQuery(
    graphql`
      query {
        markdownRemark(
          fileAbsolutePath: { regex: "/philantrophy/topsection.md/" }
        ) {
          frontmatter {
            title
            image {
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
    <div className="top-section" id="philantrophy">
      <div className="main-image">
        <Img
          className="profile-img"
          fluid={
            queryResults.markdownRemark.frontmatter.image.childImageSharp.fluid
          }
          alt="TopSection Image"
        />
        <h3>{queryResults.markdownRemark.frontmatter.title}</h3>
      </div>
    </div>
  );
};

export default TopSection;
