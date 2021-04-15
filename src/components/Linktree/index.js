import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./css/index.scss";

const Linktree = () => {
  const queryResults = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/linktree/links/" }) {
          frontmatter {
            link {
              title
              link
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
      }
    `
  );
  let links = queryResults.markdownRemark.frontmatter.link;
  console.log(links);
  console.log(links[0]);

  return (
    <div className="linktree-page">
      <h1>This is the Linktree component found in /components/Linktree</h1>

      {links.map((link, index) => (
        <p>{link.title}</p>
      ))}
    </div>
  );
};

export default Linktree;

// Guide******

// Setting up a new page
//  1. In /templates, make a ____-page.js file. 
//  2. In /pages, make a folder + index.md file with the path. This is how gatsby creates/connects the URI for linktree
//     e.g. uvalphie.com/linktree to the site

// Setting up CMS
//  1. Create a new section in /static/admin/config.yml . 
//     This  is where you specify what fields in the admin dashboard you want for a section
//  2. Make sure the section you created is in gatsby-config.js with gatsby-source-filesysten .
//     This is how gatsby performs static queries to find data from Netlify CMS (aka the dashboard).
// 
//  **NOTE: Whenever someone accesses ____.com/admin and adds information, that information is written into 
//          an .md file. Where can you find this .md file? You specified it in /static/admin/config.yml

// Querying data from .md files
//   1. go to localhost:8080/__graphql
//   2. Play with the parameters on the left by trying to find the data. You could reference the way i did it
//      In other pages
//   3. Implement the query in the page you want. Be careful of static vs page queries. Static queries can
//      be used only outside of page. E.g. You can't perform static queries in /templates/linktree-page.js, only page queries
//      You could perform static queries anywhere else, e.g. this file


// OTHER NOTES: 
//   React and Gatsby like to use the className attribute instead of class. Will it cause an error? No, but it'll
//   console.log a warning and it's pretty annoying
// 
//   React and Gatsby use JSX, which is a way for Javascript data to be easily written in HTML.