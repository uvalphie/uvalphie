import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./css/position-carousel.scss";
import Img from "gatsby-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Exec = () => {
  const [currentPositionTitle, updatePositionTitle] = React.useState("");
  const [currentPositionHolder, updatePositionHolder] = React.useState("");

  function updatePosition(current) {
    console.log(current);
    updatePositionTitle(positionData[current].position_title);
    updatePositionHolder(positionData[current].position_holder);
    console.log(currentPositionTitle);
  }

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => updatePosition(current),
  };

  console.log(positionData);
  return (
    <section class="positions" id="subsection">
      <h2 className="center-align">
        <span>Executive Board</span>
      </h2>

      <div class="container">
        <Slider {...settings}>
          {positionData.map((position) => (
            <div class="person">
              <div class="mini-decorator" id="circle1"></div>
              <div class="mini-decorator" id="circle2"></div>
              <div class="mini-decorator" id="circle3"></div>
              <Img
                fluid={position.image.childImageSharp.fluid}
                alt="TopSection Image"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="carousel-bottom">
        <button>L</button>
        {currentPositionHolder == "" ? (
          <div className="position-text">
            <h3>{positionData[0].position_title}</h3>
            <p>{positionData[0].position_holder}</p>
          </div>
        ) : (
          <div className="position-text">
            <h3>{currentPositionTitle}</h3>
            <p>{currentPositionHolder}</p>
          </div>
        )}
        <button>R</button>
      </div>
    </section>
  );
};

export default Exec;
