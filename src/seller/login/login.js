import React from 'react'
import "../login/login.css"

import logo from "../../images/logo 1.png"

import { useNavigate } from 'react-router-dom'

function Seller_Login() {
    const navigate =useNavigate()
    return (
        <div className='seller'>
            <div className='seller_id'>
                <div><img src={logo} alt='logo' ></img></div>
                <div >
                    <div>
                        <div>Email id</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Password</div>
                        <input className='eye'></input>
                    </div>
                    <button onClick={() => navigate("/registration")}>Login Now</button>
                </div>
            </div>
        </div>
    )
}

export default Seller_Login