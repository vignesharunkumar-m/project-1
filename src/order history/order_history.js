import React from 'react'
import "../order history/order_history.css"

import Header from '../header/header'
import Footer from '../footer/footer'

import { useNavigate } from 'react-router-dom'

function Order_history() {
    const navigate = useNavigate()
  return (
    <div>
        <Header></Header>
        <div>
                <div className='order_history_img'><div className='image_over_txt'><h1 onClick={() => navigate("/seller login")}>ORDER HISTORY</h1><p><span>Home</span><span>/</span><span>ORDER HISTORY</span></p></div></div>
            </div>
        <div className='about_heading'>
                <h1>ORDER HISTORY</h1>
            </div>
            <div className='about_line'>
                <div className=' line1'></div>
                <div className='line2'></div>
            </div>
            <div className='order_history'>
                <table>
                    <thead>
                        <tr>
                            <th>Order no</th>
                            <th>Date</th>
                            <th>Iteams</th>
                            <th>Shipping to</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td>SO-13324</td>
                            <td>17-05-2022</td>
                            <td>1</td>
                            <td>clinic</td>
                            <td>256.00</td>
                        </tr>
                        <tr>
                            <td>SO-13324</td>
                            <td>17-05-2022</td>
                            <td>1</td>
                            <td>clinic</td>
                            <td>256.00</td>
                        </tr>
                        <tr>
                            <td>SO-13324</td>
                            <td>17-05-2022</td>
                            <td>1</td>
                            <td>clinic</td>
                            <td>256.00</td>
                        </tr>
                        <tr>
                            <td>SO-13324</td>
                            <td>17-05-2022</td>
                            <td>1</td>
                            <td>clinic</td>
                            <td>256.00</td>
                        </tr>
                        <tr>
                            <td>SO-13324</td>
                            <td>17-05-2022</td>
                            <td>1</td>
                            <td>clinic</td>
                            <td>256.00</td>
                        </tr>
                    </thead>
                </table>
            </div>
            <Footer></Footer>
    </div>
  )
}

export default Order_history