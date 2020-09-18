import React from "react";
import Layout from "../components/Layout";
import TopSection from "../components/Brothers/TopSection";
import Classes from "../components/Brothers/Classes";
import Exec from "../components/Brothers/Exec";

// import MidSection from "../components/Landing/MidSection";

const BrothersPage = () => {
  return (
    <Layout>
      <TopSection />
      <Classes />
      <Exec />
    </Layout>
  );
};

export default BrothersPage;
