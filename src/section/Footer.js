import React from "react";
import backgroundImg from '../assets/images/footerbkg.jpg';
import { FaCopyright, FaMapPin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
        <div className="footerbanner" style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover'
        }}>
            <div className='footercover'>
                <div className="shadow-on-text">
                    <h1 className='pl-10 pt-5 text-3xl'>Our Offices</h1>
                    <ul className='pl-10 pr-2 pb-3 text-2xl'>
                        <li className="pt-2 flex items-center"><FaMapPin /> Alimos, Athens, 17455</li>
                        <li className="pt-2 flex items-center"><FaMapPin /> Thanh Xuan, Hanoi, Vietnam, 100000</li>
                    </ul>
                </div>
                <div className="shadow-on-text">
                    <h1 className="pl-10 pt-5 text-3xl">Quick Links</h1>
                    <ul className="pl-10 pt-1 pb-3 text-2xl">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/realestate'>Real Estate</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/propertymanagement'>Property Management</Link></li>
                        <li><Link to='/education'>Education Consulting</Link></li>
                        <li><Link to='/goldenvisa'>Golden Visa Immigration Program</Link></li>
                    </ul>
                    <div className='p-10 clear-both'></div>
                    <div className='p-10 clear-both'></div>
                </div>
            </div>
            <hr />
            <p className='pl-5 pt-3 pb-5 pr-5 flex items-center gap-[12px]'><FaCopyright/><span className='text-2xl'>Copyright of Hellenic Investment Fund Co IKE - All rights reserved {(new Date().getFullYear())}</span></p>
        </div>
        </div>
    )
}

export default Footer