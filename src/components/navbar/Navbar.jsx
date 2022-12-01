import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./navbar.css";

const Menu = ({ setToggleMenu }) => {
  return (
    <>
      <p>
        <Link to="/" onClick={() => setToggleMenu(false)}>
          Home
        </Link>
      </p>
      <p>
        <a onClick={() => setToggleMenu(false)} href="#wCBS">
          About
        </a>
      </p>
      <p>
        <a onClick={() => setToggleMenu(false)} href="#features">
          Case Studies
        </a>
      </p>
      <div className="cbs__navbar-separator"></div>
      <p>
        <a href="#pricing" onClick={() => setToggleMenu(false)}>
          Pricing
        </a>
      </p>
      <p>
        <Link to="/not-found" onClick={() => setToggleMenu(false)}>
          Library
        </Link>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="cbs__navbar gradient__bg">
      <div className="cbs__navbar-links">
        <div className="cbs__navbar-links_logo">
          <h1 className="tracking-in-expand">
            <Link to="/">COREBUSO</Link>
          </h1>
        </div>
        <div className="cbs__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="cbs__navbar-sign">
        <a className="disabled">Sign in</a>
        <button type="button" className="glow-on-hover disabled">
          Sign up
        </button>
      </div>
      <div className="cbs__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="cbs__navbar-menu_container scale-up-center">
            <div className="cbs__navbar-menu_container-links">
              <Menu setToggleMenu={setToggleMenu} />
              <div className="cbs__navbar-menu_container-links-sign">
                <div className="cbs__navbar-separator"></div>
                <p>Sign in</p>
                <button type="button" className="glow-on-hover">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
