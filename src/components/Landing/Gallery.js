import React, { useEffect } from "react";
import { useStaticQuery, graphql, withAssetPrefix } from "gatsby";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/gallery.scss";
import BackupData from "./json/gallery-backup.json";

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
  const [carouselImages, setImages] = React.useState([]);

  useEffect(() => {
    const INSTAGRAM_ID = 1366987037;
    const PHOTO_COUNT = 50;

    async function fallbackData() {
      try {
        const backupData = JSON.parse(JSON.stringify(BackupData));
        const photos = backupData.data.user.edge_owner_to_timeline_media.edges.map(
          ({ node }) => {
            const { id } = node;
            const caption = node.edge_media_to_caption.edges[0].node.text;
            const originalImg = node.display_url;
            const thumbnail = node.thumbnail_resources.find(
              (thumbnail) => thumbnail.config_width === 320
            );
            const { src } = thumbnail;
            // console.log(src)
            return {
              id,
              caption,
              src,
              thumbnail,
              originalImg,
            };
          }
        );
        setImages(photos);
      } catch (err) {
        console.log(err);
      }
    }

    async function scrapeInstagram() {
      try {
        fetch('https://scrapeinstagram.herokuapp.com/data', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        },
        ).then(response => {
          if (response.ok) {
            response.json().then(json => {
              const { data } = json;
              // console.log(data.user)
              const photos = data.user.edge_owner_to_timeline_media.edges.map(
                ({ node }) => {
                  const { id } = node;
                  const caption = node.edge_media_to_caption.edges[0].node.text;
                  const originalImg = node.display_url;
                  const thumbnail = node.thumbnail_resources.find(
                    (thumbnail) => thumbnail.config_width === 320
                  );
                  const { src } = thumbnail;
                  return {
                    id,
                    caption,
                    src,
                    thumbnail,
                    originalImg,
                  };
                }
              );
              setImages(photos);
            });
          }
        });
        if(carouselImages.length == 0){
          // console.log(carouselImages.length);
          fallbackData();
        }
      } catch (error) {
        // Fallback in case it doesnt work
        // console.log("ERROR")
        fallbackData();
      }
    }
    scrapeInstagram();
  }, []);

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

  // const queryResults = useStaticQuery(
  //   graphql`
  //     query {
  //       allInstaNode {
  //         edges {
  //           node {
  //             id
  //             mediaType
  //             preview
  //             original
  //             timestamp
  //             caption
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  // let imagesData = [];
  // console.log(queryResults.allInstaNode.edges);
  // for (var query in queryResults.allInstaNode.edges) {
  //   imagesData.push(queryResults.allInstaNode.edges[parseInt(query)].node);
  // }

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
            {carouselImages
              .slice(imageIndex, imageIndex + 6)
              .map((image, index) => (
                <div className="instagram-img" key={index}>
                  <img
                    src={image.thumbnail.src}
                    alt="Section Image"
                    onClick={() => openModal(image.originalImg, image.caption)}
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
