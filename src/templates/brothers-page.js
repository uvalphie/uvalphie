import React from "react";
import Layout from "../components/Layout";
import TopSection from "../components/Brothers/TopSection";
import Classes from "../components/Brothers/Classes";
import Exec from "../components/Brothers/Exec";
import Chairs from "../components/Brothers/Chairs";

// import MidSection from "../components/Landing/MidSection";

const BrothersPage = () => {
  return (
    <Layout>
      <TopSection />
      <Classes />
      <Exec />
      <Chairs />
    </Layout>
  );
};

export default BrothersPage;
