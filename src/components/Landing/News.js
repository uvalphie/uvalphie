import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Carousel } from "react-responsive-carousel";
import SlideUp from "../common/SlideUp.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./css/news.scss";

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

  return (
    <div className="news">
      {slideIsOpen ? <SlideUp slideDown={closeSlide} /> : <div></div>}
      <h1>News</h1>
      <Carousel>
        {allNews.map((news) => (
          <div onClick={showSlide}>
            {/* <button onClick={showSlide}>OPEN</button> */}
            <img src={news.image.childImageSharp.fluid.src} alt="News Image" />
            <div class="news-text">
              <h2>{news.title}</h2>
              {/* <p>{news.description}</p> */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default News;
