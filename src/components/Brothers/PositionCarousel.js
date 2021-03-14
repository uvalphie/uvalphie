import React from "react";
import "./css/position-carousel.scss";
import Img from "gatsby-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PositionCarousel = (data, carouselAlignment) => {
  const [currentPositionTitle, updatePositionTitle] = React.useState(
    data.data[0].position_title
  );
  const [currentPositionHolder, updatePositionHolder] = React.useState("");
  const [showDropdown, toggleDropdown] = React.useState(false);
  const [showSlideMenu, toggleSlideMenu] = React.useState(false);

  const allPositions = data.data;

  console.log(allPositions)

  const [carousel, setCarousel] = React.useState();

  function updatePosition(current) {
    updatePositionTitle(allPositions[current].position_title);
    updatePositionHolder(allPositions[current].position_holder);
  }

  function slickGoTo(index) {
    carousel.slickGoTo(index);
    toggleDropdown(false);
    toggleSlideMenu(false);
  }

  function nextSlide() {
    carousel.slickNext();
  }

  function previousSlide() {
    carousel.slickPrev();
  }

  function showDropdownMenu() {
    toggleDropdown(!showDropdown);
  }

  function slideMenuUp() {
    toggleSlideMenu(true);
  }

  function closeSlide() {
    toggleSlideMenu(false);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => updatePosition(current),
  };

  return (
    <div className="positions-container">
      {showSlideMenu ? (
        <div className="position-selector" id="mobile">
          <div className="exit-space" onClick={closeSlide}></div>
          <div className="wrapper">
            <button onClick={closeSlide}>
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
            <div className="overflow-scroll">
              {allPositions.map((position, index) => (
                <div class="position-wrapper">
                  {position.position_title == currentPositionTitle ? (
                    <div>
                      <button className="position" id="selected">
                        {position.position_title}
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        className="position"
                        onClick={() => slickGoTo(index)}
                      >
                        {position.position_title}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="align-container" id={data.carouselAlignment}>
        <section className="positions" id="subsection">
          <div className="container">
            <Slider
              asNavFor={carousel}
              ref={(slider) => setCarousel(slider)}
              {...settings}
            >
              {allPositions.map((position, index) => (
                <div className="person" key={index}>
                  <div className="mini-decorator" id="circle1" />
                  <div className="mini-decorator" id="circle2" />
                  <div className="mini-decorator" id="circle3" />
                  <Img
                    fluid={position.image.childImageSharp.fluid}
                    alt="Brother"
                  />
                  {/* {JSON.stringify(position.image.childImageSharp)} */}
                </div>
              ))}
            </Slider>
          </div>

          <div className="carousel-bottom">
            <button onClick={previousSlide}>
              <svg
                className="left-arrow"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM24 10.5L2 10.5V13.5L24 13.5V10.5Z"
                  fill="#999999"
                />
              </svg>
            </button>
            {currentPositionHolder == "" ? (
              <div className="position-text">
                <h3>{allPositions[0].position_title}</h3>
                <p>{allPositions[0].position_holder}</p>
              </div>
            ) : (
              <div className="position-text">
                <h3>{currentPositionTitle}</h3>
                <p>{currentPositionHolder}</p>
              </div>
            )}
            <button onClick={nextSlide}>
              <svg
                className="right-arrow"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM24 10.5L2 10.5V13.5L24 13.5V10.5Z"
                  fill="#999999"
                />
              </svg>
            </button>
          </div>

          <div>
            <button
              onClick={showDropdownMenu}
              className="position-dropdown-btn"
              id="desktop"
            >
              {currentPositionTitle}
            </button>

            <button
              onClick={slideMenuUp}
              className="position-dropdown-btn"
              id="mobile"
            >
              {currentPositionTitle}
            </button>

            <div className="positions-list-wrapper">
              <div className="positions-list">
                {showDropdown ? (
                  <div className="options">
                    {allPositions.map((position, index) => (
                      <button onClick={() => slickGoTo(index)}>
                        {position.position_title}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PositionCarousel;
