import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../otp/otp.css"

import Header from '../header/header'
import Footer from '../footer/footer'

import otpimg from "../images/Group 399.png"

function Otp() {
    const navigate =useNavigate()
  return (
    <div>
        <Header/>
        <div className='otp_sec'>
            <div className='otp_left'><img src={otpimg} alt='otpimg'></img></div>
            <div className='otp_right'>
                <h2>OTP Verification</h2>
                <div className='line'></div>
                <p className='txt1'>We have send code verification to your mobile number (or) your email address</p>
                <div className='otp_input'>
                    <input placeholder='1'></input>
                    <input placeholder='0'></input>
                    <input placeholder='2'></input>
                    <input placeholder='3'></input>
                </div>
                <p className='txt2'>Don't Receive the OTP?</p>
                <p className='txt3'>Resend Code</p>
                <button onClick={() => navigate("/verify otp")}>Verify & Proceed</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Otp