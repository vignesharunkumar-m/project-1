import React from 'react'
import "../../seller/password/changepassword.css"

import { useNavigate } from 'react-router-dom'

function Changepassword() {
    const navigate = useNavigate()
    return (
        <div className='seller'>
            <div className='seller_password_change'>
                <div>
                    <h1>CHANGE PASSWORD</h1>
                </div>
                <div className='regi_line'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                </div>
                <div className='seller_input'>
                    <div>
                        <div>Current Password</div>
                        <input></input>
                    </div>
                    <div>
                        <div>New Password</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Confirm Password</div>
                        <input></input>
                    </div>
                </div>
                <div className='regi_btn'>
                    <button onClick={() => navigate("/forget password")}>Submit</button> 
                    <div>Alredy have an Account?<span>Login Now</span></div>
                </div>
            </div>
        </div>
    )
}

export default Changepassword


