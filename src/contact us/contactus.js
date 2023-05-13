import React from 'react'
import "../contact us/contactus.css"

import Header from '../header/header'
import Footer from '../footer/footer'

import map from "../images/Group 283.png"
import call from "../images/Group 284.png"
import mail from "../images/Group 285.png"
import time from "../images/Vector(8).png"

import { useNavigate } from 'react-router-dom'

function Contactus() {
    const navigate = useNavigate()
    return (
        <div>
            <Header></Header>
            <div>
                <div className='contact_img'><div className='image_over_txt'><h1>Contact us</h1><p><span>Home</span><span>/</span><span>Contact us</span></p></div></div>
            </div>
            <div className='contacts'>
                <div className='contact_div'>
                    <div><img src={map} alt='map'></img></div>
                    <div>Address</div>
                    <div className='txt2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sed lorem aliquam enim ipsum nunc. Quis adipiscing turpis pretium.</div>
                </div>
                <div className='contact_div'>
                    <div><img src={call} alt='call'></img></div>
                    <div>Phone</div>
                    <div className='txt2'> Call us: +91 7010034955</div>
                    <div className='txt2'>Landline: +91 12345678</div>
                </div>
                <div className='contact_div'>
                    <div><img src={mail} alt='mail'></img></div>
                    <div>Email</div>
                    <div className='txt2'>info@clinibuy.in</div>
                </div>
                <div className='contact_div'>
                    <div><img src={time} alt='time'></img></div>
                    <div>Monday - Saturday</div>
                    <div className='txt2'>9.00AM to 6.30PM</div>
                </div>
            </div>
            <div className='center_heading'>
                <h1>Send Us a Message</h1>
                <p>LOrem ipsum dolor sit amet,consectur adipiscing elit,Enim</p>
            </div>
            <div className='inputs'>
                <input placeholder='Your Nmae' className='name_mail'></input>
                <input placeholder=' Your Mail' className='name_mail'></input>
                <input placeholder='Your Phone Number'></input>
            </div>
            <div className='msg'>
                <input placeholder='Your Message here'></input>
            </div>
            <div className='sent_btn'>
                <button onClick={() => navigate("/about us")}>SEND MESSAGE</button>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contactus