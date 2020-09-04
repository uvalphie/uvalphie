import React from "react";
import "./css/navbar.scss";
import { Link } from "gatsby";

const Navbar = () => {
  const [isMenuToggled, toggleMenu] = React.useState(false);
  const [currentButtonName, changeCurrentBtn] = React.useState("Home");

  function changeButton(btnName) {
    changeCurrentBtn(btnName);
    toggleMenu(!isMenuToggled);
  }

  return (
    <nav>
      {isMenuToggled ? (
        <div class="hamburger-menu" id="active">
          <a role="button" onClick={() => toggleMenu(false)}>Home</a>
          <Link to="/about/" id="link2" activeStyle={{ color: "red" }}>
            About
          </Link>
          <Link to="/philantrophy/" id="link3" activeStyle={{ color: "red" }}>
            Philantrophy
          </Link>
          <Link to="/brothers/"  id="link4" activeStyle={{ color: "red" }}>
            Brothers
          </Link>
        </div>
      ) : (
        <div class="hamburger-menu">
          <a role="button" onClick={() => toggleMenu(true)}>{currentButtonName}</a>
          <a id="filler">Philantrophy</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
