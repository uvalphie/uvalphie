import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./css/midsection.scss";
import Fade from "react-reveal/Fade";

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
  console.log(data);

  return (
    <div className="mid-section">
      <div>
        {data.map((sectionData) => (
          <div>
            {sectionData.order % 2 != 0 ? (
              <Fade left>
                <div className="card-left-align">
                  <div class="img-decorator">
                    <Img
                      fluid={sectionData.image.childImageSharp.fluid}
                      alt="Section Image"
                    />
                    <div class="decorator-box" id="box1" />
                    <div class="decorator-box" id="box2" />
                    <div class="decorator-circle" id="circle1" />
                    <div class="decorator-circle" id="circle2" />
                    <div class="decorator-circle" id="circle3" />
                    <div class="decorator-circle" id="circle4" />
                  </div>

                  <h2>{sectionData.header}</h2>
                  <p>{sectionData.description}</p>
                </div>
              </Fade>
            ) : (
              <Fade right>
                <div className="card-right-align">
                  <div class="img-decorator">
                    <Img
                      fluid={sectionData.image.childImageSharp.fluid}
                      alt="Section Image"
                    />
                    <div class="decorator-box" id="box1" />
                    <div class="decorator-box" id="box2" />
                    <div class="decorator-box" id="box3" />
                    <div class="decorator-box" id="box4" />
                    <div class="decorator-box" id="box5" />
                  </div>

                  <h2>{sectionData.header}</h2>
                  <p>{sectionData.description}</p>
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
