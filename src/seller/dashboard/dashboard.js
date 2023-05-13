import React from 'react'
import "../dashboard/dashboard.css"

import logo from "../../images/logo 1.png"
import dashboard from "../../images/Group 472.png"
import product from "../../images/Group 469.png"
import category from "../../images/Group 470.png"
import orders from "../../images/Group 592.png"
import photo from "../../images/Rectangle 323.png"
import pending from "../../images/Group 575.png"
import approved from "../../images/Group 571.png"

import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()
  return (
    <div>
        <div className='dashboard'>
            <div className='left'>
                <div className='logo'><img src={logo} alt='logo'></img></div>
                <div className='dashboard_content'>
                <div>
                    <div><img src={dashboard} alt='dashboard'></img></div>
                    <div>Dashboard</div>
                </div>
                <hr></hr>
                <div onClick={() => navigate("/manage products")}>
                    <div><img src={product} alt='product'></img></div>
                    <div className='ages'>Product</div>
                </div>
                <hr></hr>
                <div>
                    <div><img src={category} alt='category'></img></div>
                    <div>Category</div>
                </div>
                <hr></hr>
                <div>
                    <div><img src={orders} alt='orders'></img></div>
                    <div>Orders</div>
                </div>
                <hr></hr>
                </div>
            </div>
            <div className='right'>
                <div className='login_photo'>
                    <div><img src={photo} alt='photo'></img></div>
                    <div><select>
                        <option>John devik</option>
                    </select></div>
                </div>
                <div className='dash_product'>
                    <h1>My Dashboard</h1>
                    <div className='dash'>
                        <div className='line1'></div>
                        <div className='line2'></div>
                    </div>
                    <div>
                        <h4>Products</h4>
                        <div className='product_actions'>
                        <div className='actions'>
                            <div><img src={pending} alt='pending' className='one'></img></div>
                            <div>
                                <div>pending</div>
                                <div>04</div>
                            </div>
                        </div>
                        <div className='actions'>
                            <div><img src={approved} alt='approved' className='two'></img></div>
                            <div>
                                <div>approved</div>
                                <div>16</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <h4>Category</h4>
                        <div className='product_actions'>
                        <div className='actions'>
                            <div><img src={pending} alt='pending' className='one'></img></div>
                            <div>
                                <div>pending</div>
                                <div>04</div>
                            </div>
                        </div>
                        <div className='actions'>
                            <div><img src={approved} alt='approved' className='two'></img></div>
                            <div>
                                <div>approved</div>
                                <div>16</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <h4>Orders</h4>
                        <div className='product_actions'>
                        <div className='actions'>
                            <div><img src={pending} alt='pending' className='one'></img></div>
                            <div>
                                <div>pending</div>
                                <div>04</div>
                            </div>
                        </div>
                        <div className='actions'>
                            <div><img src={approved} alt='approved' className='two'></img></div>
                            <div>
                                <div>approved</div>
                                <div>16</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard