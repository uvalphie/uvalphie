import React from "react";
import "./css/slideup.scss";

const SlideUp = ({ slideDown, information, previousPage, nextPage }) => {
  function createMarkup(markup) {
    return { __html: markup };
  }

  return (
    <div className="slide-up">
      <div className="content">
        <button className="close-btn" onClick={slideDown}>Close Menu</button>
        <div className="content-markup" dangerouslySetInnerHTML={createMarkup(information)} />
      </div>
    </div>
  );
};

export default SlideUp;
