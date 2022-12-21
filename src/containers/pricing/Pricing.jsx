import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UrlContext, MainContext } from "../../helpers/context";

import "./pricing.scss";

const Pricing = () => {
  const [showMoreStandard, setShowMoreStandard] = useState(false);
  const [showMorePremium, setShowMorePremium] = useState(false);

  const { setUrl } = useContext(UrlContext);
  const { setPricingModalShow } = useContext(MainContext);

  const nav = useNavigate();

  const goToPricing = () => {
    nav("/pricing");
  };
  const standardModal = () => {
    setPricingModalShow("pricing-modal-show");
  };
  const premiumModal = () => {
    setPricingModalShow("pricing-modal-show");
  };

  return (
    <>
      <div className="pricing gradient__bg" id="pricing">
        <h1 className="gradient__text">Choose a Plan for Your Website</h1>
        <div className="pricing-content">
          <div className="_card-container _pt2 ">
            {/* Basic Card */}
            <div className="_card _basic focus">
              <div className="_card-head">
                <div className="_card-header">
                  <h4 className="_heading1 _bold _text-center">Basic</h4>
                  <p className="_paragraph _bold _text-center _p1">
                    Good for a personal website
                  </p>
                </div>
              </div>
              <div className="_card-body">
                <p className="_card-excerpt _text-center _py1">
                  2 pages; 2nd page at your choice
                </p>

                <ul className="_px1 _sub-para">
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">Delivery Time</div>
                    <div className="_card-item--value">2days</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">
                      Number of Revisions
                    </div>
                    <div className="_card-item--value">2</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">
                      Number of Page
                    </div>
                    <div className="_card-item--value">1</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">Source Code</div>
                    <div className="_card-item--value _check">✓</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">Responsive</div>
                    <div className="_card-item--value _check">✓</div>
                  </li>
                </ul>
                <div className="_price _bold _text-center _mt3">
                  <p>Start at: $15</p>
                </div>
              </div>
              <div className="_card-footer _text-center _flex _flex-column">
                <input
                  type="button"
                  value="Continue"
                  className="_card-btn"
                  onClick={goToPricing}
                />
              </div>
            </div>

            {/* Standard Card */}
            <div className="_card _standard">
              <h2 className="pricing-best-value">Best Value</h2>
              <div className="_card-head">
                <div className="_card-header">
                  <h4 className="_heading1 _bold _text-center">Standard</h4>
                  <p className="_paragraph _bold _text-center _p1">
                    Good for a small business and blog website
                  </p>
                </div>
              </div>
              <div className="_card-body">
                <p className="_card-excerpt _text-center _py1">
                  3 pages; 2nd and 3rd page at your choice
                </p>

                <ul
                  className={
                    !showMoreStandard
                      ? "_px1 _sub-para _my1"
                      : "_px1 _sub-para _my1 _show-more"
                  }
                >
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">Delivery Time</div>
                    <div className="_card-item--value">5days</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">
                      Number of Revisions
                    </div>
                    <div className="_card-item--value">2</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">
                      Number of Page
                    </div>
                    <div className="_card-item--value">2</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">Source Code</div>
                    <div className="_card-item--value _check">✓</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">Responsive</div>
                    <div className="_card-item--value _check">✓</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">
                      Content Upload
                    </div>
                    <div className="_card-item--value _check">✓</div>
                  </li>
                </ul>
                <div className="_text-center">
                  <a
                    className={
                      !showMoreStandard ? "pointer _text-center" : "_show-less"
                    }
                    onClick={() => setShowMoreStandard(true)}
                  >
                    Show more {">>"}
                  </a>
                  <a
                    className={
                      !showMoreStandard ? "_show-less" : "pointer _text-center"
                    }
                    onClick={() => setShowMoreStandard(false)}
                  >
                    Show less {"<<"}
                  </a>
                </div>
                <div className="_price _bold _text-center">
                  <p>Start at: $35</p>
                </div>
              </div>
              <div className="_card-footer _text-center _flex _flex-column">
                <input
                  type="button"
                  value="Continue"
                  className="_card-btn"
                  onClick={goToPricing}
                />
              </div>
            </div>

            {/* Premium Card */}
            <div className="_card _premium">
              <div className="_card-head">
                <div className="_card-header">
                  <h4 className="_heading1 _bold _text-center">Premium</h4>
                  <p className="_paragraph _bold _text-center _p1">
                    Good for a medium to large scale business
                  </p>
                </div>
              </div>
              <div className="_card-body">
                <p className="_card-excerpt _text-center _py1">
                  5 pages; 2nd to 5th page at your choice
                </p>

                <ul
                  className={
                    !showMorePremium
                      ? "_px1 _sub-para _my1"
                      : "_px1 _sub-para _my1 _show-more"
                  }
                >
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">Delivery Time</div>
                    <div className="_card-item--value">12days</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">
                      Number of Revisions
                    </div>
                    <div className="_card-item--value">2</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">
                      Number of Page
                    </div>
                    <div className="_card-item--value">3</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">Source Code</div>
                    <div className="_card-item--value _check">✓</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">Responsive</div>
                    <div className="_card-item--value _check">✓</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">
                      Content Upload
                    </div>
                    <div className="_card-item--value _check">✓</div>
                  </li>
                  <li className="_flex _flex-row _jc-around">
                    <div className="_card-item--title _bold">Custom Design</div>
                    <div className="_card-item--value _check">✓</div>
                  </li>
                </ul>
                <div className="_text-center">
                  <a
                    className={
                      !showMorePremium ? "pointer _text-center" : "_show-less"
                    }
                    onClick={() => setShowMorePremium(true)}
                  >
                    Show more {">>"}
                  </a>
                  <a
                    className={
                      !showMorePremium ? "_show-less" : "pointer _text-center"
                    }
                    onClick={() => setShowMorePremium(false)}
                  >
                    Show less {"<<"}
                  </a>
                </div>
                <div className="_price _bold _text-center">
                  <p>Start at: $105</p>
                </div>
              </div>
              <div className="_card-footer _text-center _flex _flex-column">
                <input
                  type="button"
                  value="Continue"
                  className="_card-btn"
                  onClick={goToPricing}
                />
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/pricing"
          href=""
          className="pricing-learn-more"
          onClick={() => setUrl("pricing")}
        >
          More Details
        </Link>
      </div>
    </>
  );
};

export default Pricing;

export const TestModal = () => {
  return (
    <div className="test-modal">
      <h1>Test Modal</h1>
    </div>
  );
};
