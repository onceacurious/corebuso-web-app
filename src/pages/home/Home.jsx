import React from "react";
import {
  Footer,
  Pricing,
  Possibility,
  Features,
  WhyCBS,
  Header,
  Signup,
} from "../../containers";

import { Brand, Cta, Navbar, Snackbar } from "../../components";

import "./home.scss";
import Search from "../../components/search/Search";

const Home = ({ close, setClose }) => {
  return (
    <>
      <Snackbar />
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
    </>
  );
};

export default Home;
