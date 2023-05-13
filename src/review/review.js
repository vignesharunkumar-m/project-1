import React from 'react'
import "../review/review.css"

import Header from '../header/header';
import Footer from '../footer/footer';

import ReactStars from "react-rating-stars-component";
import venticare from "../images/image 21(1).png"
import cart from "../images/Group 28.png"
import reviewperson from "../images/unsplash_fSlay1r8uJQ.png"
import product1 from "../images/image 20.png"
import product2 from "../images/image 21.png"
import product3 from "../images/image 22.png"
import product4 from "../images/image 23.png"

import { useNavigate } from 'react-router-dom';

function Review() {
    const navigate = useNavigate()
    return (
        <div>
            <Header></Header>
            <div className='contents'><div className='image_overtxt'><h1>Consumable & Disposable</h1><p className='smalltxt'><span>Home</span><span>/</span><span>Consumable & Disposable</span></p></div></div>
            <div className='specification'>
                <div className='viewimg'>
                    <img src={venticare} alt='venticare'></img>
                </div>
                <div className='img_rightTxt'>
                    <h1>Kabala Sodium Citrate Blue 3.2 Percentage 2ml</h1>
                    <div className='customer_review'>
                        <span><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></span>
                        <span>(1 Customer Review)</span>
                    </div>
                    <h1 className='price'>&#8377; 10,000</h1>
                    <div className='border'></div>
                    <div className='span_tags'>
                        <div className='split_span'>
                            <span>Sold By: Kabala Healthe Pvt.Ltd</span>
                            <span>GST 18 %: &#8377; 1800 </span>
                        </div>
                        <div>
                            <span>HSN Code</span>
                            <span>90189032</span>
                        </div>
                    </div>
                    <div>
                        <h3>Features:</h3>
                        <ul>
                            <li>Sodium Citrate 3.2%</li>
                            <li>Used in clinical laboratories and blood banks</li>
                            <li>Used as anticoagulant for coagulation test</li>
                        </ul>
                        <h4>In stock</h4>
                    </div>
                </div>
            </div>
            <div className='specification2'>
                <div className='preview_img'>
                    <div><img src={venticare} alt='venticare'></img></div>
                    <div><img src={venticare} alt='venticare'></img></div>
                    <div><img src={venticare} alt='venticare'></img></div>
                </div>
                <div className='btn'>
                    <div className='btn1'>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                    <div className='btn2'>
                        <button className='cart'>
                            <div><img src={cart} alt='cart'></img></div>
                            <div>Add to Cart</div>
                        </button>
                    </div>
                    <div className='btn3'>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='spec_heading'>
                <h1>Specification</h1>
                <h1>Reviews(1)</h1>
            </div>
            <div className='review_line'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
            <div className='spec_heading'>
                <h3>1 review for OxyGo Oxygen Portable Kit </h3>
            </div>
            <div className='review'>
                <div className='review_img'>
                    <div><img src={reviewperson} alt='reviewperson'></img></div>
                    <div className='reviewer_name'>
                        <span><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></span>
                        <p>Mr.Janson(Loum ipsum)</p>
                    </div>
                </div>
                <div className='review_txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas amet odio leo morbi tincidunt posuere in. Neque fusce lobortis ultricies pellentesque fringilla phasellus tristique. Ut nulla enim praesent id convallis luctus. Venenatis elit habitant morbi nisi montes, arcu. Et bibendum lacus ultricies nunc arcu, velit. Lacinia pulvinar dui semper non eu at nunc praesent. Maecenas quis est enim, sed nibh at orci neque purus. </div>
            </div>
            <div className='spec_heading'>
                <h3>Add a review </h3>
            </div>
            <div className='add_line'></div>
            <div className='review_heading'>
                <p>Your rating of this product </p>
            </div>
            <div className='name_mail'>
                <div className='name'>
                    <p>Name</p>
                    <input></input>
                </div>
                <div className='mail'>
                    <p>Email</p>
                    <input></input>
                </div>
            </div>
            <div className='write_review'>
                <p>Write your review here</p>
                <input></input>
            </div>
            <div className='review_btn'><button onClick={() => navigate("/contact us")}>SUBMIT REVIEW</button></div>
            <div className='spec_heading'>
                <h1>Related Products</h1>
            </div>
            <div className='head_line'>
                <div className='lineyellow'></div>
                <div className='linegrey'></div>
            </div>
            <div className='product_container'>
                <div className='product'>
                    <div className='product_img'><img src={product1} alt="product1"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                    <div className='price'>
                        <span>&#8377; 20.44</span>
                        <span>&#8377; 10.44</span>
                    </div>
                    <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product2} alt="product1"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                    <div className='price'>
                        <span>&#8377; 20.44</span>
                        <span>&#8377; 10.44</span>
                    </div>
                    <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product3} alt="product1"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                    <div className='price'>
                        <span>&#8377; 20.44</span>
                        <span>&#8377; 10.44</span>
                    </div>
                    <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product4} alt="product1"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                    <div className='price'>
                        <span>&#8377; 20.44</span>
                        <span>&#8377; 10.44</span>
                    </div>
                    <div className='rating'><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Review