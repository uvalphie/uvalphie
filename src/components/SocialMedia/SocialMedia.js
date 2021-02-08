import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import "./css/topsection.scss";

const SocialMedia = () => {
  const socialMediaQuery = useStaticQuery(
    graphql`
      query {
        markdownRemark(
          fileAbsolutePath: { regex: "/socialmedia/lightlogos.md/" }
        ) {
          frontmatter {
            platform2 {
              website_link
              logo {
                publicURL
              }
            }
            platform1 {
              website_link
              logo {
                publicURL
              }
            }
          }
        }
      }
    `
  );

  return (
    <div className="social-media">
      <a
        href={
          socialMediaQuery.markdownRemark.frontmatter.platform1.website_link
        }
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={
            socialMediaQuery.markdownRemark.frontmatter.platform1.logo.publicURL
          }
          alt="Social Media Logo"
        />
      </a>

      <a
        href={
          socialMediaQuery.markdownRemark.frontmatter.platform2.website_link
        }
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={
            socialMediaQuery.markdownRemark.frontmatter.platform2.logo.publicURL
          }
          alt="Social Media Logo"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
