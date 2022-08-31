import { SERVER_ORIGIN } from "./Vars.js";

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function generateGetURL(category, country) {
  // console.log(category, country);

  let URL =
    SERVER_ORIGIN +
    "/api/top-headlines/?" +
    "category=" +
    category +
    "&" +
    "country=" +
    country;
  return URL;
}

function generateSearchURL(keyword) {
  let URL = SERVER_ORIGIN + "/api/search/?" + "keyword=" + keyword;
  return URL;
}

export { generateGetURL, generateSearchURL };
