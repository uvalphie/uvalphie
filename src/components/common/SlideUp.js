import React from "react";
import "./css/slideup.scss";

const SlideUp = ({
  slideDown,
  content,
  contentType,
  previousPage,
  nextPage,
}) => {
  function createMarkup(markup) {
    return { __html: markup };
  }

  return (
    <div className="slide-up">
      <div className="content" id={contentType === "NEWS"? 'news-content' : 'class-content'} >
        <button className="close-btn" onClick={slideDown}>
          Close Menu
        </button>
        {
          (contentType === "NEWS" ? (
            <div
              className="content-markup"
              id="news"
              dangerouslySetInnerHTML={createMarkup(content)}
            />
          ) : (
            <div
              className="content-markup"
              id="class"
              dangerouslySetInnerHTML={createMarkup(content)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default SlideUp;
