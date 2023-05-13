import React from 'react'
import "../checkout/checkout.css"

import Header from '../header/header'
import Footer from '../footer/footer'

import { useNavigate } from 'react-router-dom'

function Checkout() {
    const navigate = useNavigate()
    return (
        <div>
            <Header></Header>
            <div className='contents'><div className='image_overtxt'><h1>CheckOut</h1><p className='smalltxt'><span>Home</span><span>/</span><span>CheckOut</span></p></div></div>
            <div className='about_heading'>
                <h1>YOUR ORDER</h1>
            </div>
            <div className='about_line'>
                <div className=' line1'></div>
                <div className='line2'></div>
            </div>
            <div className='checkout'>
                <div className='content1'>
                    <table>
                        <tr>
                            <th>S.NO</th>
                            <th>PRODUCT</th>
                            <th>QTY</th>
                            <th>TOTAL</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>lorem ipsum dummy sample</td>
                            <td>01</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>lorem ipsum dummy sample</td>
                            <td>01</td>
                            <td>256</td>
                        </tr>
                        
                        <tr>
                            <td>03</td>
                            <td>lorem ipsum dummy sample</td>
                            <td>01</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td colSpan="3">CART SUBTOTAL</td>
                            <td>456</td>
                        </tr>
                        <tr>
                            <td colSpan="3">SHIPPING & HANDLING</td>
                            <td>456</td>
                        </tr>
                        <tr>
                            <td colSpan="3">GST</td>
                            <td>456</td>
                        </tr>
                        <tr>
                            <td colSpan="3">GRAND TOTAL</td>
                            <td>456</td>
                        </tr>
                    </table>
                </div>
                <div className='content2'>
                <div className='one'>
                    <select>
                        <option>BILLING</option>
                    </select>
                    <div className='two'>
                    <div>Hospital</div>
                    <div>clinic</div>
                    <div>Warehouse</div>
                    </div>
                </div>
                <div className='one'>
                <select>
                        <option>SHIPPING</option>
                    </select>
                    <div className='two'>
                    <div>Hospital</div>
                    <div>clinic</div>
                    <div>Warehouse</div>
                    </div>
                </div>
                </div>
            </div>
            <div className='about_heading'>
                <h1>PAYMENT METHOD</h1>
            </div>
            <div className='about_line'>
                <div className=' line1'></div>
                <div className='line2'></div>
            </div>
            <div className='payment'>  
                <div><input type='checkbox'></input>Paypal</div>
                <div className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu pretium, rhoncus sapien etiam at egestas vel platea 
sed. Consequat consectetur porttitor tincidunt adipiscing at arcu. Enim penatibus pharetra, amet quis. Et ultricies consequat consectetur porttitor tincidunt</div>
            <div><button onClick={() => navigate("/guest check out")}>Place Order</button></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Checkout