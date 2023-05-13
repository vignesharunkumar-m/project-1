import React from 'react'
import "../products/product.css"

import Header from '../header/header'
import Footer from '../footer/footer';
import ReactStars from "react-rating-stars-component";

import product1 from "../images/image 20(1).png"
import product2 from "../images/image 21(1).png"
import product3 from "../images/image 22(1).png"
import product4 from "../images/image 23(1).png"
import product5 from "../images/image 24(1).png"
import product6 from "../images/image 25(1).png"
import product7 from "../images/image 26(1).png"
import product8 from "../images/image 27(1).png"
import product9 from "../images/image 28.png"

import { useNavigate } from 'react-router-dom';


function Product() {
    const navigate = useNavigate()
    return (
        <div>
            <Header></Header>
            <div className='contents'><div className='image_overtxt'><h1>Consumable & Disposable</h1><p className='smalltxt'><span>Home</span><span>/</span><span>Consumable & Disposable</span></p></div></div>
            <div className='filtertxt'>
                <h2>FILTER BY</h2>
                <div className='product_numbers'><p>Showing 24 out of 10000 products</p></div>
            </div>
            <div className='lines'>
                <div className='line1'></div>
                <div className='line2'></div>
            </div>
            <div className='check_product'>
                <div className='checkboxs'>
                    <h4>Brand</h4>
                    <div>
                        <input type='checkbox'></input>
                        <label>1mile</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>3M</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>A&D</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>Aadarsh</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>Aadarsh Surgical</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>Abbott</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>ABN</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>Accu-Chek</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>Accurex</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>AccuSure</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>Ad-ducer</label>
                    </div>
                    <div className='pricerange'>
                        <h4>Price</h4>
                        <p>&#8377; 20.44 - &#8377; 40,000</p>
                        <input type='range'></input>
                    </div>
                    <div>
                        <h4>Customer Rating</h4>
                        <div className='customer_rating'>
                            <input type='checkbox'></input>
                            <span className='rating'>
                                <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>(5)
                            </span>
                        </div>
                        <div>
                            <input type='checkbox'></input>
                            <span className='rating'>
                                <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>(4)
                            </span>
                        </div>
                        <div>
                            <input type='checkbox'></input>
                            <span className='rating'>
                                <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>(2)
                            </span>
                        </div>
                        <div>
                            <input type='checkbox'></input>
                            <span className='rating'>
                                <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>(3)
                            </span>
                        </div>
                        <div>
                            <input type='checkbox'></input>
                            <span className='rating'>
                                <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>(1)
                            </span>
                        </div>
                    </div>
                </div>
                <div className='product_containerssss'>
                    <div className='product'>
                        <div className='product_img' ><img src={product1} alt="product1"></img></div>
                        <h5>Venticare Nebullizer Mask</h5>
                        <div className='price'>
                            <span>&#8377; 20.44</span>
                            <span>&#8377; 10.44</span>
                        </div>
                        <div className='rating'>
                            <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product_img' onClick={() => navigate("/specifications")}><img src={product2} alt="product2" className='product2'></img></div>
                        <h5>Venticare Nebullizer Mask</h5>
                        <div className='price'>
                            <span>&#8377; 20.44</span>
                            <span>&#8377; 10.44</span>
                        </div>
                        <div className='rating'>
                            <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product_img'><img src={product3} alt="product3"></img></div>
                        <h5>Venticare Nebullizer Mask</h5>
                        <div className='price'>
                            <span>&#8377; 20.44</span>
                            <span>&#8377; 10.44</span>
                        </div>
                        <div className='rating'>
                            <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product_img'><img src={product4} alt="product4"></img></div>
                        <h5>Venticare Nebullizer Mask</h5>
                        <div className='price'>
                            <span>&#8377; 20.44</span>
                            <span>&#8377; 10.44</span>
                        </div>
                        <div className='rating'>
                            <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product_img'><img src={product5} alt="product5"></img></div>
                        <h5>Venticare Nebullizer Mask</h5>
                        <div className='price'>
                            <span>&#8377; 20.44</span>
                            <span>&#8377; 10.44</span>
                        </div>
                        <div className='rating'>
                            <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product_img'><img src={product6} alt="product6"></img></div>
                        <h5>Venticare Nebullizer Mask</h5>
                        <div className='price'>
                            <span>&#8377; 20.44</span>
                            <span>&#8377; 10.44</span>
                        </div>
                        <div className='rating'>
                            <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product_img'><img src={product7} alt="product7"></img></div>
                        <h5>Venticare Nebullizer Mask</h5>
                        <div className='price'>
                            <span>&#8377; 20.44</span>
                            <span>&#8377; 10.44</span>
                        </div>
                        <div className='rating'>
                            <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product_img'><img src={product8} alt="product8"></img></div>
                        <h5>Venticare Nebullizer Mask</h5>
                        <div className='price'>
                            <span>&#8377; 20.44</span>
                            <span>&#8377; 10.44</span>
                        </div>
                        <div className='rating'>
                            <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product_img'><img src={product9} alt="product9"></img></div>
                        <h5>Venticare Nebullizer Mask</h5>
                        <div className='price'>
                            <span>&#8377; 20.44</span>
                            <span>&#8377; 10.44</span>
                        </div>
                        <div className='rating'>
                            <ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Product