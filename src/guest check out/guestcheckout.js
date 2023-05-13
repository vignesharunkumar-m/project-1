import React from 'react'
import "../guest check out/guestcheckout.css"

import Header from '../header/header'
import Footer from '../footer/footer'

import { useNavigate } from 'react-router-dom'

function Guestcheckout() {
  const navigate = useNavigate()
  return (
    <div>
      <Header></Header>
      <div className='contents'><div className='image_overtxt'><h1>Guest CheckOut</h1><p className='smalltxt'><span>Home</span><span>/</span><span> GuestCheckOut</span></p></div></div>
      <div className='about_heading'>
        <h1>BILLING</h1>
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
      <div className='address'>
        <p>Address</p>
        <input></input>
      </div>
      <div className='checkbox'>
      <div><input type='checkbox'></input>My Shipping information is  the same as my billing information</div>
        <div><button onClick={() => navigate("/billing and shipping")}>Continue</button></div>
      </div>
      <Footer></Footer>
      {/* <div className='review_btn'><button onClick={() => navigate("/contact us")}>SUBMIT REVIEW</button></div> */}
    </div>
  )
}

export default Guestcheckout