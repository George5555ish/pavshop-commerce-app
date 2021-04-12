import React from 'react';

import product1 from "../../images/product/product1.jpg";
import product11 from "../../images/product/product1-1.jpg";
import product6 from "../../images/product/product6.jpg";
import product3 from "../../images/product/product3.jpg"
import product31 from "../../images/product/product3-1.jpg";
import product5 from "../../images/product/product5.jpg";
import product51 from "../../images/product/product5-1.jpg";
import product61 from "../../images/product/product6-1.jpg";
import product8 from "../../images/product/product8.jpg"
import product81 from "../../images/product/product8-1.jpg"
import product10 from "../../images/product/product10.jpg"    
import product101 from "../../images/product/product10-1.jpg"
const Bestseller = () => {
    return (
        <div>
             <div class="tab-pane" id="Bestsellers">
                <div class="Bestsellers owl-carousel flex-side">
                  <div class="product-grid">
                    <div class="item">
                      <div class="product-thumb  mb_30">
                        <div class="image product-imageblock"> <a href="/singleproduct"> 
                        <img data-name="product_image" src={product1} alt="iPod Classic" title="iPod Classic" class="img-responsive"/>
                         <img src={product11} alt="iPod Classic" title="iPod Classic" class="img-responsive"/> </a>
                          <div class="button-group text-center">
                            <div class="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div class="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div class="compare"><a href="/"><span>Compare</span></a></div>
                            <div class="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div class="caption product-detail text-center">
                          <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" class="product-name"><a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span class="price"><span class="amount"><span class="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

               
                  <div class="product-grid">
                    <div class="item">
                      <div class="product-thumb  mb_30">
                        <div class="image product-imageblock"> <a href="/singleproduct"> 
                        <img data-name="product_image" src={product3} alt="iPod Classic" title="iPod Classic" class="img-responsive"/> 
                        <img src={product31} alt="iPod Classic" title="iPod Classic" class="img-responsive"/> </a>
                          <div class="button-group text-center">
                            <div class="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div class="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div class="compare"><a href="/"><span>Compare</span></a></div>
                            <div class="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div class="caption product-detail text-center">
                          <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i>
                          <i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span>
                           <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> 
                           <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span>
                            <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" class="product-name">
                          <a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span class="price"><span class="amount"><span class="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="product-grid">
                    <div class="item">
                      <div class="product-thumb  mb_30">
                        <div class="image product-imageblock"> <a href="/singleproduct">
                         <img data-name="product_image" src={product5} alt="iPod Classic" title="iPod Classic" class="img-responsive"/> <img src={product51} alt="iPod Classic" title="iPod Classic" class="img-responsive"/> </a>
                          <div class="button-group text-center">
                            <div class="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div class="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div class="compare"><a href="/"><span>Compare</span></a></div>
                            <div class="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div class="caption product-detail text-center">
                          <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" class="product-name"><a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span class="price"><span class="amount"><span class="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="product-grid">
                    <div class="item">
                      <div class="product-thumb  mb_30">
                        <div class="image product-imageblock"> <a href="/singleproduct">
                         <img data-name="product_image" src={product6} alt="iPod Classic" title="iPod Classic" class="img-responsive"/>
                          <img src={product61} alt="iPod Classic" title="iPod Classic" class="img-responsive"/> </a>
                          <div class="button-group text-center">
                            <div class="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div class="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div class="compare"><a href="/"><span>Compare</span></a></div>
                            <div class="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div class="caption product-detail text-center">
                          <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" class="product-name"><a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span class="price"><span class="amount"><span class="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="product-grid">
                    <div class="item">
                      <div class="product-thumb  mb_30">
                        <div class="image product-imageblock"> <a href="/singleproduct"> 
                        <img data-name="product_image" src={product8} alt="iPod Classic" title="iPod Classic" class="img-responsive"/>
                         <img src={product81} alt="iPod Classic" title="iPod Classic" class="img-responsive"/> </a>
                          <div class="button-group text-center">
                            <div class="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div class="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div class="compare"><a href="/"><span>Compare</span></a></div>
                            <div class="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div class="caption product-detail text-center">
                          <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" class="product-name"><a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span class="price"><span class="amount"><span class="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="product-grid">
                    <div class="item">
                      <div class="product-thumb  mb_30">
                        <div class="image product-imageblock"> <a href="/singleproduct"> 
                        <img data-name="product_image" src={product10} alt="iPod Classic" title="iPod Classic" class="img-responsive"/> 
                        <img src={product101} alt="iPod Classic" title="iPod Classic" class="img-responsive"/> </a>
                          <div class="button-group text-center">
                            <div class="wishlist"><a href="/"><span>wishlist</span></a></div>
                            <div class="quickview"><a href="/"><span>Quick View</span></a></div>
                            <div class="compare"><a href="/"><span>Compare</span></a></div>
                            <div class="add-to-cart"><a href="/"><span>Add to cart</span></a></div>
                          </div>
                        </div>
                        <div class="caption product-detail text-center">
                          <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-1x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i><i class="fa fa-star fa-stack-x"></i></span> </div>
                          <h6 data-name="product_name" class="product-name"><a href="/" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                          <span class="price"><span class="amount"><span class="currencySymbol">$</span>70.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default Bestseller
