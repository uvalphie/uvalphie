import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PositionCarousel from './PositionCarousel';

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
                    ...GatsbyImageSharpFluid
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
    <section className="exec" id="subsection">
        <h2 className="header">
          <span>Executive Board</span>
        </h2>
      <PositionCarousel data={positionData} carouselAlignment="right" />
    </section>
  );
};

export default Exec;