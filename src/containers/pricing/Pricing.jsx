import React, { useState, useContext, useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

import { UrlContext, MainContext } from "../../helpers/context";

import "./pricing.scss";

const Pricing = () => {
  const [showMoreStandard, setShowMoreStandard] = useState(false);
  const [showMorePremium, setShowMorePremium] = useState(false);
  const [pricingModal, setPricingModal] = useState("");

  const { url, setUrl } = useContext(UrlContext);
  const { setPricingModalShow, setScroll } = useContext(MainContext);

  const basicModal = () => {
    setPricingModalShow(true);
    // setScroll(true);
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
          <div className="_card-container _pt2">
            <PricingModal pricingData={""} />
            {/* Basic Card */}
            <div className="_card _basic">
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
                  1 page with 4 section of your choice
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
                  onClick={basicModal}
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
                  2 pages; 2nd page at your choice
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
                  onClick={standardModal}
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
                  3 pages; 2nd and 3rd page at your choice
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
                  onClick={premiumModal}
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

export const PricingModal = ({ pricingData }) => {
  const { pricingModalShow, setPricingModalShow } = useContext(MainContext);
  const modalRef = useRef();

  useEffect(() => {});

  return (
    <>
      <div
        className={`pricing-modal-container ${
          pricingModalShow ? "pricing-modal-show" : ""
        }`}
      >
        <button
          className="pricing-modal-close-btn"
          onClick={() => setPricingModalShow(false)}
        >
          <IoCloseCircle />
        </button>
        <div className="pricing-modal-body">
          <div className="pricing-modal-title">
            <h2>Basic pricing plan</h2>
            <p>
              This plan is suitable for a personal website or small business
              with 2 to 3 pages website.
              <br />
              <i>
                Client must be the one to provide the slogans, marketing spiels,
                and a likes.
              </i>
            </p>
          </div>
          <div className="pricing-modal-included">
            <h2>What's included on this plan?</h2>
            <dl>
              <dt>Source Code</dt>
              <dd>Source code will be provided.</dd>
              <dt>Responsive Layout</dt>
              <dd>Website supports mobile display.</dd>
            </dl>
          </div>
          <div className="pricing-modal-scope">
            <dl>
              <dt>Delivery time</dt>
              <dd>2 days</dd>
              <dt>Number of revisions</dt>
              <dd>2</dd>
              <dt>Number of pages</dt>
              <dd>3; compose of Home, About/FAQ, and Contact</dd>
            </dl>
          </div>
          <div className="pricing-modal-upgrade">
            <h2>Want to upgrade your oder?</h2>
            <form method="post" className="pricing-modal-form">
              <input type="checkbox" name="basic-delivery" id="basicDelivery" />
              <label htmlFor="basicDelivery">Fast delivery: 1 day</label>
              <input type="number" name="basic-revision" id="basicRevision" />
              <label htmlFor="basicRevision">Revision: @$4 per revision</label>
              <p>Extra services</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
