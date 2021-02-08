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

  const isBrowser = typeof window !== `undefined`;
  let currentPageNav = null;

  if (isBrowser) {
    const url = window.location.href;

    if (url.includes("about")) {
      currentPageNav = (
        <div className="current-page-btn">
          <img src={AboutIcon} alt="About Icon"/>
          <span>About</span>
        </div>
      );
    } else if (url.includes("philantrophy")) {
      currentPageNav = (
        <div className="current-page-btn">
          <img src={PhilantrophyIcon} alt="Philantrophy Icon"/>
          <span>Philantrophy</span>
        </div>
      );
    } else if (url.includes("brothers")) {
      currentPageNav = (
        <div className="current-page-btn">
          <img src={BrothersIcon} alt="Brothers Icon"/>
          <span>Brothers</span>
        </div>
      );
    } else {
      currentPageNav = (
        <div className="current-page-btn">
          <img src={HomeIcon} alt="Home Icon"/>
          <span>Home</span>
        </div>
      );
    }
  }
  return (
    <nav>
      <div className="mobile-navbar">
        {isMenuToggled ? (
          <div className="hamburger-menu" id="active">
            <Link to="/" id="link2" activeClassName="active-link">
              <img src={HomeIcon} alt="Home Icon"/>
              <span>Home</span>
            </Link>
            <Link to="/about/" id="link2" activeClassName="active-link">
              <img src={AboutIcon} alt="About Icon"/>
              <span>About</span>
            </Link>
            <Link to="/philantrophy/" id="link3" activeClassName="active-link">
              <img src={PhilantrophyIcon} alt="Philantrophy Icon"/>
              <span>Philantrophy</span>
            </Link>
            <Link to="/brothers/" id="link4" activeClassName="active-link">
              <img src={BrothersIcon} alt="Brothers Icon"/>
              <span>Brothers</span>
            </Link>
            <button
              className="exit-navbar-btn"
              onClick={() => toggleMenu(false)}
            >
              &times;
            </button>
          </div>
        ) : (
          // Button when not-clicked
          <div className="hamburger-menu">
            <a role="button" onClick={() => toggleMenu(true)}>
              {currentPageNav}
            </a>
            <a role="button" id="filler">Philantrophy</a>
          </div>
        )}
      </div>

      <div className="desktop-navbar">
        <div className="hamburger-menu" id="active">
          <Link to="/" activeClassName="active-link">
            <img src={HomeIcon} alt="Home Icon"/>
            <span>Home</span>
          </Link>
          <Link to="/about" activeClassName="active-link">
            <img src={AboutIcon} alt="About Icon"/>
            <span>About</span>
          </Link>
          <Link to="/philantrophy" activeClassName="active-link">
            <img src={PhilantrophyIcon} alt="Philantrophy Icon"/>
            <span>Philantrophy</span>
          </Link>
          <Link to="/brothers" activeClassName="active-link">
            <img src={BrothersIcon} alt="Brothers Icon"/>
            <span>Brothers</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
