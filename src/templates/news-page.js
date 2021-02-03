import React from "react";
import Layout from "../components/Layout";
import { Link, navigate } from "gatsby";
import UvalphieText from "./img/uvalphie.svg";
import "./css/news-page.scss";

const NewsPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post);

  return (
    <Layout>
      <div class="news-page">
        <nav className="news-navbar">
          <Link to="/">
            <img className="uvalphie-text" id="mobile" src={UvalphieText} />
          </Link>
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
        </div>
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
