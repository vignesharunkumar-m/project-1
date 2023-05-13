import React from 'react'
import "../verify/verify.css"

import Header from '../header/header'
import Footer from '../footer/footer'

import success from "../images/Group 364.png"
import otpimg from "../images/Group 399.png"



function Verify() {
  return (
    <div>
        <Header/>
        <div className='verify_sec'>
            <div className='verify_left'><img src={otpimg} alt='otpimg'></img></div>
            <div className='verify_right'>
                <div><img src={success} alt='success'></img></div>
                <h1>Verfiaction Success</h1>
                <p className='txt'>Congratultions! you have been successfully verified</p>
                {/* <button onClick={() => navigate("/verify otp")}>Verify & Proceed</button> */}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Verify