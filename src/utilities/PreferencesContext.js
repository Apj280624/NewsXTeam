import { createContext } from "react";

// my modules
import { vars } from "./Vars.js";

const PreferencesContext = createContext({
  categoryDetails: { key: vars.defaultCategoryKey, change: (newKey) => {} },
  countryDetails: { key: vars.defaultCountryKey, change: (newKey) => {} },
});

export default PreferencesContext;
