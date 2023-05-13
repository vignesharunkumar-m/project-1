import React from 'react'
import "../categories/categories.css"

import Header from '../header/header'
import Footer from '../footer/footer'

import product1 from "../images/image 20.png"
import product2 from "../images/image 21.png"
import product3 from "../images/image 22.png"
import product4 from "../images/image 23.png"
import product5 from "../images/image 24.png"
import product6 from "../images/image 55.png"
import product7 from "../images/image 26.png"
import product8 from "../images/image 27.png"
import product9 from "../images/image 54.png"
import product10 from "../images/image 25.png"
import product11 from "../images/image 56.png"
import product12 from "../images/image 57.png"
import { useNavigate } from 'react-router-dom'


function Categories() {
    const navigate = useNavigate()
    return (
        <div>
            <Header></Header>
            <div>
                <div className='categorie_img'><div className='image_over_txt'><h1 onClick={() => navigate("/products")}>Shop</h1><p><span>Home</span><span>/</span><span>Shop</span></p></div></div>
                <div className='heading'><h2>Categories</h2></div>
                <div className='line'>
                    <div className='lineyellow'></div>
                    <div className='linegrey'></div>
                </div>
            </div>
            <div className='product_container'>
                <div className='product'>
                    <div className='product_img'><img src={product1} alt="product1"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product2} alt="product2" className='product2'></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product3} alt="product3"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product4} alt="product4"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product5} alt="product5"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product6} alt="product6"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product7} alt="product7"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product8} alt="product8"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product9} alt="product9"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product10} alt="product10"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product11} alt="product11"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
                <div className='product'>
                    <div className='product_img'><img src={product12} alt="product12"></img></div>
                    <h5>Venticare Nebullizer Mask</h5>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Categories