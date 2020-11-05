import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";
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
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
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
        {data.map((sectionData, index) => (
          <div>
            {index % 2 == 0 ? (
              <Fade bottom>
                <div className="flip-card" id="left">
                  <div className="front-side">
                    <div class="cover-img">
                      <Img
                        fluid={sectionData.image.childImageSharp.fluid}
                        alt="News Image"
                      />

                      <div className="overlay" />
                    </div>
                    <div className="container">
                      <img
                        src={sectionData.logo.publicURL}
                        alt="Section Image"
                      />
                      <h2>
                        <span>{sectionData.title}</span>
                      </h2>
                    </div>
                  </div>

                  <div className="back-side">
                    <div className="container">
                      <img
                        className="logo"
                        src={sectionData.logo.publicURL}
                        alt="Section Image"
                        id="desktop"
                      />
                      <h2>
                        <span>{sectionData.title}</span>
                      </h2>
                      <p>{sectionData.description}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ) : (
              <Fade bottom>
                <div className="flip-card" id="right">
                  <div className="front-side">
                    <div class="cover-img">
                      <Img
                        fluid={sectionData.image.childImageSharp.fluid}
                        alt="News Image"
                      />

                      <div className="overlay" />
                    </div>
                    <div className="container">
                      <img
                        src={sectionData.logo.publicURL}
                        alt="Section Image"
                      />
                      <h2>
                        <span>{sectionData.title}</span>
                      </h2>
                    </div>
                  </div>

                  <div className="back-side">
                    <div className="container">
                      <img
                        className="logo"
                        src={sectionData.logo.publicURL}
                        alt="Section Image"
                        id="desktop"
                      />
                      <h2>
                        <span>{sectionData.title}</span>
                      </h2>
                      <p>{sectionData.description}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidSection;
