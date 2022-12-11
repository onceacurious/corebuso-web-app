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
import Search from "../../components/search/Search";

const Home = ({ close, setClose }) => {
  return (
    <div className="cbs__home">
      <Signup
        close={close}
        setClose={setClose}
        emailId="home"
        usernameId="home"
        pwdId="home"
        pwdId2="home"
      />
      <div className="gradient__bg">
        <Navbar close={close} setClose={setClose} currentPage="home" />
        {/* <Search /> */}
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
