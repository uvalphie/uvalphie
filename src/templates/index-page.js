import React from "react";
import Layout from "../components/Layout";
import TopSection from "../components/Landing/TopSection";
import MidSection from "../components/Landing/MidSection";
import News from "../components/Landing/News";
import Gallery from "../components/Landing/Gallery";

const IndexPage = () => {
  // var docWidth = document.documentElement.offsetWidth;

  // [].forEach.call(document.querySelectorAll("*"), function (el) {
  //   if (el.offsetWidth > docWidth) {
  //     console.log("FOUND THE ELEMENT")
  //     console.log(el);
  //   }
  // });
  return (
    <Layout>
      <TopSection />
      <MidSection />
      <div className="news-gallery-container">
        <News />
        <Gallery />
      </div>
    </Layout>
  );
};

export default IndexPage;
