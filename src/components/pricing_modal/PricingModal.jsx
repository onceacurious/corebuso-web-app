import React, { useRef, useContext, useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";

import { MainContext } from "../../helpers/context";

import "./pricingModal.scss";
const PricingModal = () => {
  const { pricingModalShow, setPricingModalShow, strParser } =
    useContext(MainContext);
  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.focus();
  });

  useEffect(() => {}, [pricingModalShow]);

  return (
    <div className="pricing-modal">
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
        <div ref={modalRef} className="pricing-modal-body">
          <div className="pricing-modal-title">
            <h2>Basic pricing plan</h2>
            <p>
              This plan is suitable for a personal website or small business
              with 2 to 3 pages website.
              <br />
              The client must be the one to provide the slogans, marketing
              spiels, images, videos and likes.
            </p>
          </div>
          <div className="pricing-modal-included">
            <h2>What's included in your plan?</h2>
            <dl>
              <dt>Source Code</dt>
              <dd>Source code will be provided.</dd>
              <dt>Responsive Layout</dt>
              <dd>Website supports mobile display.</dd>
            </dl>
          </div>
          <div className="pricing-modal-scope">
            <h2>Project scope</h2>
            <dl>
              <dt>Delivery time</dt>
              <dd>2 days</dd>
              <dt>Number of revisions</dt>
              <dd>2</dd>
              <dt>Number of pages</dt>
              <dd>
                2; compose of Home and About or FAQ or Contact.
                <br />
                3rd page; subject for provision.
              </dd>
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
    </div>
  );
};

export default PricingModal;
