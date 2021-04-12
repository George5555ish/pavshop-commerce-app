import React, {useState, useEffect} from 'react';
import blogImg4 from "../../images/blog/blog_img_04.jpg";
import blogImg5 from "../../images/blog/blog_img_05.jpg";
import blogImg6 from "../../images/blog/blog_img_06.jpg";
import blogImg7 from "../../images/blog/blog_img_07.jpg";
import blogImg8 from "../../images/blog/blog_img_08.jpg";
import blogImg1 from "../../images/blog/blog_img_01.jpg";
import blogImg2 from "../../images/blog/blog_img_02.jpg";
import blogImg3 from "../../images/blog/blog_img_03.jpg";

import leftBanner from "../../images/left1.jpg";

import './styles.css'




const Blog = () => {

  
const [showLoderBlog, setShowLoderBlog] = useState(true)

useEffect(() => {
  setShowLoderBlog(false)
 
}, [showLoderBlog])


    return (
        <div>
            <div className="row margin-div">
            {showLoderBlog && <div className="loder"></div>}
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
                <li><a href="/blog">Appliances</a></li>
                <li><a href="/blog">Mobile Phones</a></li>
                <li><a href="/blog">Tablet PC & Accessories</a></li>
                <li><a href="/blog">Consumer Electronics</a></li>
                <li><a href="/blog">Computers & Networking</a></li>
                <li><a href="/blog">Electrical & Tools</a></li>
                <li><a href="/blog">Apparel</a></li>
                <li><a href="/blog">Bags & Shoes</a></li>
                <li><a href="/blog">Toys & Hobbies</a></li>
                <li><a href="/blog">Watches & Jewelry</a></li>
                <li><a href="/blog">Home & Garden</a></li>
                <li><a href="/blog">Health & Beauty</a></li>
                <li><a href="/blog">Outdoors & Sports</a></li>
              </ul>
            </div>

            <div className="left_banner left-sidebar-widget mt_30 mb_40">
           <a href="/blog"><img src={leftBanner} alt="Left Banner" className="img-responsive" /></a> 
           </div>
          </div>
     
          <div className="col-sm-8 col-lg-9 mtb_20" style={{flex: 3}}>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><a href="/singleproduct"> <img src={blogImg4}  alt="themini"/></a></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true"></i></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <a href="/singleproduct">Fashions fade, style is eternal</a> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20 flex-side align-side">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                    <div className="more pull-right"> <a href="/singleproduct">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><a href="/singleproduct"> <img src={blogImg5}  alt="themini"/></a></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true"></i></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <a href="/singleproduct">Fashions fade, style is eternal</a> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                    <div className="more pull-right"> <a href="/singleproduct">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><a href="/singleproduct"> <img src={blogImg6}   alt="themini"/></a></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true"></i></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <a href="/singleproduct">Fashions fade, style is eternal</a> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                    <div className="more pull-right"> <a href="/singleproduct">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><a href="/singleproduct"> <img src={blogImg7}  alt="themini"/></a></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true"></i></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <a href="/singleproduct">Fashions fade, style is eternal</a> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                    <div className="more pull-right"> <a href="/singleproduct">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><a href="/singleproduct"> <img src={blogImg8}   alt="themini"/></a></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true"></i></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <a href="/singleproduct">Fashions fade, style is eternal</a> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                    <div className="more pull-right"> <a href="/singleproduct">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><a href="/singleproduct"> <img src={blogImg1}  alt="themini"/></a></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true"></i></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <a href="/singleproduct">Fashions fade, style is eternal</a> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                    <div className="more pull-right"> <a href="/singleproduct">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><a href="/singleproduct"> <img src={blogImg2}  alt="themini"/></a></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true"></i></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <a href="/singleproduct">Fashions fade, style is eternal</a> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                    <div className="more pull-right"> <a href="/singleproduct">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-item col-md-6 mb_30">
                <div className="post-format">
                  <div className="thumb post-img"><a href="/singleproduct"> <img src={blogImg3}   alt="themini"/></a></div>
                  <div className="post-type"><i className="fa fa-music" aria-hidden="true"></i></div>
                </div>
                <div className="post-info mtb_20 ">
                  <h3 className="mb_10"> <a href="/singleproduct">Fashions fade, style is eternal</a> </h3>
                  <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                  <div className="details mtb_20">
                    <div className="date pull-left"> <i className="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                    <div className="more pull-right"> <a href="/singleproduct">Read more <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-nav text-center mtb_20">
            <ul>
              <li><a href="/blog"><i className="fa fa-angle-left"></i></a></li>
              <li className="active"><a href="/blog">1</a></li>
              <li><a href="/blog">2</a></li>
              <li><a href="/blog">3</a></li>
              <li><a href="/blog"><i className="fa fa-angle-right"></i></a></li>
            </ul>
          </div>
        </div>

        </div>
     
      </div>
        </div>
    )
}

export default Blog
