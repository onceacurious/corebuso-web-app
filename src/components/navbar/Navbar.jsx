import React, { useState, useContext } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Signup from "../../containers/signup/Signup";
import AuthContext from "../../helpers/context/AuthContext";
import "./navbar.scss";

const Menu = ({ setToggleMenu }) => {
  return (
    <>
      <p>
        <Link to="/" onClick={() => setToggleMenu(false)} className="nav-link">
          Home
        </Link>
      </p>
      <p>
        <a
          onClick={() => setToggleMenu(false)}
          href="#wCBS"
          className="nav-link"
        >
          About
        </a>
      </p>
      <p>
        <a
          onClick={() => setToggleMenu(false)}
          href="#features"
          className="nav-link"
        >
          Case Studies
        </a>
      </p>
      <div className="cbs__navbar-separator"></div>
      <p>
        <a
          href="#pricing"
          onClick={() => setToggleMenu(false)}
          className="nav-link"
        >
          Pricing
        </a>
      </p>
      <p>
        <Link
          to="/404"
          onClick={() => setToggleMenu(false)}
          className="nav-link"
        >
          Library
        </Link>
      </p>
    </>
  );
};

const Navbar = ({ setClose, close }) => {
  let { user, logoutUser, token } = useContext(AuthContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="cbs__navbar gradient__bg">
      <Signup />
      <div className="cbs__navbar-links">
        <div className="cbs__navbar-links_logo">
          <h1 className="rotate-scale-up">
            <Link to="/">COREBUSO</Link>
          </h1>
        </div>
        <div className="cbs__navbar-links_container">
          <p>
            <Link
              to="/"
              onClick={() => setToggleMenu(false)}
              className="nav-link"
            >
              Home
            </Link>
          </p>
          <p>
            <a
              onClick={() => setToggleMenu(false)}
              href="#wCBS"
              className="nav-link"
            >
              About
            </a>
          </p>
          <p>
            <a
              onClick={() => setToggleMenu(false)}
              href="#features"
              className="nav-link"
            >
              Case Studies
            </a>
          </p>
          <div className="cbs__navbar-separator"></div>
          <p>
            <a
              href="#pricing"
              onClick={() => setToggleMenu(false)}
              className="nav-link"
            >
              Pricing
            </a>
          </p>
          <p>
            <Link
              to="404"
              onClick={() => setToggleMenu(false)}
              className="nav-link"
            >
              Library
            </Link>
          </p>
        </div>
      </div>
      <div className="cbs__navbar-sign">
        {user && token ? (
          <>
            <Link to="/admin" className="nav-link">
              {`Hello! ${user} `}
            </Link>
            <button
              type="button"
              className="glow-on-hover"
              onClick={logoutUser}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/auth" className="nav-link">
              Sign in
            </Link>
            <button
              type="button"
              className="glow-on-hover"
              onClick={() => setClose(!close)}
            >
              Sign up
            </button>
          </>
        )}
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
                {user && token ? (
                  <>
                    <Link to="/admin" className="nav-link">
                      {`Hello! ${user} `}
                    </Link>
                    <button
                      type="button"
                      className="glow-on-hover"
                      onClick={logoutUser}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/auth" className="nav-link">
                      Sign in
                    </Link>
                    <button
                      type="button"
                      className="glow-on-hover"
                      onClick={() => (
                        setClose(!close), setToggleMenu(!toggleMenu)
                      )}
                    >
                      Sign up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
