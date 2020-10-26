import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Carousel } from "react-responsive-carousel";
import SlideUp from "../common/SlideUp.js";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./css/news.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const [slideIsOpen, openSlide] = React.useState(false);
  const [currentNewsContent, changeNewsContent] = React.useState(null);

  function showNewsContent(newsContent) {
    openSlide(true);
    console.log(newsContent);
    changeNewsContent(newsContent);
  }

  function closeSlide() {
    openSlide(false);
  }

  const queryResults = useStaticQuery(
    graphql`
      query MyQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/News/" } }) {
          edges {
            node {
              id
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid {
                      src
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
  console.log(allNews)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="news">
            {/* Slide up menu that shows the menu */}
      {slideIsOpen ? (
        <SlideUp
          slideDown={closeSlide}
          content={currentNewsContent}
          contentType="NEWS"
        />
      ) : (
        <div></div>
      )}
      <h1>News</h1>
      <p>See what’s going on in our chapter</p>

      {/* Carousel Slider */}
      <Slider {...settings}>
        {allNews.map((news) => (
          <div class="news-slide" onClick={() => showNewsContent(news.node.html)}>
            {/* <button onClick={showSlide}>OPEN</button> */}
            <img src={news.node.frontmatter.image.childImageSharp.fluid.src} alt="News Image" />
            <div class="news-text">
              <h2>{news.node.frontmatter.title}</h2>
              {/* <p>{news.description}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
