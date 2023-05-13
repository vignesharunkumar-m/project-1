import React from 'react'
import "../faq/faq.css"
import Header from '../header/header'
import Footer from '../footer/footer'

import nurse from "../images/Rectangle 279.png"

import { useNavigate } from 'react-router-dom'

function Faq() {
    const navigate = useNavigate()
    return (
        <div>
            <Header></Header>
            <div>
                <div className='faq_img'><div className='image_over_txt'><h1 onClick={() => navigate("/order history")}>FAQ</h1><p><span>Home</span><span>/</span><span>FAQ</span></p></div></div>
            </div>
            <div className='about_heading'>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className='about_line'>
                <div className=' line1'></div>
                <div className='line2'></div>
            </div>
            <div className='faq_content'>
                <div className='txt'>
                    <div>
                        <select>
                            <option>What we do ?</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>How we do ?</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>What's our expertise ?</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>When do we work ?</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>How competent are our staff ?</option>
                        </select>
                    </div>
                </div>
                <div className='img'> <img src={nurse} alt='nurse'></img></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Faq