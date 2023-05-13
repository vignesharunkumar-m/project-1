import React from 'react'
import "../wishlist/wishlist.css"
import Header from '../header/header'
import Footer from '../footer/footer';


import ReactStars from "react-rating-stars-component";
import { useNavigate } from 'react-router-dom';

import product1 from "../images/image 20.png"
import product2 from "../images/image 26.png"
import product3 from "../images/image 21.png"
import product4 from "../images/image 22.png"


import cart from "../images/Group 28.png"
import bag from "../images/Group 402.png"
import cancel from "../images/Group 351.png"

function Wishlist() {
    const navigate = useNavigate()
  return (
    <div>
        <Header></Header>
        <div className='contents'><div className='image_overtxt'><h1>Save for later</h1><p className='smalltxt'><span>Home</span><span>/</span><span>Save for later</span></p></div></div>
        <div className='about_heading'>
                <h1>Save for later</h1>
            </div>
            <div className='wishlist_head'>
                <p>Product</p>
                <p>Product name & Rating</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Stock Status</p>
            </div>
            <div className='later_product'>
                <div className='product_detail'>
                    <div className='cart_product'><img src={product1} alt='product1' onClick={() => navigate("/checkout")}></img></div>
                    <div className='product_name'>
                        <div>Lorem ipsum dolor sit amet,</div>
                        <div><span><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></span></div>
                    </div>
                    <div className='p_price'>865.00</div>
                    <div className='butn'>
                        <div>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                        </div>
                    </div>
                    <div className='stock'>In Stock</div>
                    <div className='wish_cart'>
                        <div className='img1'><img src={cart} alt='cart'></img></div>
                        <div className='img2'><img src={bag} alt='bag'></img></div>
                    </div>
                    <div><img src={cancel} alt='cancel'></img></div>
                </div>
                <div className='wishline'></div>
                <div className='product_detail'>
                    <div className='cart_product'><img src={product2} alt='product1'></img></div>
                    <div className='product_name'>
                        <div>Lorem ipsum dolor sit amet,</div>
                        <div><span><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></span></div>
                    </div>
                    <div className='p_price'>865.00</div>
                    <div className='butn'>
                        <div>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                        </div>
                    </div>
                    <div className='stock'>In Stock</div>
                    <div className='wish_cart'>
                        <div className='img1'><img src={cart} alt='cart'></img></div>
                        <div className='img2'><img src={bag} alt='bag'></img></div>
                    </div>
                    <div><img src={cancel} alt='cancel'></img></div>
                </div>
                <div className='wishline'></div>
                <div className='product_detail'>
                    <div className='cart_product'><img src={product3} alt='product1'></img></div>
                    <div className='product_name'>
                        <div>Lorem ipsum dolor sit amet,</div>
                        <div><span><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></span></div>
                    </div>
                    <div className='p_price'>865.00</div>
                    <div className='butn'>
                        <div>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                        </div>
                    </div>
                    <div className='stock'>In Stock</div>
                    <div className='wish_cart'>
                        <div className='img1'><img src={cart} alt='cart'></img></div>
                        <div className='img2'><img src={bag} alt='bag'></img></div>
                    </div>
                    <div><img src={cancel} alt='cancel'></img></div>
                </div>
                <div className='wishline'></div>
                <div className='product_detail'>
                    <div className='cart_product'><img src={product4} alt='product1'></img></div>
                    <div className='product_name'>
                        <div>Lorem ipsum dolor sit amet,</div>
                        <div><span><ReactStars emptyIcon={<i className='far fa-star'></i>} ></ReactStars></span></div>
                    </div>
                    <div className='p_price'>865.00</div>
                    <div className='butn'>
                        <div>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                        </div>
                    </div>
                    <div className='stock'>In Stock</div>
                    <div className='wish_cart'>
                        <div className='img1'><img src={cart} alt='cart'></img></div>
                        <div className='img2'><img src={bag} alt='bag'></img></div>
                    </div>
                    <div><img src={cancel} alt='cancel'></img></div>
                </div>
                <div className='wishline'></div>
            </div>
            <Footer></Footer>
    </div>
  )
}

export default Wishlist