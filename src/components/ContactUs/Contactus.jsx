import React from 'react';

// import gaando from "../../images/about-page-gaando.jpg";

import leftBanner from "../../images/left1.jpg";
// import staff1 from "../../images/tm1.jpg";
// import staff2 from "../../images/tm2.jpg";
// import staff3 from "../../images/tm3.jpg";
// import staff4 from "../../images/tm4.jpg";
// import staff5 from "../../images/tm5.jpg";


const ContactUs = () => {

  // const [activeBtn, setActiveBtn] = useState(false);
  // const [toogleDiv, setToogleDiv] = useState(false);

  // const handleActive = () => {
  //   setActiveBtn(!activeBtn)
  // }

  // const handleToogle = () => {
  //   setToogleDiv(!toogleDiv)
  // }

    return (
        <div>
            <div className="row margin-div">
        
        <div>
          <div className="breadcrumb ptb_20">
            <h1>New LCDScreen...</h1>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="category_page.html">Products</a></li>
              <li className="active">New LCDS...</li>
            </ul>
          </div>
        </div>
     
        <div id="column-left" className="col-sm-4 col-lg-3 hidden-xs flex-side space-side" style={{marginTop: "20px"}}>
          <div id="category-menu" className="navbar collapse in mb_40" aria-expanded="true" role="button" style={{flex: '1'}}>
            <div className="nav-responsive">
              <div className="heading-part">
                <h2 className="main_title">Top category</h2>
              </div>
              <ul className="nav  main-navigation collapse in">
                <li><a href="/contactus">Appliances</a></li>
                <li><a href="/contactus">Mobile Phones</a></li>
                <li><a href="/contactus">Tablet PC & Accessories</a></li>
                <li><a href="/contactus">Consumer Electronics</a></li>
                <li><a href="/contactus">Computers & Networking</a></li>
                <li><a href="/contactus">Electrical & Tools</a></li>
                <li><a href="/contactus">Apparel</a></li>
                <li><a href="/contactus">Bags & Shoes</a></li>
                <li><a href="/contactus">Toys & Hobbies</a></li>
                <li><a href="/contactus">Watches & Jewelry</a></li>
                <li><a href="/contactus">Home & Garden</a></li>
                <li><a href="/contactus">Health & Beauty</a></li>
                <li><a href="/contactus">Outdoors & Sports</a></li>
              </ul>
            </div>

            <div className="left_banner left-sidebar-widget mt_30 mb_40">
           <a href="/contactus"><img src={leftBanner} alt="Left Banner" className="img-responsive" /></a> 
           </div>
          </div>
     
          <div className="col-sm-8 col-lg-9 mtb_20" style={{flex: 3}}>
               
          <div className="col-sm-8 col-lg-9 mtb_20">
          {/* <!-- contact  --> */}
          <div className="row flex-side" style={{padding: '0 20px'}}>
            <div className="col-md-4 col-xs-12 contact">
              <div className="location mb_50">
                <h5 className="capitalize mb_20"><strong>Our Location</strong></h5>
                <div className="address">Office address
                  <br/> 124,Lorem Ipsum has been
                  <br/> text ever since the 1500</div>
                <div className="call mt_10"><i className="fa fa-phone" aria-hidden="true"></i>+91-9987-654-321</div>
              </div>
              <div className="Career mb_50">
                <h5 className="capitalize mb_20"><strong>Careers</strong></h5>
                <div className="address">dummy text ever since the 1500s, simply dummy text of the typesetting industry. </div>
                <div className="email mt_10"><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:careers@yourdomain.com" target="_top">careers@yourdomain.com</a></div>
              </div>
              <div className="Hello mb_50">
                <h5 className="capitalize mb_20"><strong>Say Hello</strong></h5>
                <div className="address">simply dummy text of the printing and typesetting industry.</div>
                <div className="email mt_10"><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:info@yourdomailname.com" target="_top">info@yourdomailname.com</a></div>
              </div>
            </div>
            <div className="col-md-8 col-xs-12 contact-form mb_50">
              {/* <!-- Contact FORM --> */}
              <div id="contact_form">
                <form id="contact_body" method="post" action="contact_me.php">
                                   <label className="full-with-form" ><span>Name</span></label>
                  <input className="full-with-form " type="text" name="name" placeholder="Name" data-required="true" />
                          <label className="full-with-form" ><span>Email Address</span></label>
                  <input className="full-with-form  mt_30" type="email" name="email" placeholder="Email Address" data-required="true" />
                   <label className="full-with-form" ><span>Phone Number</span></label>
                  <input className="full-with-form  mt_30" type="text" name="phone1" placeholder="Phone Number" maxlength="15" data-required="true" />
                     <label className="full-with-form" ><span>Subject</span></label>
                  <input className="full-with-form  mt_30" type="text" name="subject" placeholder="Subject" data-required="true"/>
                                    <label className="full-with-form" ><span>Attachment</span></label>
                               <label className="full-with-form" ><span>Message</span></label>

                  <textarea className="full-with-form  mt_30" name="message" placeholder="Message" data-required="true"></textarea>
                  <button className="btn mt_30" type="submit">Send Message</button>
                </form>
                <div id="contact_results"></div>
              </div>
           
            </div>
          </div>
        
        
        </div>
        {/*  */}

                </div>
        </div>

        </div>
     
      </div>
        // </div>
    )
}

export default ContactUs;
