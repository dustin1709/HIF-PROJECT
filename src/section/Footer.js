import React from "react";
import backgroundImg from '../assets/images/footerbkg.jpg';
import { FaCopyright, FaMapPin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
                        <li className="pt-2 flex items-center"><FaMapPin /> Greece: ALIMOS, ATHENS, GREECE, 17455</li>
                        <li className="pt-2 flex items-center"><FaMapPin /> Vietnam: HUD TOWER, LE VAN LUONG, THANH XUAN, HANOI, VIETNAM, 100000</li>
                        <li className="pt-2 flex items-center"><FaMapPin /> Turkey: ZZET PAŞA MAH. YENİ YOL CAD. NUROL TOWER NO: 3 İÇ KAPI NO: 157- Kat22, No 2204</li>
                    </ul>
                </div>
                <div className="shadow-on-text">
                    <h1 className="pl-10 pt-5 text-3xl">Quick Links</h1>
                    <ul className="pl-10 pt-1 pb-3 text-2xl">
                        <li><NavLink to='/' activeClassname="active" style={{backgroundColor: "transparent"}}>Home</NavLink></li>
                        <li><NavLink to='/about' activeClassname="active" style={{backgroundColor: "transparent"}}>About us</NavLink></li>
                        <li><NavLink to='/realestate' activeClassname="active" style={{backgroundColor: "transparent"}}>Real Estate Development</NavLink></li>
                        <li><NavLink to='/projects' activeClassname="active" style={{backgroundColor: "transparent"}}>Projects</NavLink></li>
                        <li><NavLink to='/propertymanagement' activeClassname="active" style={{backgroundColor: "transparent"}}>Property Management</NavLink></li>
                        <li><NavLink to='/education' activeClassname="active" style={{backgroundColor: "transparent"}}>Education Consulting</NavLink></li>
                        <li><NavLink to='/goldenvisa' activeClassname="active" style={{backgroundColor: "transparent"}}>Golden Visa Immigration Program</NavLink></li>
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