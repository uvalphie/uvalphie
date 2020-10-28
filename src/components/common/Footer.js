import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./css/footer.scss";

const Footer = () => {
  const socialMediaQuery = useStaticQuery(
    graphql`
      query {
        markdownRemark(
          fileAbsolutePath: { regex: "/socialmedia/darklogos.md/" }
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
    <footer>
      <div className="container">
        <div className="social-media">
          <div>
            <p>
              <span>
                Want to see more? <br></br>Check us out on social media!{" "}
                <br></br>
              </span>
              <span>©2020 UVa Lambdas</span>
            </p>
          </div>
          <div>
            <a
              href={
                socialMediaQuery.markdownRemark.frontmatter.platform1
                  .website_link
              }
              target="_blank"
            >
              <img
                src={
                  socialMediaQuery.markdownRemark.frontmatter.platform1.logo
                    .publicURL
                }
              />
            </a>

            <a
              href={
                socialMediaQuery.markdownRemark.frontmatter.platform2
                  .website_link
              }
              target="_blank"
            >
              <img
                src={
                  socialMediaQuery.markdownRemark.frontmatter.platform2.logo
                    .publicURL
                }
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
