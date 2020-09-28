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

  function showSlide() {
    openSlide(true);
  }

  function closeSlide() {
    openSlide(false);
  }

  const queryResults = useStaticQuery(
    graphql`
      query MyQuery {
        markdownRemark(fileAbsolutePath: { regex: "/news/news.md/" }) {
          frontmatter {
            news {
              title
              description
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  let allNews = queryResults.markdownRemark.frontmatter.news;
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
      {slideIsOpen ? <SlideUp slideDown={closeSlide} /> : <div></div>}
      <h1>News</h1>
      <p>See what’s going on in our chapter</p>

      <Slider {...settings}>
        {allNews.map((news) => (
          <div class="news-slide" onClick={showSlide}>
            {/* <button onClick={showSlide}>OPEN</button> */}
            <img src={news.image.childImageSharp.fluid.src} alt="News Image" />
            <div class="news-text">
              <h2>{news.title}</h2>
              {/* <p>{news.description}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
