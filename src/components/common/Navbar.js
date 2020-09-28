import React from "react";
import "./css/navbar.scss";
import { Link } from "gatsby";

const Navbar = () => {
  const [isMenuToggled, toggleMenu] = React.useState(false);
  const [currentButtonName, changeCurrentBtn] = React.useState("Home");

  function changeButton(btnName) {
    changeCurrentBtn(btnName);
    console.log("CHANGING TO: ", btnName);
    toggleMenu(!isMenuToggled);
  }

  return (
    <nav>
      <div className="mobile-navbar">
        {isMenuToggled ? (
          <div className="hamburger-menu" id="active">
            <Link to="/" id="link2" activeClassName="active-link">
              Home
            </Link>
            <Link to="/about/" id="link2" activeClassName="active-link" onClick={() => changeButton("About")}>
              About
            </Link>
            <Link to="/philantrophy/" id="link3" activeClassName="active-link">
              Philantrophy
            </Link>
            <Link to="/brothers/" id="link4" activeClassName="active-link">
              Brothers
            </Link>
          </div>
        ) : (
          <div className="hamburger-menu">
            <a role="button" onClick={() => toggleMenu(true)}>
              {currentButtonName}
            </a>
            <a id="filler">Philantrophy</a>
          </div>
        )}
      </div>

      <div className="desktop-navbar">
        <div className="hamburger-menu" id="active">
          <Link to="/" activeClassName="active-link">
            Home
          </Link>
          <Link to="/about" activeClassName="active-link">
            About
          </Link>
          <Link to="/philantrophy" activeClassName="active-link">
            Philantrophy
          </Link>
          <Link to="/brothers" activeClassName="active-link">
            Brothers
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
