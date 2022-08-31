import React, { useState, useEffect } from "react";

// my modules
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Loader from "../components/Loader.jsx";
import NewsCard from "../components/NewsCard.jsx";
import "../css/home.css";
import { vars, categoryDetails, countryDetails } from "../utilities/Vars.js";
import PreferencesContext from "../utilities/PreferencesContext.js";
import {
  generateGetURL,
  generateSearchURL,
} from "../utilities/UtilityFunctions.js";

const axios = require("axios").default;

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function Home() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [preferences, setPreferences] = useState({
    categoryKey: vars.defaultCategoryKey,
    countryKey: Number(
      localStorage.getItem("countryKey")
        ? localStorage.getItem("countryKey")
        : vars.defaultCountryKey
    ),
  });

  // these change function will used by descendants to change context
  function changeCategoryKey(newKey) {
    setPreferences({ categoryKey: newKey, countryKey: preferences.countryKey });
  }

  function changeCountryKey(newKey) {
    localStorage.setItem("countryKey", newKey);
    setPreferences({
      categoryKey: preferences.categoryKey,
      countryKey: newKey,
    });
  }

  async function requestServerToGetNews(URL) {
    setIsLoading(true);

    try {
      const response = await axios.get(URL);
      // console.log(response.data);

      setNews(response.data);
      window.scrollTo(0, 0);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      // console.log("error");
      setIsLoading(false);
    }
  }

  async function getNews(categoryKey, countryKey) {
    const category = categoryDetails[categoryKey].code;
    const country = countryDetails[countryKey].code;
    const URL = generateGetURL(category, country);

    requestServerToGetNews(URL);
  }

  async function searchNews(keyword) {
    keyword = keyword.trim(); // remove spaces from end
    keyword = keyword.replace(/ /g, "+"); // replace all spaces with a plus
    const URL = generateSearchURL(keyword);

    requestServerToGetNews(URL);
  }

  useEffect(() => {
    getNews(preferences.categoryKey, preferences.countryKey);

    // console.log("effect called");
  }, [preferences]);

  const loader = (
    <div className="loader-div">
      <Loader />
    </div>
  );

  const NewsComponent = (
    <div className="news-div">
      <div className="row">
        {news.map((newsItem, index) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-12 news-item-div"
              key={index}
            >
              <NewsCard newsItem={newsItem} />
            </div>
          );
        })}
      </div>
    </div>
  );

  const element =
    news.length === 0 ? (
      <p className="nothing-text">{vars.nothingText}</p>
    ) : (
      NewsComponent
    );

  return (
    <div>
      <PreferencesContext.Provider
        value={{
          categoryDetails: {
            key: preferences.categoryKey,
            change: changeCategoryKey,
          },
          countryDetails: {
            key: preferences.countryKey,
            change: changeCountryKey,
          },
          getNews: getNews,
          searchNews: searchNews,
        }}
      >
        <Navbar />

        {isLoading ? loader : element}

        <Footer />
      </PreferencesContext.Provider>
    </div>
  );
}

export default Home;
