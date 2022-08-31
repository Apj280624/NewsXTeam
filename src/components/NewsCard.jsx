import React, { useState } from "react";

//my modules
import "../css/news-card.css";
import placeholderImage from "../assets/images/newsx-placeholder.png";

function NewsCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleIsExpanded() {
    setIsExpanded((isExpanded) => !isExpanded);
  }

  if (!props.newsItem.urlToImage) {
    props.newsItem.urlToImage = placeholderImage;
  }

  return (
    <div className="news-card-div">
      <div onClick={toggleIsExpanded}>
        <img
          className="news-card-img"
          src={props.newsItem.urlToImage}
          alt={props.newsItem.title}
        />

        <p className="common-text news-card-title">{props.newsItem.title}</p>

        {!isExpanded ? (
          <p className="common-text news-card-desc">
            {props.newsItem.description}
          </p>
        ) : (
          <p className="common-text news-card-desc">{props.newsItem.content}</p>
        )}
      </div>

      {!isExpanded ? null : (
        <a href={props.newsItem.url}>
          <button className="news-card-btn">Visit source</button>
        </a>
      )}
    </div>
  );
}

export default NewsCard;
