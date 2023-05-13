import React from 'react'
import "../tearms_condition/terms_condition.css"
import Header from '../header/header'
import Footer from '../footer/footer'

import { useNavigate } from 'react-router-dom'

function Terms_condition() {
  const navigate = useNavigate()
  return (
    <div>
      <Header></Header>
      <div>
        <div className='terms_condition_img'><div className='image_over_txt'><h1 onClick={() => navigate("/FAQ")}>Terms & Condition</h1><p><span>Home</span><span>/</span><span>Terms & Condition</span></p></div></div>
      </div>
      <div className='about_heading'>
        <h1>Terms & Condition</h1>
      </div>
      <div className='checkout_line'>
        <div className=' line1'></div>
        <div className='line2'></div>
      </div>
      <div className='terms_condition'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna arcu sodales varius tincidunt natoque dignissim. Elementum pulvinar gravida nibh consequat, amet, lectus faucibus elit. Fermentum in eget egestas bibendum phasellus. Metus, sit eu, potenti consectetur lectus commodo libero, tellus id. Donec euismod mauris
          orci, feugiat praesent lorem. Aliquam justo at purus amet, turpis. Sed iaculis ullam corper nulla duis tortor, mauris ornare commodo.</p>
        <p>Tempor at magna consequat a non dignissim. Nec tellus et suspendisse ultrices convallis facilisis quis aenean. Ultricies nunc, tincidunt feugiat erat eget pretium morbi egestas. Aliquam dui habitant nam maecenas sodales quam vitae dictum. Nibh dui facilisis bibendum aenean magna ullamcorper fermentum ac. Sem mauris, commodo est, vel. Tincidunt ut vel in adipiscingcommodo ultricies eget ultrices. Mattis diam viverra nisl, lectus cras. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna arcu sodales varius tincidunt natoque dignissim. Elementum pulvinar gravida nibh consequat, amet, lectus faucibus elit. Fermentum in eget egestas bibendum phasellus. </p>
        <h2>Section 1- Online Store Terms</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna arcu sodales varius tincidunt natoque dignissim. Elementum pulvinar gravida nibh consequat, amet, lectus faucibus elit. Fermentum in eget egestas bibendum phasellus. Metus, sit eu, potenti consectetur lectus commodo libero, tellus id. Donec euismod mauris
          orci, feugiat praesent lorem. Aliquam justo at purus amet, turpis. Sed iaculis ullam corper nulla duis tortor, mauris ornare commodo.</p>
        <p>Tempor at magna consequat a non dignissim. Nec tellus et suspendisse ultrices convallis facilisis quis aenean. Ultricies nunc, tincidunt feugiat erat eget pretium morbi egestas. Aliquam dui habitant nam maecenas sodales quam vitae dictum. Nibh dui facilisis bibendum aenean magna ullamcorper fermentum ac. Sem mauris, commodo est, vel. Tincidunt ut vel in adipiscingcommodo ultricies eget ultrices. Mattis diam viverra nisl, lectus cras. </p>
        <h2>Section 2- General Condition</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna arcu sodales varius tincidunt natoque dignissim. Elementum pulvinar gravida nibh consequat, amet, lectus faucibus elit. Fermentum in eget egestas bibendum phasellus. Metus, sit eu, potenti consectetur lectus commodo libero, tellus id. Donec euismod mauris
          orci, feugiat praesent lorem. Aliquam justo at purus amet, turpis. Sed iaculis ullam corper nulla duis tortor, mauris ornare commodo.</p>
        <p>Tempor at magna consequat a non dignissim. Nec tellus et suspendisse ultrices convallis facilisis quis aenean. Ultricies nunc, tincidunt feugiat erat eget pretium morbi egestas. Aliquam dui habitant nam maecenas sodales quam vitae dictum. Nibh dui facilisis bibendum aenean magna ullamcorper fermentum ac. Sem mauris, commodo est, vel. Tincidunt ut vel in adipiscingcommodo ultricies eget ultrices. Mattis diam viverra nisl, lectus cras. </p>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Terms_condition