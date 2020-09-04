import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Modal from "react-modal";
import "./css/topsection.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TopSection = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [currentModalImage] = React.useState("");

  function openModal() {
    setIsOpen(true);
    console.log({ currentModalImage });
  }

  function closeModal() {
    setIsOpen(false);
  }

  const queryResults = useStaticQuery(
    graphql`
      query MyQuery {
        markdownRemark(fileAbsolutePath: { regex: "/landing/topsection.md/" }) {
          frontmatter {
            title
            description
            mainimage {
              background_image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
            mainimage {
              mini_image_1 {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
            mainimage {
              mini_image_2 {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
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
    `
  );
  return (
    <div className="landing">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Img
          className="mini-image"
          id="1"
          fluid={
            queryResults.markdownRemark.frontmatter.mainimage.mini_image_1
              .childImageSharp.fluid
          }
          alt="TopSection"
        />
      </Modal>
      <div className="main-img">
        <svg
          width="585"
          height="79"
          viewBox="0 0 585 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0.568916V79H293H585V1.1804C505.182 49.8532 403.6 79 293 79C181.937 79 79.9685 49.609 0 0.568916Z"
            fill="#FEFEFE"
          />
        </svg>
        <div
          class="mini-frame"
          id="frame-1"
          onClick={() =>
            openModal()
            // openModal(
            //   queryResults.markdownRemark.frontmatter.mainimage.mini_image_1
            //     .childImageSharp.fluid
            // )
          }
        >
          <Img
            className="mini-image"
            id="1"
            fluid={
              queryResults.markdownRemark.frontmatter.mainimage.mini_image_1
                .childImageSharp.fluid
            }
            alt="TopSection"
          />
        </div>

{/* MINI FRAME 2--------------------------------------- */}
        <div
          class="mini-frame"
          id="frame-2"
          onClick={() =>
            openModal()
          }
        >
          <Img
            className="mini-image"
            fluid={
              queryResults.markdownRemark.frontmatter.mainimage.mini_image_2
                .childImageSharp.fluid
            }
            alt="TopSection"
          />
        </div>

        <Img
          className="profile-img"
          fluid={
            queryResults.markdownRemark.frontmatter.mainimage.background_image
              .childImageSharp.fluid
          }
          alt="TopSection"
        />
      </div>

      <div className="intro">
        <Img
          className="profile-img"
          fluid={
            queryResults.markdownRemark.frontmatter.image.childImageSharp.fluid
          }
          alt="TopSection"
        />
        <h1>{queryResults.markdownRemark.frontmatter.title}</h1>
        <p>{queryResults.markdownRemark.frontmatter.description}</p>
      </div>
    </div>
  );
};

export default TopSection;
