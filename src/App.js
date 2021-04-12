import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import product9 from "./images/product/product9.jpg";
import product91 from "./images/product/product9-1.jpg";

import product7 from "./images/product/product7.jpg"
import product71 from "./images/product/product7-1.jpg"
import productImage9 from "./images/product/product9.jpg"
import productImage91 from "./images/product/product9-1.jpg";
import product1 from "./images/product/product1.jpg";
import product11 from "./images/product/product1-1.jpg";
import product3 from "./images/product/product3.jpg"
import product31 from "./images/product/product3-1.jpg";
import product5 from "./images/product/product5.jpg";
import product51 from "./images/product/product5-1.jpg";


// BRANDS

import brand1 from "./images/brand/brand1.png";
import brand2 from "./images/brand/brand2.png";
import brand3 from "./images/brand/brand3.png";
import brand4 from "./images/brand/brand4.png";
import brand5 from "./images/brand/brand5.png";
import brand6 from "./images/brand/brand6.png";
import brand7 from "./images/brand/brand7.png";
import brand8 from "./images/brand/brand8.png";
import brand9 from "./images/brand/brand9.png";

import subBanner from "./images/sub5.jpg";


import Bestseller from './snippets/Bestseller/Bestseller';
import './styles.css';
import Newarrivals from './snippets/Newarrivals/Newarrivals';
import Popup from './snippets/Popup/Popup';
import Featured from './snippets/Featured/Featured';

import Header from './components/Header/Header';
import Footer from './components/Header/Footer/Footer';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import About from './components/About/About';
import ContactUs from './components/ContactUs/Contactus';

