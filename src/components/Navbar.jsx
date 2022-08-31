import React, { useState } from "react";
import { Link } from "react-router-dom";

// my modules
import SearchBar from "./Searchbar.jsx";
import DMenu from "./DMenu.jsx";
import "../css/navbar.css";
import { vars, routes } from "../utilities/Vars.js";

function Navbar(props) {
  const [isScrolled, setIsScrolled] = useState(false);

  function changeNavbarStyle() {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  window.addEventListener("scroll", changeNavbarStyle);

  const inlineStyle1 = {
    background: `linear-gradient(${vars.gradient}, transparent)`,
  };

  const inlineStyle2 = {
    background: "transparent",
  };

  return (
    <div>
      <nav
        className="navbar-custom navbar navbar-expand-lg navbar-dark fixed-top"
        style={isScrolled ? inlineStyle1 : inlineStyle2}
      >
        <div className="container-fluid">
          <Link className="custom-brand navbar-brand" to={routes.home}>
            <p className="brand-name">{vars.brandName}</p>
          </Link>
        </div>

        <div className="dmenu-div">
          <DMenu type={2} />
          <DMenu type={1} />
        </div>

        <SearchBar />
      </nav>
    </div>
  );
}

export default Navbar;
