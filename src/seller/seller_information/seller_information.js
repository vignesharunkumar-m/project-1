import React from 'react'
import "../../seller/seller_information/seller_information.css"

import upload from "../../images/Group 423.png"

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Seller_information() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='seller_information'>
                <div>
                    <h1>SELLER INFORMATION</h1>
                </div>
                <div className='regi_line'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                </div>
                <div className='checkboxs'>
                    <div>
                        <input type='checkbox'></input>
                        <label>Manufacturer</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>Reseller</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>Importer</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>Superstockist</label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>Stockist/Wholesaler</label>
                    </div>
                </div>
                <div className='seller_input'>
                    <div>
                        <div>Name</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Email</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Mobile Number</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Company Name</div>
                        <input></input>
                    </div>
                    <div>
                        <div>GST no</div>
                        <input></input>
                    </div>
                    <div>
                        <div>PAN no</div>
                        <input></input>
                    </div>
                </div>
                <p>* Note: Company name should be as per Legal Name registered with GSTN</p>
                <div>
                    <h1>ADDRESS INFORMATION</h1>
                </div>
                <div className='regi_line'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                </div>
                <div className='seller_input'>
                    <div>
                        <div>Pincode</div>
                        <input></input>
                    </div>
                    <div>
                        <div>City</div>
                        <input></input>
                    </div>
                    <div>
                        <div>State/ Region</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Country</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Address</div>
                        <input></input>
                    </div>
                </div>
                <div>
                    <h1>UPLOAD DOCUMENTS</h1>
                </div>
                <div className='regi_line'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                </div>
                <div className='document_type'>
                    <div>?</div>
                    <div>Only document with the following format can be enabled for printing : 'pdf', 'xls', doc', 'jpg', 'png' files are valid to upload and the document max size limit is 2MB.</div>
                </div>
                <div className='document'>
                    <div className='duc'>
                        <div>Upload PAN Document</div>
                        <div><button><img src={upload} alt="upload"></img>Upload file</button></div>
                        <Link>Click to view</Link>
                    </div>
                    <div className='duc'>
                        <div>GSTN Document</div>
                        <div><button><img src={upload} alt="upload"></img>Upload file</button></div>
                        <Link>Click to view</Link>
                    </div>
                    <div className='duc'>
                        <div>Trade/ bussiness License</div>
                        <div><button><img src={upload} alt="upload"></img>Upload file</button></div>
                        <Link>Click to view</Link>
                    </div>
                    <div className='duc'>
                        <div>Drug license</div>
                        <div><button><img src={upload} alt="upload"></img>Upload file</button></div>
                        <Link>Click to view</Link>
                    </div>
                    <div className='duc'>
                        <div>Bank Detail</div>
                        <div><button><img src={upload} alt="upload"></img>Upload file</button></div>
                        <Link>Click to view</Link>
                    </div>
                    <div className='duc'>
                        <div>Address Proof</div>
                        <div><button><img src={upload} alt="upload"></img>Upload file</button></div>
                        <Link>Click to view</Link>
                    </div>
                    <div className='duc'>
                        <div>Appointment letter/ authorization letter</div>
                        <div><button><img src={upload} alt="upload"></img>Upload file</button></div>
                        <Link>Click to view</Link>
                    </div>
                    <div className='duc'>
                        <div>Trade Agreement</div>
                        <div><button><img src={upload} alt="upload"></img>Upload file</button></div>
                        <Link>Click to view</Link>
                    </div>
                </div>
                <div className='agree'>
                    <input type='checkbox'></input>
                    <label>I agree to the Clinibuy Terms and conditions <span>* Code of contact</span></label>
                </div>
                <div className='regi_btn'>
                    <button onClick={() => navigate("/dashboard")}>Update</button> 
                </div>
            </div>
        </div>
    )
}

export default Seller_information


