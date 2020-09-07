import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./css/news.scss"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const News = () => {
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
  console.log(allNews);

  return (
    <div className="news">
      <h1>News</h1>
      <Carousel>
        {allNews.map((news) => (
          <div>
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
