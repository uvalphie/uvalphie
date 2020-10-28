import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./css/chairs.scss";

const Chairs = () => {
  const queryResults = useStaticQuery(
    graphql`
      query {
        markdownRemark(
          fileAbsolutePath: { regex: "/brothers/chair-positions.md/" }
        ) {
          frontmatter {
            position {
              position_title
              position_holder
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <section class="chairs" id="subsection">
      <h2 className="center-align"><span>Chair Positions</span></h2>
      <div class="image-container">
        <div class="mini-decorator" id="circle1"></div>
        <div class="mini-decorator" id="circle2"></div>
        <div class="mini-decorator" id="circle3"></div>
        <div class="image">
          <div class="person">
            {/* <img src="https://placekitten.com/200/286" /> */}
          </div>
          <div class="background">
            {/* <img src="https://placekitten.com/408/287" /> */}
          </div>
        </div>
      </div>
      <h3>Position</h3>
      <p>Position Holder</p>
    </section>
  );
};

export default Chairs;
