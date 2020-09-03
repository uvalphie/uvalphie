import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const TopSection = () => {
  const  site = useStaticQuery(
    graphql`query MyQuery {
        allMarkdownRemark(filter: {}) {
          nodes {
            frontmatter {
              title
              description
              header
            }
          }
        }
      }
    `);
  console.log({ site });
  return <header>HELLO</header>;
};

export default TopSection;
