import React from 'react'
import "../orderdetails/order_detail_view.css"

function Order_details_view() {
    return (
        <div>
            <div className='add_product'>
                <div>
                    <h1>ORDER DETAIL VIEW</h1>
                </div>
                <div className='regi_line'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                </div>
                <div className='order_detail'>
                    <div>
                        <span>order id:</span>
                        <span>123456</span>
                    </div>
                    <div>
                        <span>order Date:</span>
                        <span>15-06-2022</span>
                    </div>
                    <div>
                        <span>Order Status</span>
                    </div>
                    <div className='select'><select><option>pending</option></select></div>
                </div>
                <div className='bill_ship'>
                <div className='order_add'>
                    <div>
                        <h4>Billing Address</h4>
                        <div className='address_line'>
                            <div className='line1'></div>
                            <div className='line2'></div>
                        </div>
                        <div className='add_table'>
                            <thead>
                                <table>
                                    <tr>
                                        <td>Name:</td>
                                        <td>John durairaj</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>lorumipsum@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile no:</td>
                                        <td>+91 98765 43210</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>lorum ipsum simple dummy text of the typing <br></br>
                                            industry lorum ipsum simple dummy</td>
                                    </tr>
                                </table>
                            </thead>
                        </div>
                    </div>
                </div>
                <div className='order_add'>
                    <div>
                        <h4>Billing Address</h4>
                        <div className='address_line'>
                            <div className='line1'></div>
                            <div className='line2'></div>
                        </div>
                        <div className='add_table'>
                            <thead>
                                <table>
                                    <tr>
                                        <td>Name:</td>
                                        <td>John durairaj</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>lorumipsum@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile no:</td>
                                        <td>+91 98765 43210</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>lorum ipsum simple dummy text of the typing <br></br>
                                            industry lorum ipsum simple dummy</td>
                                    </tr>
                                </table>
                            </thead>
                        </div>
                    </div>
                </div>
                </div>
                <div className='order_table'>
                    <thead>
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Order id</th>
                            <th>Product Name</th>
                            <th>Qty</th>
                            <th>Status</th>
                            <th>Shipping</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>13324</td>
                            <td>Elizabeth-Ann O'Neill</td>
                            <td>₹ 256.00</td>
                            <td>02</td>
                            <td>pending</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>13324</td>
                            <td>Elizabeth-Ann O'Neill</td>
                            <td>₹ 256.00</td>
                            <td>received</td>
                            <td>pending</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>13324</td>
                            <td>Elizabeth-Ann O'Neill</td>
                            <td>₹ 256.00</td>
                            <td>received</td>
                            <td>pending</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>13324</td>
                            <td>Elizabeth-Ann O'Neill</td>
                            <td>₹ 256.00</td>
                            <td>received</td>
                            <td>pending</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>13324</td>
                            <td>Elizabeth-Ann O'Neill</td>
                            <td>₹ 256.00</td>
                            <td>received</td>
                            <td>pending</td>
                        </tr>
                    </table>
                </thead>
                    </div>
                    <div className='order_total'>
                        <div>
                            <span>TOTAL -   </span>
                            <span> ₹ 14000.00</span>
                        </div>
                        <div>
                            <span>IGST -</span>
                            <span> ₹ 14000.00</span>
                        </div>
                        <div>
                            <span>GRAND Total - </span>
                            <span> ₹ 14000.00</span>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Order_details_view