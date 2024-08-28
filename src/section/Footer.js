import React from "react";
import backgroundImg from '../assets/images/footerbkg.jpg';
import { FaCopyright, FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="footerbanner" style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='footercover'>
                <ul className='p-10 text-3xl'>
                    <li>Athens, Greece</li>
                    <li>Hanoi, Vietnam</li>
                    <li>Ho Chi Minh City, Vietnam</li>
                </ul>
                <ul className='pl-10 pb-5'>
                    <h1 className='text-3xl'>Connect with us</h1>
                    <p className='flex items-center gap-[10px] text-2xl'><FaFacebook/><FaLinkedin/><FaEnvelope/><FaPhone/></p>
                </ul>
                <hr/>
                <p className='pl-5 flex items-center gap-[10px]'><FaCopyright/><span className='text-2xl'>HIF - All rights reserved {(new Date().getFullYear())}</span></p>
            </div>
        </div>
        </div>
    )
}

export default Footer