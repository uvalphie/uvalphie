import React from "react";
import "./css/navbar.scss";
import { Link } from "gatsby";
import HomeIcon from "../../img/home-icon.svg";
import AboutIcon from "../../img/about-icon.svg";
import BrothersIcon from "../../img/brothers-icon.svg";
import PhilantrophyIcon from "../../img/philantrophy-icon.svg";

const Navbar = () => {
  const [isMenuToggled, toggleMenu] = React.useState(false);
  const [currentButtonName, changeCurrentBtn] = React.useState("Home");

  const url = window.location.href;

  let currentPageNav = null;


  if (url.includes("about")) {
    currentPageNav = (
      <div className="current-page-btn">
        <img src={AboutIcon} />
        <span>About</span>
      </div>
    );
  } else if (url.includes("philantrophy")) {
    currentPageNav = (
      <div className="current-page-btn">
        <img src={PhilantrophyIcon} />
        <span>Philantrophy</span>
      </div>
    );
  } else if (url.includes("brothers")) {
    currentPageNav = (
      <div className="current-page-btn">
        <img src={BrothersIcon} />
        <span>Brothers</span>
      </div>
    );
  } else {
    currentPageNav = (
      <div className="current-page-btn">
        <img src={HomeIcon} />
        <span>Home</span>
      </div>
    );
  }

  return (
    <nav>
      <div className="mobile-navbar">
        {isMenuToggled ? (
          <div className="hamburger-menu" id="active">
            <Link to="/" id="link2" activeClassName="active-link">
              <img src={HomeIcon} />
              <span>Home</span>
            </Link>
            <Link to="/about/" id="link2" activeClassName="active-link">
              <img src={AboutIcon} />
              <span>About</span>
            </Link>
            <Link to="/philantrophy/" id="link3" activeClassName="active-link">
              <img src={PhilantrophyIcon} />
              <span>Philantrophy</span>
            </Link>
            <Link to="/brothers/" id="link4" activeClassName="active-link">
              <img src={BrothersIcon} />
              <span>Brothers</span>
            </Link>
          </div>
        ) : (
          // Button when not-clicked
          <div className="hamburger-menu">
            <a role="button" onClick={() => toggleMenu(true)}>
              {currentPageNav}
            </a>
            <a id="filler">Philantrophy</a>
          </div>
        )}
      </div>

      <div className="desktop-navbar">
        <div className="hamburger-menu" id="active">
          <Link to="/" activeClassName="active-link">
            <img src={HomeIcon} />
            <span>Home</span>
          </Link>
          <Link to="/about" activeClassName="active-link">
            <img src={AboutIcon} />
            <span>About</span>
          </Link>
          <Link to="/philantrophy" activeClassName="active-link">
            <img src={PhilantrophyIcon} />
            <span>Philantrophy</span>
          </Link>
          <Link to="/brothers" activeClassName="active-link">
            <img src={BrothersIcon} />
            <span>Brothers</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
