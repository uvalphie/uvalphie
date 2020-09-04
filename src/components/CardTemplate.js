import React from "react";
import PropTypes from "prop-types";
import "./css/cardtemplate.scss";

const CardTemplate = ({ image, header, description }) => {
  return (
    <div className="card-template">
      <h2>{header}</h2>
      <p>
        {description}
      </p>
    </div>
  );
};

CardTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  description: PropTypes.string,
};

export default CardTemplate;
