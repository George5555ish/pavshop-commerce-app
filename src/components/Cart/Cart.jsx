import React, {useState} from 'react';

import leftBanner from "../../images/left1.jpg";
import product7084 from "../../images/product/70x84.jpg";


import './styles.css'



const Shop = () => {

  const [activeBtn, setActiveBtn] = useState(false);
  const [toogleDiv, setToogleDiv] = useState(false);

  const handleActive = () => {
    setActiveBtn(!activeBtn)
  }

  const handleToogle = () => {
    setToogleDiv(!toogleDiv)
  }

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
                <li><a href="/cart">Appliances</a></li>
                <li><a href="/cart">Mobile Phones</a></li>
                <li><a href="/cart">Tablet PC & Accessories</a></li>
                <li><a href="/cart">Consumer Electronics</a></li>
                <li><a href="/cart">Computers & Networking</a></li>
                <li><a href="/cart">Electrical & Tools</a></li>
                <li><a href="/cart">Apparel</a></li>
                <li><a href="/cart">Bags & Shoes</a></li>
                <li><a href="/cart">Toys & Hobbies</a></li>
                <li><a href="/cart">Watches & Jewelry</a></li>
                <li><a href="/cart">Home & Garden</a></li>
                <li><a href="/cart">Health & Beauty</a></li>
                <li><a href="/cart">Outdoors & Sports</a></li>
              </ul>
            </div>

            <div className="left_banner left-sidebar-widget mt_30 mb_40">
           <a href="/cart"><img src={leftBanner} alt="Left Banner" className="img-responsive" /></a> 
           </div>
          </div>
          <div className="col-sm-8 col-lg-9 mtb_20" style={{flex: '2'}}>
          <form enctype="multipart/form-data" method="post" action="#">
            <div className="table-responsive">
              <table className="table table-bordered" style={{width: '100%', border: '1px solid'}}>
                <thead>
                  <tr>
                    <td className="text-center">Image</td>
                    <td className="text-left">Product Name</td>
                    <td className="text-left">Model</td>
                    <td className="text-left">Quantity</td>
                    <td className="text-right">Unit Price</td>
                    <td className="text-right">Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center"><a href="/cart">
                    <img src={product7084} alt="iPod Classic" title="iPod Classic"/></a></td>
                    <td className="text-left"><a href="/singleproduct">iPhone</a></td>
                    <td className="text-left">product 11</td>
                    <td className="text-left">
                      <div className="input-group btn-block">
                        <input type="text" className="form-control quantity" size="1" value="1" name="quantity"/>
                        <span className="input-group-btn">
                      <button className="btn" title="" data-toggle="tooltip" type="submit" data-original-title="Update">&#9769;</button>
                      <button  className="btn btn-danger" title="" data-toggle="tooltip" type="button" data-original-title="Remove">&times;</button>
                      </span></div>
                    </td>
                    <td className="text-right">$254.00</td>
                    <td className="text-right">$254.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
          <h3 className="mtb_10">What would you like to do next?</h3>
          <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
          <div className="panel-group mt_20" id="accordion">
            <div>
              <div className="panel-heading"  style={{cursor: 'pointer', backgroundColor: '#888'}} onClick={handleToogle}>
                <h4 className="panel-title" style={{padding: '10px'}}> 
                <a href="/cart">Use Coupon Code</a>
                </h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in space-side flex-side">
                <div style={{padding: '10px', transition: '2s ease'}} className={toogleDiv ? "input-group show-collapse" : 'input-group hide-collapse'}>
                  <label for="input-coupon" className="col-sm-4 control-label">Enter your coupon here</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="input-coupon" placeholder="Enter your coupon here"  name="coupon"/>
                    <span className="input-group-btn">
                  <input type="button" className="btn" data-loading-text="Loading..." id="button-coupon" value="Apply Coupon"/>
                  </span> </div>
                </div>
              </div>
            </div>
            <div>
              <div className="panel-heading" style={{cursor: 'pointer', backgroundColor: '#888'}} onClick={handleActive}>
                <h4 className="panel-title" style={{padding: '10px'}}> <a href="/cart">Use Gift Voucher</a> </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse  space-side flex-side">
                <div style={{padding: '10px', transition: '2s ease'}} className={activeBtn ? "input-group show-collapse" : 'input-group hide-collapse'} >
                  <label for="input-voucher" className="col-sm-4 control-label">Enter your gift voucher code here</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="input-voucher" placeholder="Enter your gift voucher code here"  name="voucher" />
                    <span className="input-group-btn">
                  <input type="button" className="btn" data-loading-text="Loading..." id="button-voucher" value="Apply Voucher" />
                  </span> </div>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
          <div className="row">
            <div className="col-sm-4 col-sm-offset-8">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="text-right"><strong>Sub-Total:</strong></td>
                    <td className="text-right">$210.00</td>
                  </tr>
                  <tr>
                    <td className="text-right"><strong>Eco Tax (-2.00):</strong></td>
                    <td className="text-right">$2.00</td>
                  </tr>
                  <tr>
                    <td className="text-right"><strong>VAT (20%):</strong></td>
                    <td className="text-right">$42.00</td>
                  </tr>
                  <tr>
                    <td className="text-right"><strong>Total:</strong></td>
                    <td className="text-right">$254.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <form action="index.html">
            <input className="btn pull-left mt_30" type="submit" value="Continue Shopping" />
          </form>
          <form action="checkout.html">
            <input className="btn pull-right mt_30" type="submit" value="Checkout" />
          </form>
        </div> 
        </div>
     
      </div>
        </div>
    )
}

export default Shop
