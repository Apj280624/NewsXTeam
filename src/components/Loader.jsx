import React from "react";
import { SpinnerInfinity } from "spinners-react";

// my modules
import { vars } from "../utilities/Vars.js";

function Loader() {
  return (
    <SpinnerInfinity
      size="100%"
      color={vars.loaderPrimaryColor}
      secondaryColor={vars.loaderSecondaryColor}
    />
  );
}

export default Loader;
