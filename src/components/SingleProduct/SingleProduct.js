import React, {useState} from 'react';

import product7 from "../../images/product/product7.jpg"
import product71 from "../../images/product/product7-1.jpg"
import product1 from "../../images/product/product1.jpg";
import product11 from "../../images/product/product1-1.jpg";
import product3 from "../../images/product/product3.jpg"
import product5 from "../../images/product/product5.jpg";
import product51 from "../../images/product/product5-1.jpg";
import product2 from "../../images/product/product2.jpg"
import product21 from "../../images/product/product2-1.jpg"
import product4 from "../../images/product/product4.jpg"
import product6 from "../../images/product/product6.jpg";
import product8 from "../../images/product/product8.jpg"
import product81 from "../../images/product/product8-1.jpg"
import product10 from "../../images/product/product10.jpg"    
import product101 from "../../images/product/product10-1.jpg"
import leftBanner from "../../images/left1.jpg";
import product9 from '../../images/product/product9.jpg'
import product91 from '../../images/product/product9-1.jpg'


import Reviews from '../../snippets/Reviews/Reviews';
import './styles.css';


const Solution = () => {
    return(
        <div>
          <h1>Solution</h1>
                    <p>CLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis malesuada mi id tristique. Sed ipsum nisi, dapibus at faucibus non, dictum a diam. Nunc vitae interdum diam. Sed finibus, justo vel maximus facilisis, sapien turpis euismod tellus, vulputate semper diam ipsum vel tellus.</p>

        </div>
    )
}

