import React from 'react'

const Footer = () => {
    return (
        <div className="footer pt_60 ">
      <div className="container margin-div">
        <div className="newsletters mt_30 mb_50">
          <div className="row flex-side space-side">
            <div className="col-sm-6">
              <div className="news-head pull-left">
                <h2>Follow Our Updates !</h2>
                <div className="new-desc">Be the First to know about our Fresh Arrivals and much more!</div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="news-form pull-right">
                <form>
                  <div className="form-group required">
                    <input name="email" id="email" placeholder="Enter Your Email" className="form-control input-lg" required="" type="email" />
                    <button type="submit" className="btn btn-default btn-lg">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      
        <div className="row flex-side footer-info">
          <div className="col-md-3 footer-block">
            <h6 className="footer-title ptb_20">Information</h6>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Delivery Information</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3 footer-block">
            <h6 className="footer-title ptb_20">Services</h6>
            <ul>
              <li><a href="/">Returns</a></li>
              <li><a href="/">Site Map</a></li>
              <li><a href="/">Wish List</a></li>
              <li><a href="/">My Account</a></li>
              <li><a href="/">Order History</a></li>
            </ul>
          </div>
          <div className="col-md-3 footer-block">
            <h6 className="footer-title ptb_20">Extras</h6>
            <ul>
              <li><a href="/">Brands</a></li>
              <li><a href="/">Gift Certificates</a></li>
              <li><a href="/">Affiliates</a></li>
              <li><a href="/">Specials</a></li>
              <li><a href="/">Newsletter</a></li>
            </ul>
          </div>
          <div className="col-md-3 footer-block">
            <h6 className="footer-title ptb_20">Contacts</h6>
            <ul>
              <li>Warehouse & Offices,</li>
              <li>12345 Street name, California USA</li>
              <li>(+024) 666 888</li>
              <li>leonode.wc@gmail.com</li>
              <li><a href="http://www.lionode.com/">www.lionode.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt_60 ptb_20">
        <div className="container">
          <div className="row margin-div">
            <div className="col-sm-4">
              <div className="social_icon">
                <ul>
                  <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="/"><i className="fa fa-google"></i></a></li>
                  <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="/"><i className="fa fa-rss"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="copyright-part text-center">@ 2021 All Rights Reserved Darklook</div>
            </div>
            <div className="col-sm-4">
              <div className="payment-icon text-right">
                <ul>
                  <li><i className="fa fa-cc-paypal "></i></li>
                  <li><i className="fa fa-cc-visa"></i></li>
                  <li><i className="fa fa-cc-discover"></i></li>
                  <li><i className="fa fa-cc-mastercard"></i></li>
                  <li><i className="fa fa-cc-amex"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Footer
