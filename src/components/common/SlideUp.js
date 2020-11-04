import React from "react";
import "./css/slideup.scss";

const SlideUp = ({ slideDown, content, contentType, title }) => {
  // Transform markup to html
  function createMarkup(markup) {
    return { __html: markup };
  }

  return (
    <div className="slide-up">
      <div
        className="content"
        id={contentType === "NEWS" ? "news-content" : "class-content"}
      >
        <button className="close-btn" onClick={slideDown}>
          <svg
            width="31"
            height="11"
            viewBox="0 0 31 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-1"
              x2="18.0278"
              y2="-1"
              transform="matrix(0.83205 0.5547 -0.923455 0.383707 0 1)"
              stroke="#FEFEFE"
              stroke-width="2"
            />
            <line
              y1="-1"
              x2="18.0278"
              y2="-1"
              transform="matrix(-0.83205 0.5547 0.923455 0.383707 31 1)"
              stroke="#FEFEFE"
              stroke-width="2"
            />
          </svg>
        </button>
        {contentType === "NEWS" ? (
          <div className="content-markup" id="news">
            <h1 className="news-title">{title}</h1>
            <div dangerouslySetInnerHTML={createMarkup(content)}></div>
            <button className="close-news-btn" onClick={slideDown}>Exit News</button>
          </div>
        ) : (
          <div
            className="content-markup"
            id="class"
            dangerouslySetInnerHTML={createMarkup(content)}
          />
        )}
      </div>
    </div>
  );
};

export default SlideUp;
