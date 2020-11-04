import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import "./css/midsection.scss";

const MidSection = () => {
  const queryResults = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/landing/midsection/" } }
        ) {
          edges {
            node {
              frontmatter {
                header
                description
                order
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
      }
    `
  );

  // Sort the data based off order
  let data = [];
  for (var query in queryResults.allMarkdownRemark.edges) {
    data.push(
      queryResults.allMarkdownRemark.edges[parseInt(query)].node.frontmatter
    );
  }
  data.sort((a, b) => a.order - b.order);

  return (
    <div className="mid-section" id="landing">
      <div>
        {data.map((sectionData) => (
          <div key={sectionData.order}>
            {sectionData.order % 2 != 0 ? (
              <div className="card-left-align">
                {/* Cards that are Left Aligned */}
                <Fade left>
                  <div className="img-decorator">
                    <Img
                      fluid={sectionData.image.childImageSharp.fluid}
                      alt="Section Image"
                    />
                    <div className="decorator-box" id="box1" />
                    <div className="decorator-box" id="box2" />
                    <div className="decorator-circle" id="circle1" />
                    <div className="decorator-circle" id="circle2" />
                    <div className="decorator-circle" id="circle3" />
                    <div className="decorator-circle" id="circle4" />
                  </div>

                  <div className="text">
                    <h2>
                      <span>{sectionData.header}</span>
                    </h2>
                    <p>{sectionData.description}</p>
                  </div>
                </Fade>
              </div>
            ) : (
              // Cards that are right aligned
              <div className="card-right-align">
                <Fade right>
                  <div className="img-decorator">
                    <Img
                      fluid={sectionData.image.childImageSharp.fluid}
                      alt="Section Image"
                    />
                    <div className="decorator-box" id="box1" />
                    <div className="decorator-box" id="box2" />
                    <div className="decorator-box" id="box3" />
                    <div className="decorator-box" id="box4" />
                    <div className="decorator-box" id="box5" />
                  </div>
                  <div className="text">
                    <h2>
                      <span>{sectionData.header}</span>
                    </h2>
                    <p>{sectionData.description}</p>
                  </div>
                </Fade>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidSection;
