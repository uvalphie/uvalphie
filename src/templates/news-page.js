import React from "react";
import Layout from "../components/Layout";
import { navigate } from "gatsby";
import "./css/news-page.scss";

const NewsPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post);

  return (
    <Layout>
      <nav className="news-navbar">
        <button
          className="exit-news-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          &times;
        </button>
      </nav>
      <div className="article-container">
        <h1 className="article-header">{post.frontmatter.title}</h1>
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: `<div> ${post.html} </div>` }}
        ></div>
        <button
          className="exit-news-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Exit News
        </button>
      </div>
    </Layout>
  );
};

export default NewsPage;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
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
`;
