import React from 'react'
import "../profile_&_hospital/profile_hospital.css"
import note from "../images/Group 365.png"
import Header from '../header/header'
import Footer from '../footer/footer'

import { useNavigate } from 'react-router-dom'

function Profile_hospital() {
  const navigate = useNavigate()
  return (
    <div>
      <Header></Header>
      <div className='contents'><div className='image_overtxt'><h1>Customer Profile</h1><p className='smalltxt'><span>Home</span><span>/</span><span> Customer Profile</span></p></div></div>
      <div className='bill_head'>
        <h1>CUSTOMER PROFILE</h1>
        <div><img src={note} alt='note'></img></div>
      </div>
      <div className='checkout_line'>
        <div className=' line1'></div>
        <div className='line2'></div>
      </div>
      <div className='customer_detail'>
        <table>
          <thead>
          <tr>
            <th>NAME -</th>
            <td>Butterbal Turkey</td>
          </tr>
          <tr>
            <th>MOBILE NUMBER -</th>
            <td>+91 9876543210</td>
          </tr>
          <tr>
            <th>MAIL -</th>
            <td>lorumipsum@gmail.com</td>
          </tr>
          <tr>
            <th>ADDRESS -</th>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ut magna nulla phasellus sem. Id ornare volutpat, id urna. Quisque faucibus sed natoque habitasse quis. Convallis est mauris in mattis scelerisque a aliquet dignissim. Mi egestas aliquam leo at integer. Porta tristique quisque id.</td>
          </tr>
          </thead>
        </table>
      </div>
      <div className='addadress'>
        <div id='one'>
          <select>
            <option>Add Address</option>
          </select>
          <div id='two'>
            <div>Hospital</div>
            <div>clinic</div>
            <div>Warehouse</div>
          </div>
        </div>
      </div>
      <div className='bill_head'>
        <h1>HOSPITAL</h1>
        <div><img src={note} alt='note'></img></div>
      </div>
      <div className='checkout_line'>
        <div className=' line1'></div>
        <div className='line2'></div>
      </div>
      <div className='guestcheck_out'>
        <div className='billing_detail'>
          <div className='detail'>
            <p>Name</p>
            <input></input>
          </div>
          <div className='detail'>
            <p>Email</p>
            <input></input>
          </div>
          <div className='detail'>
            <p>Phone Number</p>
            <input></input>
          </div>
        </div>
      </div>
      <div className='delivery_address'>
        <p>Address</p>
        <input></input>
      </div>
      <div className='checkbox'>
        <div><button onClick={() => navigate("/profile clinic")}>Continue</button></div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Profile_hospital