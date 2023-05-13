import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import "../about us/aboutus.css"

import microscope from "../images/Rectangle 220.png"
import founder from "../images/Rectangle 215.png"
import director from "../images/Rectangle 217.png"
import manager from "../images/Rectangle 219.png"

function Aboutus() {
    return (
        <div>
            <Header></Header>
            <div>
                <div className='about_img'><div className='image_over_txt'><h1>About us</h1><p><span>Home</span><span>/</span><span>About us</span></p></div></div>
            </div>
            <div className='about_heading'>
                <h1>Welcome to Clinibuy</h1>
            </div>
            <div className='about_line'>
                <div className=' line1'></div>
                <div className='line2'></div>
            </div>
            <div className='about_conetent'>
                <div className='txt'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna arcu sodales varius tincidunt natoque dignissim. Elementum pulvinar gravida nibh consequat, amet, lectus faucibus elit. Fermentum in eget egestas bibendum phasellus. Metus, sit eu, potenti consectetur lectus commodo libero, tellus id. Donec euismod mauris orci, feugiat praesent lorem. Aliquam justo at purus amet, turpis. Sed iaculis ullam corper nulla duis tortor, mauris ornare commodo.</p>
                    <p>Tempor at magna consequat a non dignissim. Nec tellus et suspendisse ultrices convallis facilisis quis aenean. Ultricies nunc, tincidunt feugiat erat eget pretium morbi egestas. Aliquam dui habitant nam maecenas sodales quam vitae dictum. Nibh dui facilisis bibendum aenean magna ullamcorper fermentum ac. Sem mauris, commodo est, vel. Tincidunt ut vel in adipiscingcommodo ultricies eget ultrices. Mattis diam viverra nisl, lectus cras. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna arcu sodales varius tincidunt natoque dignissim. Elementum pulvinar gravida nibh consequat, amet, lectus faucibus elit. Fermentum in eget egestas bibendum phasellus. </p>
                </div>
                <div className='img'> <img src={microscope} alt='microscope'></img></div>
            </div>
            <div className='about_heading'>
                <h1>Our Team</h1>
            </div>
            <div className='team_line'>
                <div className='line1'></div>
                <div className='line2'></div>
            </div>
            <div className='teams'>
                <div className='teams_details' id='one'>
                    <div><img src={founder} alt='founder'></img></div>
                    <h3>lorum ipsum</h3>
                    <p>FOUNDER</p>
                    <div className='detail_line'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque massa urna laoreet ultricies
                        amet eget commodo. Id fringilla feugiat in faucibus neque eu ultricies ullamcorper libero. Integer dolor ultricies integer duis orci egestas. </p>
                </div>
                <div className='teams_details' id='one'>
                    <div><img src={director} alt='director'></img></div>
                    <h3>lorum ipsum</h3>
                    <p>MANAGING DIRECTOR</p>
                    <div className='detail_line'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque massa urna laoreet ultricies
                        amet eget commodo. Id fringilla feugiat in faucibus neque eu ultricies ullamcorper libero. Integer dolor ultricies integer duis orci egestas. </p>
                </div>
                <div className='teams_details'>
                    <div><img src={manager} alt='manager'></img></div>
                    <h3>lorum ipsum</h3>
                    <p>MANAGER</p>
                    <div className='detail_line'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque massa urna laoreet ultricies
                        amet eget commodo. Id fringilla feugiat in faucibus neque eu ultricies ullamcorper libero. Integer dolor ultricies integer duis orci egestas. </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Aboutus;