const Overview = () => {
    return(
        <div>
        <h1>Overview</h1>
                    <p>CLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis malesuada mi id tristique. Sed ipsum nisi, dapibus at faucibus non, dictum a diam. Nunc vitae interdum diam. Sed finibus, justo vel maximus facilisis, sapien turpis euismod tellus, vulputate semper diam ipsum vel tellus.</p>

        </div>
    )
}
const SingleProduct = () => {

    const [singleDesc, setSingleDesc] = useState('Reviews');

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
          <div id="category-menu" className="navbar collapse in mb_40" aria-expanded="true" role="button">
            <div className="nav-responsive">
              <div className="heading-part">
                <h2 className="main_title">Top category</h2>
              </div>
              <ul className="nav  main-navigation collapse in">
                <li><a href="/singleproduct">Appliances</a></li>
                <li><a href="/singleproduct">Mobile Phones</a></li>
                <li><a href="/singleproduct">Tablet PC & Accessories</a></li>
                <li><a href="/singleproduct">Consumer Electronics</a></li>
                <li><a href="/singleproduct">Computers & Networking</a></li>
                <li><a href="/singleproduct">Electrical & Tools</a></li>
                <li><a href="/singleproduct">Apparel</a></li>
                <li><a href="/singleproduct">Bags & Shoes</a></li>
                <li><a href="/singleproduct">Toys & Hobbies</a></li>
                <li><a href="/singleproduct">Watches & Jewelry</a></li>
                <li><a href="/singleproduct">Home & Garden</a></li>
                <li><a href="/singleproduct">Health & Beauty</a></li>
                <li><a href="/singleproduct">Outdoors & Sports</a></li>
              </ul>
            </div>

            <div className="left_banner left-sidebar-widget mt_30 mb_40">
           <a href="/singleproduct"><img src={leftBanner} alt="Left Banner" className="img-responsive" /></a> 
           </div>
          </div>

          <div className="row mt_10">
                        <div ><a className="thumbnails" style={{border: 'none'}} href="/singleproduct"> <img data-name="product_image"  src={product51} alt="" width="500px"/></a></div>
            <div className="col-md-6">

              <div id="product-thumbnail" className="owl-carousel flex-side">
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="/singleproduct" data-fancybox="group1">
                   <img  src={product1} alt="" /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="/singleproduct" data-fancybox="group1">
                   <img  src={product2} alt="" /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="/singleproduct" data-fancybox="group1"> 
                  <img src={product3} alt="" /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="/singleproduct" data-fancybox="group1"> 
                  <img  src={product4} alt="" /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="/singleproduct" data-fancybox="group1"> 
                  <img  src={product5}alt="" /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="/singleproduct" data-fancybox="group1">
                   <img  src={product6} alt="" /></a></div>
                </div>
                <div className="item">
                  <div className="image-additional"><a className="thumbnail" href="/singleproduct" data-fancybox="group1">
                   <img  src={product7} alt="" /></a></div>
                </div>
              </div>
            </div>
         
          </div>

          <div className="col-md-6 prodetail caption product-thumb">
              <h4 data-name="product_name" className="product-name">
              <a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h4>
              <div className="rating">
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
              </div>
              <span className="price mb_20"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
              </span>
              <hr/>
              <ul className="list-unstyled product_info mtb_20">
                <li>
                  <label>Brand:</label>
                  <span> <a href="/singleproduct">Apple</a></span></li>
                <li>
                  <label>Product Code:</label>
                  <span> product 20</span></li>
                <li>
                  <label>Availability:</label>
                  <span> In Stock</span></li>
              </ul>
              <hr/>
              <p className="product-desc mtb_30"> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..</p>
              <div id="product">
                <div className="form-group">
                  <div className="row">
                    <div className="Sort-by col-md-6">
                      <label>Sort by</label>
                      <select name="product_size" id="select-by-size" className="selectpicker form-control">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                    <div className="Color col-md-6">
                      <label>Color</label>
                      <select name="product_color" id="select-by-color" className="selectpicker form-control">
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Orange</option>
                        <option>White</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="qty mt_30 form-group2">
                  <label>Qty</label>
                  <input name="product_quantity" min="1" value="1" type="number"/>
                </div>
                {/* <div className="button-group mt_30">
                  <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                  <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                  <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                </div> */}
              </div>
            </div>
        </div>
        <div className="col-sm-8 col-lg-9 mtb_20">
       
      {/*  */}
      <div className="flex-side space-side featured-container">
           <div className="mb_10 ">
              <h2 className="main_title">Featured Product</h2>
            </div>
            <ul className="nav text-right flex-side featured-nav">
              <li className="active" onClick={() => setSingleDesc('Reviews')}> <a href="#Featured" data-toggle="tab" className="toogle-children">Reviews</a> </li>
              <li onClick={() => setSingleDesc('Solutions')}><a href="#Featured" data-toggle="tab" className="toogle-children">Solutions</a> </li>
              <li onClick={() => setSingleDesc('Overview')}><a href="#Featured" data-toggle="tab" className="toogle-children">Overview</a> </li>
              <li style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
                <div className="triangle-left"></div>
                <div className="triangle-right"></div>
            </li>
            </ul>

           
           </div>
      {
                singleDesc ==="Reviews" ?    <Reviews /> : 
                singleDesc ==="Overview" ?  <Overview />
                 : singleDesc ==="Solutions" ? 
             <Solution /> : <div></div>
            }
         
          <div className="row flex-side">
            <div className="col-md-12">
              <div className="heading-part text-center mb_10">
                <h2 className="main_title mt_50">Related Products</h2>
              </div>
              <div className="related_pro box">
                <div className="product-layout  product-grid related-pro  owl-carousel mb_50 flex-side">
                  <div className="item">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> 
                      <a href="/singleproduct">
                       <img data-name="product_image" src={product7} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> 
                       <img src={product71} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> </a>
                        <div className="button-group text-center">
                          <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                          <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                          <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                          <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                        </div>
                      </div>
                      <div className="caption product-detail text-center">
                        <h6 data-name="product_name" className="product-name mt_20">
                        <a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                        <div className="rating">
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                        </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <a href="/singleproduct"> 
                      <img data-name="product_image" src={product8} alt="iPod Classic" title="iPod Classic" className="img-responsive"/>
                       <img src={product81} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> </a>
                        <div className="button-group text-center">
                          <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                          <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                          <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                          <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                        </div>
                      </div>
                      <div className="caption product-detail text-center">
                        <h6 data-name="product_name" className="product-name mt_20"><a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                        <div className="rating">
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                        </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <a href="/singleproduct"> 
                      <img data-name="product_image" src={product9} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> 
                      <img src={product91} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> </a>
                        <div className="button-group text-center">
                          <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                          <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                          <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                          <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                        </div>
                      </div>
                      <div className="caption product-detail text-center">
                        <h6 data-name="product_name" className="product-name mt_20">
                        <a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                        <div className="rating">
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                        </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <a href="/singleproduct"> 
                      <img data-name="product_image" src={product10} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> 
                      <img src={product101} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> </a>
                        <div className="button-group text-center">
                          <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                          <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                          <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                          <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                        </div>
                      </div>
                      <div className="caption product-detail text-center">
                        <h6 data-name="product_name" className="product-name mt_20"><a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                        <div className="rating">
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                        </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <a href="/singleproduct"> 
                      <img data-name="product_image" src={product1} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> 
                      <img src={product11} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> </a>
                        <div className="button-group text-center">
                          <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                          <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                          <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                          <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                        </div>
                      </div>
                      <div className="caption product-detail text-center">
                        <h6 data-name="product_name" className="product-name mt_20">
                        <a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                        <div className="rating">
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                        </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-thumb">
                      <div className="image product-imageblock"> <a href="/singleproduct"> 
                      <img data-name="product_image" src={product2} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> 
                      <img src={product21} alt="iPod Classic" title="iPod Classic" className="img-responsive"/> </a>
                        <div className="button-group text-center">
                          <div className="wishlist"><a href="/singleproduct"><span>wishlist</span></a></div>
                          <div className="quickview"><a href="/singleproduct"><span>Quick View</span></a></div>
                          <div className="compare"><a href="/singleproduct"><span>Compare</span></a></div>
                          <div className="add-to-cart"><a href="/singleproduct"><span>Add to cart</span></a></div>
                        </div>
                      </div>
                      <div className="caption product-detail text-center">
                        <h6 data-name="product_name" className="product-name mt_20">
                        <a href="/singleproduct" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                        <div className="rating">
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                          <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                        </div>
                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default SingleProduct
