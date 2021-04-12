import React, {useState, useEffect} from 'react';
import product7 from "../../images/product/product7.jpg"
import product71 from "../../images/product/product7-1.jpg"
import product1 from "../../images/product/product1.jpg";
import product11 from "../../images/product/product1-1.jpg";
import product3 from "../../images/product/product3.jpg"
import product31 from "../../images/product/product3-1.jpg";
import product5 from "../../images/product/product5.jpg";
import product51 from "../../images/product/product5-1.jpg";
import product2 from "../../images/product/product2.jpg"
import product21 from "../../images/product/product2-1.jpg"
import product4 from "../../images/product/product4.jpg"
import product41 from "../../images/product/product4-1.jpg"
import product6 from "../../images/product/product6.jpg";
import product61 from "../../images/product/product6-1.jpg";
import product8 from "../../images/product/product8.jpg"
import product81 from "../../images/product/product8-1.jpg"
import product10 from "../../images/product/product10.jpg"    
import product101 from "../../images/product/product10-1.jpg"
import leftBanner from "../../images/left1.jpg";
import product9 from '../../images/product/product9.jpg'
import product91 from '../../images/product/product9-1.jpg'



const Shop = () => {

  const [activeBtn, setActiveBtn] = useState('left');
  const [showLoderShop, setShowLoderShop] = useState(true)

  const handleActive = (str) => {
    setActiveBtn(str)
  }

  useEffect(() => {
    setShowLoderShop(false)
   
  }, [showLoderShop])

    return (
        <div>

        {showLoderShop && <div className="loder"></div>}
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
            <div className="nav-responsive" style={{border: '1px solid'}}>
              <div className="heading-part">
                <h2 className="main_title">Top category</h2>
              </div>
              <ul className="nav  main-navigation collapse in">
                <li><a href="/shop">Appliances</a></li>
                <li><a href="/shop">Mobile Phones</a></li>
                <li><a href="/shop">Tablet PC & Accessories</a></li>
                <li><a href="/shop">Consumer Electronics</a></li>
                <li><a href="/shop">Computers & Networking</a></li>
                <li><a href="/shop">Electrical & Tools</a></li>
                <li><a href="/shop">Apparel</a></li>
                <li><a href="/shop">Bags & Shoes</a></li>
                <li><a href="/shop">Toys & Hobbies</a></li>
                <li><a href="/shop">Watches & Jewelry</a></li>
                <li><a href="/shop">Home & Garden</a></li>
                <li><a href="/shop">Health & Beauty</a></li>
                <li><a href="/shop">Outdoors & Sports</a></li>
              </ul>
            </div>

            <div className="left_banner left-sidebar-widget mt_30 mb_40">
           <a href="/shop"><img src={leftBanner} alt="Left Banner" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /></a> 
           </div>

           <div className="filter left-sidebar-widget mb_50">
            <div className="heading-part mtb_20 ">
              <h2 className="main_title">Refinr Search</h2>
            </div>
            <div className="filter-block">
              <p>
                <label for="amount">Price range:</label>
                <input type="text" id="amount" readonly />
              </p>
              <div id="slider-range" className="mtb_20"></div>
              <div className="list-group">
                <div className="list-group-item mb_10">
                  <label>Color</label>
                  <div id="filter-group1">
                    <div className="checkbox">
                      <label>
                        <input  type="checkbox"/> Red (10)</label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input  type="checkbox"/> Green (06)</label>
                    </div>
                    <div className="checkbox ">
                      <label>
                        <input  type="checkbox"/> Blue(09)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="list-group-item mb_10">
                  <label>Size</label>
                  <div id="filter-group3">
                    <div className="checkbox">
                      <label>
                        <input  type="checkbox"/> Big (3)</label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input  type="checkbox"/> Medium (2)</label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input  type="checkbox"/> Small (1)</label>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn">Refine Search</button>
              </div>
            </div>
          </div>
          </div>

          <div className="page-wrapper row mt_10 flex-side" style={{width: '270%', border:'1px solid'}}>
          <div className="col-sm-8 col-lg-9 mtb_20">
          <div className="space-side flex-side">
            <div className="list-grid-wrapper pull-left">
              <div className="btn-group btn-list-grid">
                <button type="button" className={activeBtn === 'left' ? "btn btn-default grid-view active": "btn btn-default grid-view"} onClick={() => handleActive('left')} style={{cursor: 'pointer'}}></button>
                <button type="button" id="list-view" className={activeBtn === 'right' ? "btn btn-default list-view active": "btn btn-default list-view"} onClick={() => handleActive('right')} style={{cursor: 'pointer'}}></button>
              </div>
            </div>

            <div className="mb_30 flex-side">
            <div className="page-wrapper pull-right flex-side align-side">
              <label className="control-label" for="input-limit">Show :</label>
              <div className="limit">
                <select id="input-limit" className="form-control">
                  <option value="8" selected="selected">08</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="100">100</option>
                </select>
              </div>
              <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
            </div>
            <div className="sort-wrapper pull-right">
              <label className="control-label" for="input-sort">Sort By :</label>
              <div className="sort-inner">
                <select id="input-sort" className="form-control">
                  <option value="ASC" selected="selected">Default</option>
                  <option value="ASC">Name (A - Z)</option>
                  <option value="DESC">Name (Z - A)</option>
                  <option value="ASC">Price (Low &gt; High)</option>
                  <option value="DESC">Price (High &gt; Low)</option>
                  <option value="DESC">Rating (Highest)</option>
                  <option value="ASC">Rating (Lowest)</option>
                  <option value="ASC">Model (A - Z)</option>
                  <option value="DESC">Model (Z - A)</option>
                </select>
              </div>
              <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
            </div>
            </div>
           
          </div>
          <div className="row" style={{display: 'flex', flexWrap: 'wrap', margin: '10px'}}>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct">
                   <img data-name="product_image" src={product3} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> 
                   <img src={product31} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct">
                   <img data-name="product_image" src={product4} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> 
                   <img src={product41} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct">
                  <img data-name="product_image"src={product5} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> 
                  <img src={product51} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct">
                   <img data-name="product_image" src={product6} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> 
                   <img src={product61} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct">
                   <img data-name="product_image" src={product7} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> 
                   <img src={product71} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct">
                   <img data-name="product_image" src={product8} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  />
                   <img src={product81} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct">
                   <img data-name="product_image" src={product9} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> 
                   <img src={product91} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct"> 
                  <img data-name="product_image" src={product10} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  />
                   <img src={product101} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct">
                   <img data-name="product_image" src={product1} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  />
                    <img src={product11} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct"> 
                  <img data-name="product_image" src={product2} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  />
                   <img src={product21}alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct">
                   <img data-name="product_image" src={product31} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> 
                   <img src={product31} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout product-grid col-md-4 col-xs-6 ">
              <div className="item" style={{padding: '10px'}}>
                <div className={activeBtn === 'left'? "product-thumb clearfix mb_30": "product-thumb clearfix mb_30 flex-side"}>
                  <div className="image product-imageblock"> <a href="/singleproduct">
                   <img data-name="product_image" src={product4} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> 
                   <img src={product41} alt="iPod Classic" title="iPod Classic" className="img-responsive" width={activeBtn === 'left' ? '300px' : ''} height={activeBtn === 'left' ? '300px' : ''}  /> </a>
                    <div className="button-group text-center">
                      <div className="wishlist"><a href="/shop"><span>wishlist</span></a></div>
                      <div className="quickview"><a href="/shop"><span>Quick View</span></a></div>
                      <div className="compare"><a href="/shop"><span>Compare</span></a></div>
                      <div className="add-to-cart"><a href="/shop"><span>Add to cart</span></a></div>
                    </div>
                  </div>
                  <div className="caption product-detail text-center">
                    <h6 data-name="product_name" className="product-name mt_20"><a href="/shop" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                    <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                    </span>
                    <p className={activeBtn === 'left' ? "product-desc mt_20 mb_60": "mt_20 mb_60"}> More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.Cover Flow. Browse through your music collection by flipping..</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-nav text-center mt_50 flex-side align-side">
            <ul>
              <li><a href="/shop"><i className="fa fa-angle-left"></i></a></li>
              <li className="active"><a href="/shop">1</a></li>
              <li><a href="/shop">2</a></li>
              <li><a href="/shop">3</a></li>
              <li><a href="/shop"><i className="fa fa-angle-right"></i></a></li>
            </ul>
          </div>
        </div>
         
          </div>

      
        </div>
     
      </div>
        </div>
    )
}

export default Shop
