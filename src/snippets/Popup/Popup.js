import React, {useState} from "react";

import newsBg from "../../images/newsbg.jpg";
const Popup = ({handleShowPopUp, handlePopSubmit}) => {


    const [showModal, setShowModal] = useState(true);
  return (
    <div>
      <div
        id="subscribe-me"
        className={showModal ? "modal animated fade in watch-popup" : "modal animated fade in no-display"}
        role="dialog"
        data-keyboard="true"
        tabIndex="-1"
      >
        <div className="newsletter-popup">
          <p className="cross" onClick={() => setShowModal(false)}>&times;</p>
          <img className="offer" src={newsBg} alt="offer" />
          <div className="newsletter-popup-static newsletter-popup-top">
            <div className="popup-text">
              <div className="popup-title">
                50% <span>off</span>
              </div>
              <div className="popup-desc">
                <div>Sign up and get 50% off your next Order</div>
              </div>
            </div>
            <form onSubmit={handlePopSubmit}>
              <div className="form-group required">
                <input
                  type="email"
                  name="email-popup"
                  id="email-popup"
                  placeholder="Enter Your Email"
                  className="form-control input-lg"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-default btn-lg"
                  id="email-popup-submit"
                >
                  Subscribe
                </button>
                <label className="checkme">
                  <input type="checkbox" value="" id="checkme" onChange={handleShowPopUp}/> Dont show
                  again
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
