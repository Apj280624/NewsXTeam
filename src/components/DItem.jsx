import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// my modules
import PreferencesContext from "../utilities/PreferencesContext.js";
import { vars } from "../utilities/Vars.js";
import "../css/d-item.css";

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function DItem(props) {
  const { categoryDetails, countryDetails } = useContext(PreferencesContext);
  const contextDetails = props.type === 1 ? categoryDetails : countryDetails;

  function handleItemClick() {
    contextDetails.change(props.itemDetails.key);
  }

  return (
    <p className="dropdown-item" onClick={handleItemClick}>
      {props.itemDetails.name}{" "}
      {props.itemDetails.key === contextDetails.key ? (
        <span style={{ color: vars.loaderPrimaryColor }}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
      ) : null}
    </p>
  );
}

export default DItem;
