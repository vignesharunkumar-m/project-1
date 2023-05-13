import React from 'react'
import "../add product/add_product.css"


import { useNavigate } from 'react-router-dom'

function Add_product() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='add_product'>
            <div>
                <h1>NEW PRODUCT</h1>
            </div>
            <div className='regi_line'>
                <div className='line1'></div>
                <div className='line2'></div>
            </div>
            <div className='checkboxs'>
                <select><option>Category</option></select>
            </div>
            <div className='seller_input'>
                <div>
                    <div>Product Name</div>
                    <input></input>
                </div>
                <div>
                    <div>Product id</div>
                    <input></input>
                </div>
                <div>
                    <div>Manufacturer</div>
                    <input></input>
                </div>
                <div>
                    <div>Country of orgin</div>
                    <input></input>
                </div>
                <div>
                    <div>Brand</div>
                    <input></input>
                </div>
                <div>
                    <div>Packing type</div>
                    <input></input>
                </div>
                <div>
                    <div>Pack size</div>
                    <input></input>
                </div>
                <div>
                    <div>Pack UOM</div>
                    <input></input>
                </div>
            </div>
            <div>
                <h1>PRICE & QTY</h1>
            </div>
            <div className='regi_line'>
                <div className='line1'></div>
                <div className='line2'></div>
            </div>
            <div className='seller_input'>
                <div>
                    <div>Quantity</div>
                    <input></input>
                </div>
                <div>
                    <div>Price</div>
                    <input></input>
                </div>
                <div>
                    <div>GST</div>
                    <input></input>
                </div>
            </div>
            <div>
                <h1>IMAGES & VIDEOS</h1>
            </div>
            <div className='regi_line'>
                <div className='line1'></div>
                <div className='line2'></div>
            </div>
        </div>
        <div className='upload_file'>
                <div className='border'>
                <div> Upload file here</div>
                <div>(jpeg, jpg, png, gif, mp4, mov, wmv, fly, avi, avchd)</div>
                </div>
            </div>
            <div id='btn'><button onClick={() => navigate("/manage category")}>Proceed</button></div>
        </div>
    )
}

export default Add_product