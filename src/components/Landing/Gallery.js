import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./css/gallery.scss";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  function openModal(image, caption) {
    updateImage(image);
    updateCaption(caption);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function whatSlide() {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => updateGallerySlide(current),
  };

  const slideImgIndices = [0, 7, 14, 21, 28, 35, 42 ];
  return (
    <div className="gallery">
      <Modal
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
        <button className="exit-modal-btn" onClick={closeModal}>&times;</button>
      </Modal>
      <h1>Gallery</h1>

      <Slider {...settings}>
        {slideImgIndices.map((imageIndex, index) => (
          <div className="instagram-slide" key={index}>
            {imagesData.slice(imageIndex, imageIndex + 6).map((image, index) => (
              <div className="instagram-img">
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
