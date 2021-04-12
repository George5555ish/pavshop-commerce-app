import React from 'react';

import mainImg from "../../images/logo.png";

import './styles.css'

const Header = () => {
    return (
        <div >
            <header id="header" className="margin-div">
<div className="header">
  <div className="container">
    <div className="row flex-side align-side space-side">
      <div>
        <div className="main-search">
          <input id="search-input" name="search"  placeholder="Search" className="form-control input-lg" autoComplete="off" type="text"/>
          <span className="input-group-btn">
        <button type="button" className="btn btn-default btn-lg"><i className="fa fa-search"></i></button>
        </span> </div>
      </div>
      <div className=" col-xs-6 col-sm-4"> <a className="navbar-brand" href="/"> 
      <img alt="themini" src={mainImg}/> </a> </div>
      <div className=" shopcart">
        {/* <div id="cart">
          <button type="button" className="btn" data-target="#cart-dropdown" data-toggle="collapse" aria-expanded="true">
          <span id="shippingcart">Shopping cart</span>
          <span id="cart-total">items (0)</span> 
          </button>
        </div> */}
       
      </div>
    </div>
   

   <nav className="header-nav">
   <ul className="navbar-nav">
  <li style={{margin: '0', padding: '0'}}> <a href="/"> <li> <>Home</></li></a></li>
    <li className="dropdown-container"> 
    <a href="/">Collection </a>
      
      <ul className="dropdown-content">
              <span className="dropdown-nav">
             
                  <span className="dropdown-header">Women's</span>
                  <span><a href="/">Unique Features</a></span>
                  <span><a href="/">Image Responsive</a></span>
                  <span><a href="/">Auto Carousel</a></span>
                  <span><a href="/">Newsletter Form</a></span>
                  <span><a href="/">Four columns</a></span>
                  <span><a href="/">Four columns</a></span>
                  <span><a href="/">Good Typography</a></span>
              </span>
             
              <span className="dropdown-nav">
             
                  <span className="dropdown-header">Women's</span>
                  <span><a href="/">Unique Features</a></span>
                  <span><a href="/">Image Responsive</a></span>
                  <span><a href="/">Auto Carousel</a></span>
                  <span><a href="/">Newsletter Form</a></span>
                  <span><a href="/">Four columns</a></span>
                  <span><a href="/">Four columns</a></span>
                  <span><a href="/">Good Typography</a></span>
              </span>
             

              <span className="dropdown-nav">
             
                  <span className="dropdown-header">Women's</span>
                  <span><a href="/">Unique Features</a></span>
                  <span><a href="/">Image Responsive</a></span>
                  <span><a href="/">Auto Carousel</a></span>
                  <span><a href="/">Newsletter Form</a></span>
                  <span><a href="/">Four columns</a></span>
                  <span><a href="/">Four columns</a></span>
                  <span><a href="/">Good Typography</a></span>
              </span>
             
              <div >
            
                  <div  className="carousel-slider">
                  
                  
                  </div>
                  {/* <!-- /.carousel --> */}
           
              </div>
            </ul>
    </li>
    <li style={{margin: '0', padding: '0'}}><a href="/shop">  <li>Shop</li></a></li>
    <li style={{margin: '0', padding: '0'}}><a href="/blog"> <li> <>Blog</></li></a></li>
    <li className="dropdown-container"> 
    <a href="/">Pages </a>
      <ul className="dropdown-items">
      <a href="/cart"><li> <>Cart</></li></a>  
      <a href="/checkout">  <li> <>Checkout</></li></a> 
      <a href="singleproduct"><li> <>Product Detail Page</></li></a>
      <a href="/blog"><li> <>Single Post</></li></a>
      </ul>
    </li>

    {/* LINKS */}
   <li style={{margin: '0', padding: '0'}}><a href="/about"> <li> <>About us</></li></a></li>
   <li style={{margin: '0', padding: '0'}}><a href="/contactus">  <li> <>Contact us</></li></a></li>
  </ul>

   </nav>
  </div>
</div>
</header>
        </div>
    )
}

export default Header
