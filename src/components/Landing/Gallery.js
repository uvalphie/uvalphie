import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./css/gallery.scss";
import Modal from "react-modal";

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

  function openModal(image, caption) {
    updateImage(image);
    updateCaption(caption);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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

  return (
    <div className="gallery">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          className="model-img"
          id="1"
          src={currentModalImage}
          alt="TopSection"
        />
        <p className="model-caption">{currentImageCaption}</p>
      </Modal>
      <h1>Gallery</h1>
      <div class="instagram-container">
        {imagesData.map((image, index) => (
          <div className="instagram-img">
            <img
              src={image.preview}
              alt="Section Image"
              onClick={() => openModal(image.original, image.caption)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
