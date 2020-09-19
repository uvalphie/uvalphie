import React from "react";
import "./css/slideup.scss";
import { graphql, useStaticQuery } from "gatsby";

const SlideUp = ({slideDown, information}) => {
  return (
    <div class="slide-up">
      {/* <div class="close">GODOWN</div> */}
      <div class="content">
        <button onClick={slideDown}>Close Menu</button>
        {information}
      </div>
    </div>
  );
};

export default SlideUp;
