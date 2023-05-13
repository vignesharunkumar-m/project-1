import React from 'react'
import "./signup.css"

import line67 from "../images/Line 67.png"
import img183 from "../images/Rectangle 183(1).png"

import Header from '../header/header'
import Footer from '../footer/footer'

import { useNavigate } from 'react-router-dom'




function Signup() {

    const navigate = useNavigate()

  return (
    <div>
        <Header/>
        <div className='section'>
            <div className='sec_left'>
                <div className='sec_heading'>Sign up your Account</div>
                <div><img src={line67} alt='line67'></img></div>
                <label>Name</label>
                <br></br>
                <input placeholder='enter a name'></input>
                <hr></hr>
                <label>Email Address</label>
                <br></br>
                <input placeholder='enter a email address'></input>
                <hr></hr>
                <label>Phone number</label>
                <br></br>
                <input placeholder='phone number'></input>
                <hr></hr>
                <label>Address</label>
                <br></br>
                <input placeholder='enter a address'></input>
                <hr></hr>
                <label>Password</label>
                <br></br>
                <input className='eye' placeholder='*****'></input>
                <hr></hr>
                <label>Repeat Password</label>
                <br></br>
                <input className='eye' placeholder='*****'></input>
                <hr></hr>
                <div className='forgrt_div'>Forget password</div>
                <div className='signin_btn'><button onClick={() => navigate("otp Verifiction")}>Sign up to Your Account</button></div>
                <div className='sec_left_bottom'>
                    <a href='alredy account'>Alerdy Have An Account?</a>
                    <a href='sigin'>Sign in</a>
                </div>
            </div>
            <div className='sec_right'>
                <div><img src={img183} alt='img183'></img></div>   
            </div>
        </div>
        <div><Footer></Footer></div>
    </div>
  )
}

export default Signup