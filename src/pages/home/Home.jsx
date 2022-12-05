import React, { useState } from "react";
import {
  Footer,
  Pricing,
  Possibility,
  Features,
  WhyCBS,
  Header,
  Signup,
} from "../../containers";

import { Brand, Cta, Navbar } from "../../components";

import "./home.css";

const Home = () => {
  const [close, setClose] = useState(false);

  return (
    <div className="cbs__home">
      <Signup close={close} setClose={setClose} />
      <div className="gradient__bg">
        <Navbar close={close} setClose={setClose} />
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
