import React from 'react'
import "../manage_category/manage_category.css"


import logo from "../../images/logo 1.png"
import dashboard from "../../images/Group 472.png"
import product from "../../images/Group 469.png"
import category from "../../images/Group 470.png"
import orders from "../../images/Group 592.png"
import photo from "../../images/Rectangle 323.png"
import search from "../../images/Group 15.png"
import eye1 from "../../images/Group 586.png"

import { useNavigate } from 'react-router-dom'

function Manage_category() {
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
                <div>
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
                    <h1>Manage Category</h1>
                    <div className='manage_pro'>
                        <div className='line1'></div>
                        <div className='line2'></div>
                    </div>
                    <div className='category_detail'>
                        <div>category name</div>
                        <div><img src={search} alt='search' onClick={() => navigate("/manage order")}></img></div>
                    </div>
                    <div className='manage_table'>
                    <thead>
                    <tbody>
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Ctaegory Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>13324</td>
                            <td>Medevis 2-Way Foley Balloon Catheter 6FR Pack of 10</td>
                            <td><img src={eye1} alt='eye1'></img></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>13324</td>
                            <td>Medevis 2-Way Foley Balloon Catheter 6FR Pack of 10</td>
                            <td><img src={eye1} alt='eye1'></img></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>13324</td>
                            <td>Medevis 2-Way Foley Balloon Catheter 6FR Pack of 10</td>
                            <td><img src={eye1} alt='eye1'></img></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>13324</td>
                            <td>Medevis 2-Way Foley Balloon Catheter 6FR Pack of 10</td>
                            <td><img src={eye1} alt='eye1'></img></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>13324</td>
                            <td>Medevis 2-Way Foley Balloon Catheter 6FR Pack of 10</td>
                            <td><img src={eye1} alt='eye1'></img></td>
                        </tr>
                    </table>
                    </tbody>
                </thead>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Manage_category