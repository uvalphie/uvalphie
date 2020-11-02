import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/gallery.scss";

// Modal Settings
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Gallery = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [currentModalImage, updateImage] = React.useState({});
  const [currentImageCaption, updateCaption] = React.useState("");
  const [currentGallerySlide, updateGallerySlide] = React.useState(0);
  const [carousel, setCarousel] = React.useState();

  // Modal Functions
  function openModal(image, caption) {
    updateImage(image);
    updateCaption(caption);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Carousel Functions
  function nextSlide() {
    carousel.slickNext();
  }
  function previousSlide() {
    carousel.slickPrev();
  }

  const queryResults = useStaticQuery(
    graphql`
      query {
        allInstaNode {
          edges {
            node {
              id
              mediaType
              preview
              original
              timestamp
              caption
            }
          }
        }
      }
    `
  );
  let imagesData = [];
  for (var query in queryResults.allInstaNode.edges) {
    imagesData.push(queryResults.allInstaNode.edges[parseInt(query)].node);
  }

  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => updateGallerySlide(current),
  };

  // Indices for showing 6 instagram images at a time
  const slideImgIndices = [0, 7, 14, 21, 28, 35, 42];

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          className="modal-img"
          id="1"
          src={currentModalImage}
          alt="TopSection"
        />
        <p className="modal-caption">{currentImageCaption}</p>
        <button className="exit-modal-btn" onClick={closeModal}>
          &times;
        </button>
      </Modal>

      {/* Previous and Next buttons for Carousel */}
      <button onClick={previousSlide} className="prev-carousel-btn">
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
      <button onClick={nextSlide} className="next-carousel-btn">
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

      <Slider
        asNavFor={carousel}
        ref={(slider) => setCarousel(slider)}
        {...settings}
      >
        {slideImgIndices.map((imageIndex, index) => (
          <div className="instagram-slide" key={index}>
            {imagesData
              .slice(imageIndex, imageIndex + 6)
              .map((image, index) => (
                <div className="instagram-img" key={index}>
                  <img
                    src={image.preview}
                    alt="Section Image"
                    onClick={() => openModal(image.original, image.caption)}
                  />
                </div>
              ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
