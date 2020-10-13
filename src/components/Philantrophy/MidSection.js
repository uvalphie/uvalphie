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
  console.log(data[0].image.publicURL);

  return (
    <div className="mid-section" id="philantrophy">
      <div>
        {data.map((sectionData) => (
          <div>
            <div className="flip-card" id="mobile">
              <div class="front-side">
                <div class="container">
                  <img src={sectionData.image.publicURL} alt="Section Image" />
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
