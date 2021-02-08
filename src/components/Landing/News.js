import React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import SlideUp from "../common/SlideUp.js";
import Img from "gatsby-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/news.scss";

// Carousel Settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const News = () => {
  const [currentNewsContent, changeNewsContent] = React.useState(null);
  const [currentNewsTitle, changeNewsTitle] = React.useState(null);
  const [carousel, setCarousel] = React.useState();

  // Carousel Functions
  function nextSlide() {
    carousel.slickNext();
  }
  function previousSlide() {
    carousel.slickPrev();
  }

  const queryResults = useStaticQuery(
    graphql`
      query MyQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/src/pages/news/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                order
                title
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    `
  );
  let allNews = queryResults.allMarkdownRemark.edges;
  allNews.sort((a, b) => (a.node.frontmatter.order > b.node.frontmatter.order) ? 1 : -1)

  console.log(allNews);

  return (
    <div className="news">
      <button
        onClick={previousSlide}
        className="prev-carousel-btn"
        id="carousel-btn"
      >
        <svg
          className="left-arrow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM24 10.5L2 10.5V13.5L24 13.5V10.5Z"
            fill="#999999"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="next-carousel-btn"
        id="carousel-btn"
      >
        <svg
          className="right-arrow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM24 10.5L2 10.5V13.5L24 13.5V10.5Z"
            fill="#999999"
          />
        </svg>
      </button>

      <h1>News</h1>
      <p>See what’s going on in our chapter</p>

      {/* Carousel Slider */}
      <Slider
        asNavFor={carousel}
        ref={(slider) => setCarousel(slider)}
        {...settings}
      >
        {allNews.map((news, index) => (
          <div
            className="news-slide"
            onClick={() => {
              navigate(news.node.fields.slug);
            }}
            key={index}
          >
            <Img
              fluid={news.node.frontmatter.image.childImageSharp.fluid}
              alt="News Image"
            />
            <div className="news-text">
              <h2>{news.node.frontmatter.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
