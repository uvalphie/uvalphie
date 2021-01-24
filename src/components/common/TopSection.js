import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import "./css/topsection.scss";
import UvalphieText from "../../img/uvalphie-white.svg";

const TopSection = ({ queryResults, circle, rectangle, triangle }) => {
  let centerImage,
    desktopImage = null;

  try {
    centerImage =
      queryResults.markdownRemark.frontmatter.centerImage.childImageSharp.fluid;
  } catch (err) {}

  try {
    desktopImage =
      queryResults.markdownRemark.frontmatter.desktopImage.childImageSharp
        .fluid;
  } catch (err) {}

  return (
    <div className="top-section">
      <Link to="/">
        <img className="uvalphie-text" id="mobile" src={UvalphieText} />
      </Link>
      <div className="main-image">
        <div className="mobile-container">
          <Img
            className="center-img"
            fluid={centerImage}
            alt="TopSection Image"
          />

          {circle ? (
            <div className="circle-decorators">
              <div className="decorator" id="circle1" />
              <div className="decorator" id="circle2" />
              <div className="decorator" id="circle3" />
              <div className="decorator" id="circle4" />
            </div>
          ) : (
            <div />
          )}

          {rectangle ? (
            <div className="rectangles-decorators">
              <div className="decorator" id="rectangle1" />
              <div className="decorator" id="rectangle2" />
              <div className="decorator" id="rectangle3" />
              <div className="decorator" id="rectangle4" />
            </div>
          ) : (
            <div />
          )}

          {triangle ? (
            <div className="triangle-decorators">
              <div className="decorator" id="triangle1" />
              <div className="decorator" id="triangle2" />
              <div className="decorator" id="circle3" />
              <div className="decorator" id="triangle4" />
            </div>
          ) : (
            <div />
          )}

          <h3>{queryResults.markdownRemark.frontmatter.title}</h3>
        </div>
        <div className="desktop-container">
          <Img
            className="desktop-img"
            fluid={desktopImage}
            alt="TopSection Image"
          />

          <div className="desktop-decorators">
            <div className="big-circle" />
            <div className="left-circle" />
            <div className="left-rectangle" />
            <div className="small-circle" />
          </div>

          <h3>{queryResults.markdownRemark.frontmatter.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
