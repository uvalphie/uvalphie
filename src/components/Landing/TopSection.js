import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./css/topsection.scss";

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
    <div class="landing">
      <div class="main-img">
        <svg
          width="585"
          height="79"
          viewBox="0 0 585 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0.568916V79H293H585V1.1804C505.182 49.8532 403.6 79 293 79C181.937 79 79.9685 49.609 0 0.568916Z"
            fill="#FEFEFE"
          />
        </svg>
      </div>
      <Img
        class="profile-img"
        fluid={
          queryResults.markdownRemark.frontmatter.image.childImageSharp.fluid
        }
        alt="TopSection"
      />
    </div>
  );
};

export default TopSection;
