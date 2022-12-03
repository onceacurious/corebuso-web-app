import React from "react";
import {
  Footer,
  Pricing,
  Possibility,
  Features,
  WhyCBS,
  Header,
} from "../../containers";

import { Brand, Cta, Navbar } from "../../components";

import "./home.css";

const Home = () => {
  return (
    <div className="cbs__home">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhyCBS />
      <Features />
      <Possibility />
      <Cta />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
