const fetch = require("node-fetch");

async function scrapeInstagram() {
  // console.log(carouselImages)
  let imagesScraped = false;
  try {
    const response = await fetch(`https://www.instagram.com/uvalphie/?__a=1`);
    // console.log(await response);
    // console.log(test);
    //   const { data } = await response;
    //   console.log(data);
    //   const photos = data.user.edge_owner_to_timeline_media.edges.map(
    //     ({ node }) => {
    //       const { id } = node;
    //       const caption = node.edge_media_to_caption.edges[0].node.text;
    //       const originalImg = node.display_url;
    //       const thumbnail = node.thumbnail_resources.find(
    //         (thumbnail) => thumbnail.config_width === 320
    //       );
    //       const { src } = thumbnail;
    //       return {
    //         id,
    //         caption,
    //         src,
    //         thumbnail,
    //         originalImg,
    //       };
    //     }
    //   );
    //   console.log("PHOTOS: ", photos);
    //   setImages(photos);
    //   imagesScraped = true;
  } catch (error) {
    // Fallback in case it doesnt work
    console.error(error);
    console.log("Could not retrieve gallery images.");
  }
}
scrapeInstagram();
