import React from 'react'
import "../specification/specification.css"

import ReactStars from "react-rating-stars-component";


import Header from '../header/header'
import Footer from '../footer/footer';
import venticare from "../images/image 21(1).png"
import cart from "../images/Group 28.png"
import product1 from "../images/image 20.png"
import product2 from "../images/image 21.png"
import product3 from "../images/image 22.png"
import product4 from "../images/image 23.png"
import { useNavigate } from 'react-router-dom';

function Specification() {
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
                <h1 onClick={() => navigate("/review")}>Reviews(1)</h1>
            </div>
            <div className='head_line'>
                <div className='lineyellow'></div>
                <div className='linegrey'></div>
            </div>
            <div className='spec_conatiner'>
                <div className='spec_details'>
                    <div className='txt_left_right'>
                        <h5>Brand</h5>
                        <h5>Kabala</h5>
                    </div>
                </div>
                <div className='spec_details'>
                    <div className='txt_left_right'>
                        <h5>Country of Orgin</h5>
                        <h5>India</h5>
                    </div>
                </div>
                <div className='spec_details'>
                    <div className='txt_left_right'>
                        <h5>Description</h5>
                        <h5>Specifications:<br />Quantity : 2 mlColor:blue</h5>
                    </div>
                </div>
                <div className='spec_details'>
                    <div className='txt_left_right'>
                        <h5>Seller</h5>
                        <h5>Kabala Health Pvt.Ltd</h5>
                    </div>
                </div>
                <div className='spec_details'>
                    <div className='txt_left_right'>
                        <h5>Pack Type</h5>
                        <h5>Pack</h5>
                    </div>
                </div>
                <div className='spec_details'>
                    <div className='txt_left_right'>
                        <h5>Pack Size</h5>
                        <h5>1</h5>
                    </div>
                </div>
                <div className='spec_details'>
                    <div className='txt_left_right'>
                        <h5>Pack UOM</h5>
                        <h5>each</h5>
                    </div>
                </div>
            </div>
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

export default Specification;