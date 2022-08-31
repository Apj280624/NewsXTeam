import React, { useState } from "react";
import { Link } from "react-router-dom";

// my modules
import DItem from "./DItem.jsx";
import "../css/d-menu.css";
import { categoryDetails, countryDetails } from "../utilities/Vars.js";

/* 
props: title, items array of objects, newsloader function from the top parent
*/

function DMenu(props) {
  const [data, setData] = useState({
    title: props.type === 1 ? "Category" : "Country",
    items: props.type === 1 ? categoryDetails : countryDetails,
  });

  return (
    <div className="dropdown btn-group">
      <button
        className="dropdown-btn btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {data.title}
      </button>

      <div
        className={
          props.type === 1
            ? "dropdown-menu dropdown-menu-right"
            : "dropdown-menu"
        }
      >
        {data.items.map((item, index) => {
          return (
            <DItem
              key={index}
              type={props.type}
              itemDetails={{ key: index, ...item }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DMenu;
