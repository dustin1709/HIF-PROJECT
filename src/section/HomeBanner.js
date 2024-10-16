import React from "react";
import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import backgroundImg from '../assets/images/background.jpg';
import building from '../assets/images/buildings.png';
import room from '../assets/images/room.png';
import family from '../assets/images/family.png';
import country from '../assets/images/country.png';
import '../assets/sectioncss/HomeBanner.css';
import useScrollTriggeredCountUp from "../hooks/useScrollTriggerCountUp";
import CampusNest from '../assets/images/real-estates/CAMPUSNEST.jpg';
import BedRoom from '../assets/images/bedroom2-view1.jpg';
import School from '../assets/images/school.jpg';
import hif from '../assets/images/hif.png';
import { Link } from "react-router-dom";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

function HomeBanner() {

    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenEle = document.querySelectorAll('.hide');
        const hiddenEle2 = document.querySelectorAll('.hideRight');
        hiddenEle.forEach((el) => observer.observe(el));
        hiddenEle2.forEach((el) => observer.observe(el));
    }, []);

    return (
        <>
        <div className="homebanner" style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: '3%'
        }} id='home'>
            <div className="intro-div">
                <TypeAnimation 
                    sequence={[
                        'Hope Ignites Faith',
                        500,
                        'η ελπίδα πυροδοτεί την πίστη',
                        500,
                        'Đầu tư Hy Lạp - Thắp sáng tương lai',
                        500,
                        '投资希腊 - 投资希望',
                        500,
                        'תקווה מעוררת אמונה',
                        500,
                        'umut inancı ateşler',
                        500,
                        'ความหวังจุดประกายความศรัทธา',
                        500
                    ]}
                    wrapper="h1"
                    speed={10}
                    style={{color: "#FFFF", fontSize: '280%', textShadow: '2px 5px 2px black', fontFamily: "Courier New"}}
                    repeat={Infinity}
                />
                {/* <h1 style={{color: "#FFFF", fontSize: '520%', textShadow: '1px 1px 2px black', fontFamily: "'Lucida Handwriting', Cursive, monospace"}}>
                    Hope ignites Faith
                </h1> */}
            </div>
        </div>
        
        <div className="pt-1 pl-5 mt-8">
            <img id='hif-img' className="pl-5" src={hif} alt="hif_co_ike" />
            <p id='intro-p' className='pl-5 pr-8 pb-2' style={{fontSize: '170%'}}>
            Hellenic Investment Fund Co IKE takes pride in its team of highly experienced professionals in financial investment, real estate development, construction, education, and international relations. By its strong commitment to professionalism and satisfactory client experience, our organization is structured into key divisions covering design and construction, project management, real estate leasing and management, client care and community relations development in Greece.    
            </p>
        </div>

        <div style={{padding: '0.25%', clear: 'both'}}></div>

        <div>

            <h1 className='pl-10 pr-8' style={{fontSize: '255%'}}>
                Our services
            </h1>
            <p className='pl-10 pr-8 pb-2 text-2xl'>
            Our company specializes in the development, planning, and construction of real estate across Europe, offering premium products of student residence, family apartments, residential complex, and villas for investors as well as hospitality and tourism properties like hotels, Airbnb and hostels. We are committed to providing high-quality properties and comprehensive management services. Focusing on B2B business model across global partners, we uphold our philosophy of 'Common Interests – Mutual Benefits', the core of our business.
            </p>
            <div>
                <div className="coloredItems hideRight">
                    <h1 className="text-4xl">Real Estate development</h1>
                </div>
                <div className="coloredItems2 text-2xl hide">
                    <img className="fig-right descImg" src={CampusNest} />
                    <ul className="fig-left">
                        <li>Developing real estate cash projects like student residence in Athens, Greece, to cater to investors participating in the Greek Golden Visa program.</li>
                        <li>Selecting prime project locations with easy access to business and academic hubs to deliver strong and sustainable ROI as well as maximize financial benefits for investors over the long haul.</li>
                        <li>Developing value projects such as luxury family apartments, serviced apartments and hotels, providing an exceptional living experience for our partners and investors.</li>
                        <li><Link className="flex items-center gap-[5px]" style={{color: "#042954"}} to='/realestate'>See more <FaExternalLinkSquareAlt /></Link></li>
                    </ul>
                </div>
                <div className="coloredItems hideRight">
                    <h1 className="text-4xl">Real Estate management</h1>
                </div>
                <div className="coloredItems2 text-2xl hide">
                    <img className="fig-right descImg" src={BedRoom} />
                    <ul className="fig-left">
                        <li>Building a professional management team to ensure efficient operations and deliver the best services to our clients.</li>
                        <li>Optimizing management and maintenance processes to minimize costs and enhance profitability.</li>
                        <li>Developing promotional programs and special offers to attract long-term tenants.</li>
                        <li><Link className="flex items-center gap-[5px]" style={{color: "#042954"}} to='/propertymanagement'>See more <FaExternalLinkSquareAlt /></Link></li>
                    </ul>
                </div>
                <div className="coloredItems hideRight">
                    <h1 className="text-4xl">Education consulting</h1>
                </div>
                <div className="coloredItems2 text-2xl hide">
                    <img className="fig-right descImg" src={School} />
                    <ul className="fig-left">
                        <li>Developing high-quality courses for international students, focusing on providing the essential knowledge and skills needed to succeed academically in Greece.</li>
                        <li>Offering support services such as academic counseling, exam preparation, and application guidance to help students secure offers from top universities.</li>
                        <li>Building relationships with international and public universities in Greece to create a diverse and enriching educational environment for students.</li>
                        <li><Link className="flex items-center gap-[5px]" style={{color: "#042954"}} to='/education'>See more <FaExternalLinkSquareAlt /></Link></li>
                    </ul>
                </div>
            </div>

            <h1 className='pl-10 pr-8' style={{fontSize: '250%'}}>
                Our markets
            </h1>
            <p className='pl-10 pr-8' style={{fontSize: '150%'}}>At HIF, each project is carefully selected for its location, ensuring convenient transportation and placement in areas with optimal living amenities. HIF is committed to developing projects that offer the highest quality living environment for investors.
            We are proud to be a trusted and quality property developer who can support your client's family in their new journey of owning and managing foreign properties.
            </p>
            <ul className='pl-10 pb-5 pt-2 pr-8 text-center'>
                    <li className="listItem">
                        <div className="flex justify-center">
                            <h1 className="textCount" ref={ref}>{useScrollTriggeredCountUp(ref, 73)}+</h1>
                            {/* <img src={building} alt='icon' style={{width: '3.5rem', paddingBottom: '0.5em'}} /> */}
                        </div>
                        <h1 className='text-xl blue'>Apartment Buildings</h1>
                    </li>
                    
                    <li className="listItem">
                    <div className="flex justify-center">
                        <h1 ref={ref} className="textCount">{useScrollTriggeredCountUp(ref, 892)}+</h1>
                        {/* <img src={room} alt='icon' style={{width: '3.5rem', paddingBottom: '0.5em'}} /> */}
                    </div>
                        <h1 className='text-xl blue'>Apartments</h1>
                    </li>
                    
                    <li className="listItem">
                    <div className="flex justify-center">
                        <h1 ref={ref} className="textCount">{useScrollTriggeredCountUp(ref, 787)}+</h1>
                        {/* <img src={family} alt='icon' style={{width: '3.5rem', paddingBottom: '0.5em'}} /> */}
                    </div>
                        <h1 className='text-xl blue'>Successful applications</h1>
                    </li>
                    
                    <li className="listItem">
                    <div className="flex justify-center">
                        <h1 ref={ref} className="textCount">{useScrollTriggeredCountUp(ref, 7)}+</h1>
                        {/* <img src={country} alt='icon' style={{width: '3.5rem', paddingBottom: '0.5em'}} /> */}
                    </div>
                    <h1 className='text-xl blue'>Countries Partners</h1>
                    </li>
                </ul>
            
            <div className='pl-10 pr-8'>
                <ul className="text-2xl">
                    <li>73+ Buildings: Each project is carefully selected for its location, ensuring convenient transportation and placement in areas with optimal living amenities. HIF is committed to developing projects that offer the highest quality living environment for investors.</li>
                    <li>892+ Apartments: The apartments are designed with modern aesthetics and high-quality amenities. HIF is committed to developing and constructing only top-tier properties, with the goal of providing an exceptional and comfortable living space for investors.</li>
                    <li>787+ Successful applications: HIF's documentation is always detailed, clear, and transparent, making it easy for partners and investors to monitor and evaluate. The files are managed by a team of professional lawyers, ensuring that all necessary information for relevant parties is thoroughly provided.</li>
                    <li>Partners in 7+ countries: HIF takes pride in its extensive international network, comprising partners from seven different countries. This global collaboration not only enhances our reputation but also expands our operational reach, creating new development opportunities and diversifying our investment portfolio.</li>
                </ul>
            </div>
            
            <div className='p-5 clear-both'></div>
        </div>
        </>
    )
}

export default HomeBanner
