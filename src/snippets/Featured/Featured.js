import React from 'react';

import product7 from "../../images/product/product7.jpg"
import product71 from "../../images/product/product7-1.jpg"
import productImage9 from "../../images/product/product9.jpg"
import productImage91 from "../../images/product/product9-1.jpg";
import product1 from "../../images/product/product1.jpg";
import product11 from "../../images/product/product1-1.jpg";
import product3 from "../../images/product/product3.jpg"
import product31 from "../../images/product/product3-1.jpg";
import product5 from "../../images/product/product5.jpg";
import product51 from "../../images/product/product5-1.jpg";

import { Link} from 'react-router-dom';


const Featured = () => {
    return (
        <div>
             <div className="tab-pane active" id="nArrivals">
                <div className="nArrivals owl-carousel">
                  <div className="product-grid">
                  <Link to="/singleproduct">
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image"> <a href="/singleproduct"> 
                        <img data-name="product_image" src={productImage9} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/>
                         <img src={productImage91} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" className="product-name"><a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
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
                        <div className="image product-imageblock"> <a href="/singleproduct"> 
                        <img data-name="product_image" src={product1} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/>
                         <img src={product11} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" className="product-name">
                          <a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
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
                        <div className="image product-imageblock"> <a href="/singleproduct"> 
                      


                        <img data-name="product_image" src={product3} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> 
                        <img src={product31} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" className="product-name">
                          <a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
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
                        <div className="image product-imageblock"> <a href="/singleproduct"> 
                        <img data-name="product_image" src={product5} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> 
                        <img src={product51} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" className="product-name">
                          <a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
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
                        <div className="image product-imageblock"> <a href="/singleproduct"> 
                        <img data-name="product_image" src={product7} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/>
                         <img src={product71} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                           <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> 
                           <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> 
                           <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> 
                           <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" className="product-name">
                          <a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
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
                        <div className="image product-imageblock"> <a href="/singleproduct"> 
                        <img data-name="product_image" src={productImage9} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/>
                         <img src={productImage91} alt="iPod Classic" title="iPod Classic" className="img-responsive watch"/> </a>
                          <div className="button-group text-center">
                            <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                            <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                            <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                            <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
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
                          <h6 data-name="product_name" className="product-name"><a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
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
    )
}

export default Featured