const App = () => {


    

    const [currentWatches, setCurrentWatches] = useState('Featured');
    const [showPopUp, setShowPopUp] = useState(true);
    const [showLoder, setShowLoder] = useState(true);



    const handleShowPopUp = (e) => {
      e.preventDefault();
      setShowPopUp(!showPopUp);
      console.log(showPopUp);
    }

    const handlePopSubmit = (e) =>{
      e.preventDefault();
      console.log(showPopUp);
    }

    useEffect(() => {
      console.log(showPopUp);
      setShowLoder(false);

     
    }, [showPopUp])
    return (

      <Router>
        <div> 
        {     showLoder &&  <div className="loder"></div>}
             <Header />
     
  <div className="wrapper">
 

    {/* <!-- =====  HEADER START  ===== --> */}
 

  
    <Route exact path="/">


   {
    showPopUp && <Popup handleShowPopUp={(e) => handleShowPopUp(e)} handlePopSubmit={(e) =>handlePopSubmit(e)}/>
   }
    <div className="slider">
    </div>
 
  
    <div className="container">
      {/* <!-- =====  SUB BANNER  STRAT ===== --> */}
      <div className="row margin-div flex-side below-picture">
        <div className="col-sm-3 mt_20 cms-icon ">
          <div className="feature-i-left ptb_30 margin-items">
            <div className="icon-right Shipping"></div>
            <h6>Free Shipping</h6>
            <p>Free delivery worldwide</p>
          </div>
        </div>
        <div className="col-sm-3 mt_20 cms-icon ">
          <div className="feature-i-left ptb_30 margin-items">
            <div className="icon-right Order"></div>
            <h6>Order Online</h6>
            <p>Hours : 8am - 11pm</p>
          </div>
        </div>
        <div className="col-sm-3 mt_20 cms-icon ">
          <div className="feature-i-left ptb_30 margin-items">
            <div className="icon-right Save"></div>
            <h6>Shop And Save</h6>
            <p>For All Spices & Herbs</p>
          </div>
        </div>
        <div className="col-sm-3 mt_20 cms-icon ">
          <div className="feature-i-left ptb_30 margin-items">
            <div className="icon-right Safe"></div>
            <h6>Safe Shoping</h6>
            <p>Ensure genuine 100%</p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-12 mt_30">
         
          <div id="product-tab " className="mt_10 margin-div">
           <div className="flex-side space-side featured-container">
           <div className="mb_10 ">
              <h2 className="main_title">Featured Products</h2>
            </div>
            <ul className="nav text-right flex-side featured-nav">
              <li className="active" onClick={() => setCurrentWatches('New Arrivals')}> <p className="toogle-children" data-toggle="tab" style={{color: '#fff'}}>New Arrivals</p> </li>
              <li onClick={() => setCurrentWatches('Best Seller')}><p className="toogle-children" style={{color: '#fff'}} href="#Featured" data-toggle="tab">Bestsellers</p> </li>
              <li onClick={() => setCurrentWatches('Featured')}><p className="toogle-children" style={{color: '#fff'}} href="#Featured" data-toggle="tab">Featured</p> </li>
              {/* <li style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
                <div className="triangle-left"></div>
                <div className="triangle-right"></div>
            </li> */}
            </ul>

           
           </div>
            <div className="tab-content clearfix box">
            

            {
                currentWatches ==="Featured" ?    <Featured /> : 
                    currentWatches ==="New Arrivals" ?  <Newarrivals />
                 : currentWatches === "Best Seller" ? 
             <Bestseller /> : <div></div>
            }
         




            </div>
          </div>
        
        </div>
      </div>
      <div className="row">
        <div className="cms_banner">
          <div className="col-xs-12 mt_60">
            <div id="subbanner4" className="sub-hover margin-div">
              <div className="sub-img"><a href="/"><img src={subBanner} alt="Sub Banner5" className="img-responsive"/></a></div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 mtb_10">
        <div id="product-tab " className="mt_10 margin-div">
           <div className="flex-side space-side featured-container">
           <div className="mb_10 ">
              <h2 className="main_title">Deals of the week</h2>
            </div>
    

           
           </div>
            <div className="tab-content clearfix box">
              <div className="tab-pane active" id="nArrivals">
                <div className="nArrivals owl-carousel">
                  <div className="product-grid">
                  <Link to="/singleproduct">
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image"> <a href="/"> 
                        <img data-name="product_image" src={product9} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/>
                         <img src={product91} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" className="product-name"><a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="product-grid">
                  <Link to="/singleproduct">
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <a href="product_detail_page.html"> 
                        <img data-name="product_image" src={product1} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/>
                         <img src={product11} alt="iPod Classic" title="iPod Classic" className="img-responsive  watch"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" className="product-name">
                          <a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="product-grid">
                  <Link to="/singleproduct">
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <a href="product_detail_page.html"> 
                      


                        <img data-name="product_image" src={product3} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> 
                        <img src={product31} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" className="product-name">
                          <a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="product-grid">
                  <Link to="/singleproduct">
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image product-imageblock"> <a href="product_detail_page.html"> 
                        <img data-name="product_image" src={product5} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> 
                        <img src={product51} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" className="product-name">
                          <a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="product-grid">
                  <Link to="/singleproduct">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock"> <a href="product_detail_page.html"> 
                        <img data-name="product_image" src={product7} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/>
                         <img src={product71} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                           <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> 
                           <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> 
                           <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> 
                           <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" className="product-name">
                          <a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="product-grid">
                  <Link to="/singleproduct">
                    <div className="item">
                      <div className="product-thumb  mb_30">

                   

                        <div className="image product-imageblock"> <a href="product_detail_page.html"> 
                        <img data-name="product_image" src={productImage9} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/>
                         <img src={productImage91} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating"> 
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                           <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                            <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                             <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                              <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                               </div>
                          <h6 data-name="product_name" className="product-name"><a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>

           
            </div>
          </div>
       
        </div>
             </div>
      
      <div id="brand_carouse" className="ptb_60 text-center margin-div">
        <div className="type-01">
          <div className="heading-part mb_10 ">
            <h2 className="main_title">Brand Logo</h2>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="brand owl-carousel ptb_20 flex-side">
                <div className="item text-center"> <a href="/"><img src={brand1} alt="Disney" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="/"><img src={brand2} alt="Dell" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="/"><img src={brand3} alt="Harley" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="/"><img src={brand4}alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="/"><img src={brand5} alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="/"><img src={brand6} alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="/"><img src={brand7} alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="/"><img src={brand8} alt="Canon" className="img-responsive" /></a> </div>
                <div className="item text-center"> <a href="/"><img src={brand9} alt="Canon" className="img-responsive" /></a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Route>
   
   <Route exact path="/singleproduct">
            <SingleProduct />
   </Route>

   <Route exact path="/blog">
            <Blog />
   </Route>
   <Route exact path="/shop">
            <Shop />
   </Route>

   <Route exact path="/cart">
            <Cart />
   </Route>

   <Route exact path="/checkout">
            <Checkout />
   </Route>
   <Route exact path="/about">
            <About />
   </Route>

   <Route exact path="/contactus">
            <ContactUs />
   </Route>
   <Footer />
   </div>
  </div>

 
  </Router>
    )
}

export default App;
