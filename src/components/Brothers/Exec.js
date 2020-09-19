import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./css/common.scss";
import "./css/exec.scss";

const Exec = () => {
  const queryResults = useStaticQuery(
    graphql`
      query {
        markdownRemark(
          fileAbsolutePath: { regex: "/brothers/exec-board.md/" }
        ) {
          frontmatter {
            position {
              position_holder
              position_title
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
  // console.log(queryResults.markdownRemark.frontmatter.position);
  return (
    <section class="exec-board" id="subsection">
      <h2>Executive Board</h2>
      <div class="image-container">
        <div class="mini-decorator" id="circle1"></div>
        <div class="mini-decorator" id="circle2"></div>
        <div class="mini-decorator" id="circle3"></div>
        <div class="image">
          <div class="person">
            <img src="https://placekitten.com/200/286" />
          </div>
          <div class="background">
            <img src="https://placekitten.com/408/287" />
          </div>
        </div>
      </div>
      <h3>Position</h3>
      <p>Position Holder</p>
    </section>
  );
};

export default Exec;
