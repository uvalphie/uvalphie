import React from "react";
import Img from "gatsby-image";
import Modal from "react-modal";
import { useStaticQuery, graphql } from "gatsby";
import SocialMedia from "../SocialMedia/SocialMedia.js";
import UvalphieText from "../../img/uvalphie.svg";
import "./css/topsection.scss";

// Custom style settings for Modal
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
  const [currentModalImage, updateImage] = React.useState({});

  // Modal Functions
  function openModal(image) {
    updateImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Static Querying
  const queryResults = useStaticQuery(
    graphql`
      query {
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
    <div className="landing-section">
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Img
          className="mini-image"
          id="1"
          fluid={currentModalImage}
          alt="TopSection"
        />

        <button className="exit-modal-btn" onClick={closeModal}>
          &times;
        </button>
      </Modal>
      <div className="main-img">
        {/* White overlays that gives the top-section curve */}
        <svg
          className="mobile-overlay"
          width="585"
          height="79"
          viewBox="0 0 585 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0.568916V79H293H585V1.1804C505.182 49.8532 403.6 79 293 79C181.937 79 79.9685 49.609 0 0.568916Z"
            fill="#FEFEFE"
          />
        </svg>
        <svg
          className="desktop-svg-overlay"
          id="bottom-left"
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M250 250C111.929 250 0 138.071 0 0V250H250Z"
            fill="#FEFEFE"
          />
        </svg>
        <svg
          className="desktop-svg-overlay"
          id="top-left"
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M250 250C111.929 250 0 138.071 0 0V250H250Z"
            fill="#FEFEFE"
          />
        </svg>
        {/* Mini image within the top section */}
        <div
          className="mini-frame"
          id="frame-1"
          onClick={() =>
            openModal(
              queryResults.markdownRemark.frontmatter.mainimage.mini_image_1
                .childImageSharp.fluid
            )
          }
        >
          <Img
            className="mini-image"
            fluid={
              queryResults.markdownRemark.frontmatter.mainimage.mini_image_1
                .childImageSharp.fluid
            }
            alt="TopSection"
          />
        </div>
        {/* Mini image within the top section */}
        <div
          className="mini-frame"
          id="frame-2"
          onClick={() =>
            openModal(
              queryResults.markdownRemark.frontmatter.mainimage.mini_image_2
                .childImageSharp.fluid
            )
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
        {/* Circles behind the main image in top-section */}
        <div className="landing-decorator" id="circle1" />a
        <div className="landing-decorator" id="circle2" />
        <div className="landing-decorator" id="circle3" />
        <Img
          className="big-image"
          fluid={
            queryResults.markdownRemark.frontmatter.mainimage.background_image
              .childImageSharp.fluid
          }
          alt="TopSection"
        />
      </div>

      <div className="intro">
        <div className="container">
          {/* Profile image of the chapter */}
          <div
            onClick={() =>
              openModal(
                queryResults.markdownRemark.frontmatter.image.childImageSharp
                  .fluid
              )
            }
          >
            <Img
              className="profile-img-mobile"
              fluid={
                queryResults.markdownRemark.frontmatter.image.childImageSharp
                  .fluid
              }
              alt="TopSection"
            />
          </div>
          {/* The 'uvalphie' text */}
          <img className="uvalphie-text" id="mobile" src={UvalphieText} />
          <div className="text">
            <div
              onClick={() =>
                openModal(
                  queryResults.markdownRemark.frontmatter.image.childImageSharp
                    .fluid
                )
              }
            >
              <Img
                className="profile-img-desktop"
                id="desktop"
                fluid={
                  queryResults.markdownRemark.frontmatter.image.childImageSharp
                    .fluid
                }
                alt="TopSection"
              />
            </div>
            <div className="container">
              <p>
                University of Virginia
                <br />
                Lambda Phi Epsilon
              </p>
              <div className="social-icons" id="desktop">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="social-icons" id="mobile">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
