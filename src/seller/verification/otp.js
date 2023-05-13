import React from 'react'
import "../verification/otp.css"

import lock from "../../images/Vector(9).png"

import { useNavigate } from 'react-router-dom'

function Seller_otp() {
    const navigate = useNavigate()
  return (
    <div className='seller'>
            <div className='seller_otp'>
                <div><img src={lock} alt='lock'></img></div>
                <h3>FORGET PASSWORD</h3>
                <p>No worries, we'll send you rest instructions</p>
                <h5>Enter the verrification Code</h5>
                <div>
                    <input placeholder='0'></input>
                    <input placeholder='0'></input>
                    <input placeholder='0'></input>
                    <input placeholder='0'></input>
                </div>
                <p>if you did't recieve a code!<span>Resend</span></p>
                <button onClick={() => navigate("/change password")}>Continue</button>
            </div>
        </div>
  )
}

export default Seller_otp