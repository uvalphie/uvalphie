import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";

const MidSection = () => {
  const queryResults = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/about/midsection.md/" }) {
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

  return (
    <div className="mid-section" id="about">
      <div>
        {data.map((sectionData) => (
          <div>
            <div className="card-center-align">
              <Fade bottom>
                <img src={sectionData.image.publicURL} alt="Section Image" />
                <div className="text">
                  <h2>
                    <span>{sectionData.title}</span>
                  </h2>
                  <p>{sectionData.description}</p>
                </div>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidSection;
