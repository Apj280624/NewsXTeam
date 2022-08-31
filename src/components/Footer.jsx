import React from "react";
import { Link } from "react-router-dom";

// my modules
import { vars } from "../utilities/Vars.js";
import "../css/footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <p className="common bname-text">{vars.brandName}</p>

        <p className="common copyright-text">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Footer;
