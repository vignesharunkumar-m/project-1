import React from 'react'
import "../../seller/registration/registration.css"

import { useNavigate } from 'react-router-dom'

function Registration() {
    const navigate = useNavigate()
    return (
        <div className='seller'>
            <div className='seller_detail'>
                <div>
                    <h1>REGISTRATION</h1>
                </div>
                <div className='regi_line'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                </div>
                <div className='seller_input'>
                    <div>
                        <div>Name</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Email id</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Mobile Number</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Password</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Confirm Password</div>
                        <input></input>
                    </div>
                </div>
                <div className='regi_btn'>
                    <button onClick={() => navigate("/otp verification")}>Submit</button> 
                    <div>Alredy have an Account?<span>Login Now</span></div>
                </div>
            </div>
        </div>
    )
}

export default Registration