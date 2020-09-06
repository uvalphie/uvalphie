import React from "react";
import Layout from "../components/Layout";
import TopSection from "../components/Landing/TopSection";
import MidSection from "../components/Landing/MidSection";
import News from "../components/Landing/News";
import Gallery from "../components/Landing/Gallery";

const IndexPage = () => {
  return (
    <Layout>
      <TopSection />
      <MidSection />
      <News />
      <Gallery />
    </Layout>
  );
};

export default IndexPage;
