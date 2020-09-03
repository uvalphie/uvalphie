import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const TopSection = () => {
  const queryResults = useStaticQuery(
    graphql`
      query MyQuery {
        markdownRemark(fileAbsolutePath: { regex: "/landing/topsection.md/" }) {
          frontmatter {
            title
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <div>
      <Img
        fluid={
          queryResults.markdownRemark.frontmatter.image.childImageSharp.fluid
        }
        alt="TopSection"
      />
    </div>
  );
};

export default TopSection;