import React from 'react';

import gaando from "../../images/about-page-gaando.jpg";

import leftBanner from "../../images/left1.jpg";
import staff1 from "../../images/tm1.jpg";
import staff2 from "../../images/tm2.jpg";
import staff3 from "../../images/tm3.jpg";
import staff4 from "../../images/tm4.jpg";
import staff5 from "../../images/tm5.jpg";


const About = () => {

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
                <li><a href="/">Appliances</a></li>
                <li><a href="/">Mobile Phones</a></li>
                <li><a href="/">Tablet PC & Accessories</a></li>
                <li><a href="/">Consumer Electronics</a></li>
                <li><a href="/">Computers & Networking</a></li>
                <li><a href="/">Electrical & Tools</a></li>
                <li><a href="/">Apparel</a></li>
                <li><a href="/">Bags & Shoes</a></li>
                <li><a href="/">Toys & Hobbies</a></li>
                <li><a href="/">Watches & Jewelry</a></li>
                <li><a href="/">Home & Garden</a></li>
                <li><a href="/">Health & Beauty</a></li>
                <li><a href="/">Outdoors & Sports</a></li>
              </ul>
            </div>

            <div className="left_banner left-sidebar-widget mt_30 mb_40">
           <a href="/"><img src={leftBanner} alt="Left Banner" className="img-responsive" /></a> 
           </div>
          </div>
     
          <div className="col-sm-8 col-lg-9 mtb_20" style={{flex: 3}}>
                <div>

                <div className="to-impress">
                <figure> <img src={gaando} alt="#" /> </figure>
                    <div style={{padding: '10px'}}>
                        <h2>GREAT DESIGNS TO IMPRESS</h2>
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                    </div>
                </div>
                <div className="row">
            <div className="col-md-6 to-impress">
              <div className="heading-part mb_20 mt_40">
                <h2 className="main_title">What We Do?</h2>
              </div>
              <div className="panel-group" id="accordion">
                <div className="panel panel-default pull-left">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">1. What is HTML?</a> </h4>
                  </div>
                  <div className="panel-collapse collapse in">
                    <div className="panel-body">
                      <p>HTML is a computer language devised to render static web pages to the Internet. It is relatively easy to learn, with the basics being accessible.</p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default pull-left">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">2. What is Bootstrap?</a> </h4>
                  </div>
                  <div className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>Bootstrap is the most popular HTML, CSS, and JS frameen I discovered Bootstrap a few was still gaining in popularity, addition to HTML, CSS and JS.</p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default pull-left">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">3. What is CSS?</a> </h4>
                  </div>
                  <div className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the procrt of a web page. Using CSS.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          </div>

          <div className="heading-part mb_10">
            <h2 className="main_title mt_50">Our Creative Team</h2>
          </div>
          <div className="handle-main">
            <div className="handle-overflow">
              <div className="item team-detail">
                <div className="team-item-img"> <img src={staff1} alt="" /> </div>
                <div className="team-designation mt_20">php Developer</div>
                <h4 className="team-title  mtb_10">joseph Lui </h4>
                <p style={{width: '40%'}}>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt_20 mb_80">
                  <li><a href="https://www.facebook.com/" target="_blank"  rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"  rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"  rel="noreferrer"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"  rel="noreferrer"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"  rel="noreferrer"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src={staff2} alt="" /> </div>
                <div className="team-designation mt_20">php Developer</div>
                <h4 className="team-title  mtb_10">joseph Lui </h4>
                <p style={{width: '40%'}}>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt_20 mb_80">
                  <li><a href="https://www.facebook.com/" target="_blank"  rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"  rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"  rel="noreferrer"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"  rel="noreferrer"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"  rel="noreferrer"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src={staff3} alt="" /> </div>
                <div className="team-designation mt_20">php Developer</div>
                <h4 className="team-title  mtb_10">joseph Lui </h4>
                <p style={{width: '40%'}}>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt_20 mb_80">
                  <li><a href="https://www.facebook.com/" target="_blank"  rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"  rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"  rel="noreferrer"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"  rel="noreferrer"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"  rel="noreferrer"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src={staff4} alt="" /> </div>
                <div className="team-designation mt_20">php Developer</div>
                <h4 className="team-title  mtb_10">joseph Lui </h4>
                <p style={{width: '40%'}}>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt_20 mb_80">
                  <li><a href="https://www.facebook.com/" target="_blank"  rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"  rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"  rel="noreferrer"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"  rel="noreferrer"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"  rel="noreferrer"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src={staff5} alt="" /> </div>
                <div className="team-designation mt_20">php Developer</div>
                <h4 className="team-title  mtb_10">joseph Lui </h4>
                <p style={{width: '40%'}}>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt_20 mb_80">
                  <li><a href="https://www.facebook.com/" target="_blank"  rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"  rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"  rel="noreferrer"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"  rel="noreferrer"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"  rel="noreferrer"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
  
          </div>
        </div>

                </div>
        </div>

        </div>
     
      </div>
        // </div>
    )
}

export default About;
