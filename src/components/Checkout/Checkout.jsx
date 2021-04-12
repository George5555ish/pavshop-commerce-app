import React, {useState} from 'react';

import leftBanner from "../../images/left1.jpg";


import './styles.css'



const Shop = () => {

  const [collapseDiv, setCollapseDiv] = useState(true);
  const [collapseDiv2, setCollapseDiv2] = useState(true);

  const handleCollapse = () => {
    setCollapseDiv(!collapseDiv)
  }
  const handleCollapse2 = () => {
    setCollapseDiv2(!collapseDiv2)
  }
    return (
        <div>
            <div class="row margin-div">
        
        <div>
          <div class="breadcrumb ptb_20">
            <h1>New LCDScreen...</h1>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="category_page.html">Products</a></li>
              <li class="active">New LCDS...</li>
            </ul>
          </div>
        </div>
     
        <div id="column-left" class="col-sm-4 col-lg-3 hidden-xs flex-side space-side" style={{marginTop: "20px"}}>
          <div id="category-menu" class="navbar collapse in mb_40" aria-expanded="true" role="button" style={{flex: '1'}}>
            <div class="nav-responsive">
              <div class="heading-part">
                <h2 class="main_title">Top category</h2>
              </div>
              <ul class="nav  main-navigation collapse in">
                <li><a href="/checkout">Appliances</a></li>
                <li><a href="/checkout">Mobile Phones</a></li>
                <li><a href="/checkout">Tablet PC & Accessories</a></li>
                <li><a href="/checkout">Consumer Electronics</a></li>
                <li><a href="/checkout">Computers & Networking</a></li>
                <li><a href="/checkout">Electrical & Tools</a></li>
                <li><a href="/checkout">Apparel</a></li>
                <li><a href="/checkout">Bags & Shoes</a></li>
                <li><a href="/checkout">Toys & Hobbies</a></li>
                <li><a href="/checkout">Watches & Jewelry</a></li>
                <li><a href="/checkout">Home & Garden</a></li>
                <li><a href="/checkout">Health & Beauty</a></li>
                <li><a href="/checkout">Outdoors & Sports</a></li>
              </ul>
            </div>

            <div class="left_banner left-sidebar-widget mt_30 mb_40">
           <a href="/checkout"><img src={leftBanner} alt="Left Banner" class="img-responsive" /></a> 
           </div>
          </div>
          

          <div class="col-sm-8 col-lg-9 mtb_20" style={{flex: '2', margin: '10px'}}>


          {/* Checkout Option 1 */}
             <div className="collapse-checkout" style={{border: '1px solid', cursor: 'pointer'}}>
                <div className="flex-side align-side space-side" style={{background: "#888", padding: '10px', color: '#fff'}} onClick={handleCollapse}>
                   <h3>Checkout Options</h3>  
                   <p style={{fontSize: '20px'}}>&dArr;</p>
                </div>
               

               <div className={collapseDiv ? "collapse-item" : "show-item"}>
               <div id="collapseOne" class="panel-collapse collapse in">
                <div class="panel-body">
                  <div class="row flex-side align-side" style={{backgroundColor: '#fff'}}>
                    <div class="col-sm-6" style={{width: '350px', textAlign: 'left', padding: '10px'}}>
                      <h3>New Customer</h3>
                      <p>Checkout Options:</p>
                      <div class="radio">
                        <label>
                          <input type="radio" checked="checked" value="register" name="account"/> Register Account</label>
                      </div>
                      <div class="radio">
                        <label>
                          <input type="radio" value="guest" name="account"/> Guest Checkout</label>
                      </div>
                      <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                      <input type="button" class="btn mt_20" data-loading-text="Loading..." id="button-account" value="Continue"/>
                    </div>
                    <div class="col-sm-6" style={{width: '300px', marginleft: '20px'}}>
                      <h3>Returning Customer</h3>
                      <p>I am a returning customer</p>
                      <div class="form-group" style={{display: 'flex', flexDirection: 'column'}}>
                        <label for="input-email" class="control-label">E-Mail</label>
                        <input type="text" class="form-control" id="input-email" placeholder="E-Mail" value="" name="email"/>
                      </div>
                      <div class="form-group" style={{display: 'flex', flexDirection: 'column'}}>
                        <label for="input-password" class="control-label">Password</label>
                        <input type="password" class="form-control" id="input-password" placeholder="Password" value="" name="password"/>
                        <input type="button" class="btn" data-loading-text="Loading..." id="button-login" value="Login"/>
                        <a class="pt_30" href="/checkout">Forgotten Password</a></div>
                    </div>
                  </div>
                </div>
              </div>
               </div>
                <div>

                </div>
             </div>

        {/* Checkout option 2 */}
             
             <div className="collapse-checkout" style={{ cursor: 'pointer'}}>
                <div className="flex-side align-side space-side" style={{background: "#888", padding: '10px', color: '#fff'}} onClick={handleCollapse2}>
                   <h3>Checkout Option 2</h3>  
                   <p style={{fontSize: '20px'}}>&dArr;</p>
                </div>
               

               <div className={collapseDiv2 ? "collapse-item" : "show-item"}>
               <div id="collapseOne" class="panel-collapse collapse in">
                <div class="panel-body">
                  <div class="row flex-side align-side" style={{backgroundColor: '#fff'}}>
                    <div class="col-sm-6" style={{width: '350px', textAlign: 'left', padding: '10px'}}>
                      <h3>New Customer</h3>
                      <p>Checkout Options:</p>
                      <div class="radio">
                        <label>
                          <input type="radio" checked="checked" value="register" name="account"/> Register Account</label>
                      </div>
                      <div class="radio">
                        <label>
                          <input type="radio" value="guest" name="account"/> Guest Checkout</label>
                      </div>
                      <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                      <input type="button" class="btn mt_20" data-loading-text="Loading..." id="button-account" value="Continue"/>
                    </div>
                    <div class="col-sm-6" style={{width: '300px', marginleft: '20px'}}>
                      <h3>Returning Customer</h3>
                      <p>I am a returning customer</p>
                      <div class="form-group" style={{display: 'flex', flexDirection: 'column'}}>
                        <label for="input-email" class="control-label">E-Mail</label>
                        <input type="text" class="form-control" id="input-email" placeholder="E-Mail" value="" name="email"/>
                      </div>
                      <div class="form-group" style={{display: 'flex', flexDirection: 'column'}}>
                        <label for="input-password" class="control-label">Password</label>
                        <input type="password" class="form-control" id="input-password" placeholder="Password" value="" name="password"/>
                        <input type="button" class="btn" data-loading-text="Loading..." id="button-login" value="Login"/>
                        <a class="pt_30" href="/checkout">Forgotten Password</a></div>
                    </div>
                  </div>
                </div>
              </div>
               </div>
                <div>

                </div>
             </div>
          </div>
        </div>
     
      </div>
        </div>
    )
}

export default Shop
