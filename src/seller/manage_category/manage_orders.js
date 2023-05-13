import React from 'react'
import "../manage_category/manage_category.css"

import uploadphoto from "../../images/Group 458.png"

import { useNavigate } from 'react-router-dom'

function Manage_orders() {
    const navigate = useNavigate()
  return (
    <div>
        <div className='order'>
            <div className='order_content'>
                <div><h1>MANAGE ORDERS</h1></div>
                <div className='sec'>
                    <h3>Category Name</h3>
                    <div className='order_input'>
                        <div><input placeholder='type here.......'></input></div>
                        <div><img src={uploadphoto} alt='uploadphoto'></img>Upload image</div>
                    </div>
                    <div><button onClick={() => navigate("/seller order")}>Submit</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Manage_orders