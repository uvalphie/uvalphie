import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PositionCarousel from "./PositionCarousel";
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

  let positionData = queryResults.markdownRemark.frontmatter.position;

  return (
    <section class="chairs" id="subsection">
      <h2 className="header">
        <span>Chairs Positions</span>
      </h2>
      <PositionCarousel data={positionData} carouselAlignment="left" />
    </section>
  );
};

export default Chairs;
