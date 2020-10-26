import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./css/midsection.scss";

const MidSection = () => {
  const queryResults = useStaticQuery(
    graphql`
      query {
        markdownRemark(
          fileAbsolutePath: { regex: "/philantrophy/midsection.md/" }
        ) {
          frontmatter {
            midsection {
              description
              order
              title
              image {
                publicURL
              }
              logo {
                publicURL
              }
            }
          }
        }
      }
    `
  );

  // Sort the data based off order
  let data = [];
  for (var query in queryResults.markdownRemark.frontmatter.midsection) {
    data.push(
      queryResults.markdownRemark.frontmatter.midsection[parseInt(query)]
    );
  }
  data.sort((a, b) => a.order - b.order);

  return (
    <div className="mid-section" id="philantrophy">
      <div>
        {data.map((sectionData) => (
          <div>
            <div className="flip-card" id="mobile" >
              <div class="front-side" style={{ backgroundImage: "url(" + sectionData.image.publicURL + ")"}}>
                <div class="overlay" />
                <div class="container">
                  <img src={sectionData.logo.publicURL} alt="Section Image" />
                  <h2>
                    <span>{sectionData.title}</span>
                  </h2>
                </div>
              </div>

              <div className="back-side">
                <div class="container">
                  <h2>
                    <span>{sectionData.title}</span>
                  </h2>
                  <p>{sectionData.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidSection;
