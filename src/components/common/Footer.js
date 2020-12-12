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
        <div className="contact">
          <p>
            Have a question? Contact us at <br />
            <span>valambdas@gmail.com</span>
          </p>
          <div className="social-icons">
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
                alt="Social Media Logo"
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
                alt="Social Media Logo"
              />
            </a>
          </div>
          <p>©2020 UVa Lambdas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
