import React from 'react'
import "../password/changepassword.css"
import lock from "../../images/Vector(9).png"

import { useNavigate } from 'react-router-dom'

function Forget_password() {
    const navigate = useNavigate()
  return (
    <div className='seller'>
            <div className='seller_forget_password'>
                <div><img src={lock} alt='lock'></img></div>
                <h3>FORGET PASSWORD</h3>
                <p>No worries, we'll send you rest instructions</p>
                <div>
                    <div>Email</div>
                    <input placeholder='Enter a email id'></input>
                </div>
                <button onClick={() => navigate("/seller information")}>Reset Password</button>
            </div>
        </div>
  )
}

export default Forget_password