import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Signup from "../../containers/signup/Signup";
import { MainContext } from "../../helpers/context";
import AuthContext from "../../helpers/context/AuthContext";
import "./navbar.scss";

const Menu = ({ setToggleMenu, currentPage }) => {
  return (
    <>
      <p>
        <Link
          to={currentPage.home}
          onClick={() => setToggleMenu(false)}
          className="nav-link"
        >
          Home
        </Link>
      </p>
      <p>
        <Link
          onClick={() => setToggleMenu(false)}
          className="nav-link"
          to={currentPage.about}
        >
          About
        </Link>
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
      {currentPage == "pricing" ? (
        ""
      ) : (
        <p>
          <a
            href="#pricing"
            onClick={() => setToggleMenu(false)}
            className="nav-link"
          >
            Pricing
          </a>
        </p>
      )}
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

const Navbar = ({ setClose, close, currentPage }) => {
  const { user, logoutUser, token } = useContext(AuthContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [page, setPage] = useState(currentPage);
  const [urlList, setUrlList] = useState([]);

  const { setScroll, scroll, setSignupShow } = useContext(MainContext);

  const urls = {
    pricing_page: {
      home: "/",
      about: "/about-us",
      caseStudy: "/feature",
    },
  };

  const page_url = () => {
    if (page == "pricing") {
      setUrlList(urls.pricing_page);
    }
  };

  const handleSignup = () => {
    setClose(!close);
    setScroll(true);
  };

  useEffect(() => {
    page_url();
  }, []);

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
          {currentPage == "home" ? (
            <>
              <p>
                <a
                  onClick={() => setToggleMenu(false)}
                  href="#about"
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
              {page == "pricing" ? (
                ""
              ) : (
                <p>
                  <a
                    href="#pricing"
                    onClick={() => setToggleMenu(false)}
                    className="nav-link"
                  >
                    Pricing
                  </a>
                </p>
              )}
              <p>
                <a
                  href="404"
                  onClick={() => setToggleMenu(false)}
                  className="nav-link"
                >
                  Library
                </a>
              </p>
            </>
          ) : (
            <>
              <p>
                <Link
                  to={urlList.home}
                  onClick={() => setToggleMenu(false)}
                  className="nav-link"
                >
                  Home
                </Link>
              </p>
              <p>
                <Link
                  onClick={() => setToggleMenu(false)}
                  to={urlList.about}
                  className="nav-link"
                >
                  About
                </Link>
              </p>
              <p>
                <Link
                  onClick={() => setToggleMenu(false)}
                  to={urlList.caseStudy}
                  className="nav-link"
                >
                  Case Studies
                </Link>
              </p>
              <div className="cbs__navbar-separator"></div>
              {page == "pricing" ? (
                ""
              ) : (
                <p>
                  <a
                    href="#pricing"
                    onClick={() => setToggleMenu(false)}
                    className="nav-link"
                  >
                    Pricing
                  </a>
                </p>
              )}
              <p>
                <Link
                  to="404"
                  onClick={() => setToggleMenu(false)}
                  className="nav-link"
                >
                  Library
                </Link>
              </p>
            </>
          )}
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
              onClick={handleSignup}
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
              <Menu setToggleMenu={setToggleMenu} currentPage={urlList} />
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
                        setClose(!close),
                        setToggleMenu(!toggleMenu),
                        setScroll(true)
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
