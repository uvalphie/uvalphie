import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./css/midsection.scss";

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
                childImageSharp {
                  fluid {
                    srcSet
                  }
                }
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
    data.push(queryResults.markdownRemark.frontmatter.midsection[parseInt(query)]);
  }
  data.sort((a, b) => a.order - b.order);
  console.log(data);

  return (
    <div className="mid-section">
      {/* <div>
        {data.map((sectionData) => (
          <div>
            {sectionData.order % 2 != 0 ? (
              <div className="card-left-align">
                <div class="img-decorator">
                  <Img
                    fluid={sectionData.image.childImageSharp.fluid}
                    alt="Section Image"
                  />
                  <div class="decorator-box" />
                  <div class="decorator-box2" />
                  <div class="decorator-circle" />
                </div>

                <h2>{sectionData.header}</h2>
                <p>{sectionData.description}</p>
              </div>
            ) : (
              <div className="card-right-align">
                <div class="img-decorator">
                  <Img
                    fluid={sectionData.image.childImageSharp.fluid}
                    alt="Section Image"
                  />
                  <div class="decorator-box" />
                  <div class="decorator-box2" />
                  <div class="decorator-circle-outline" />
                </div>

                <h2>{sectionData.header}</h2>
                <p>{sectionData.description}</p>
              </div>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MidSection;
