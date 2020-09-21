import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./css/topsection.scss";

const TopSection = () => {
  const queryResults = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/about/topsection.md/" }) {
          frontmatter {
            title
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
    <div className="top-section" id="about">
      <div className="main-image" id="about">
        <Img
          className="left-img"
          fluid={
            queryResults.markdownRemark.frontmatter.left_image.childImageSharp
              .fluid
          }
          alt="TopSection Image"
        />
        <Img
          className="right-img"
          fluid={
            queryResults.markdownRemark.frontmatter.right_image.childImageSharp
              .fluid
          }
          alt="TopSection Image"
        />
        <div class="decorator" id="circle1" />
        <div class="decorator" id="circle2" />
        <div class="decorator" id="circle3" />
        <div class="decorator" id="circle4" />
        <h3>{queryResults.markdownRemark.frontmatter.title}</h3>
      </div>
    </div>
  );
};

export default TopSection;
