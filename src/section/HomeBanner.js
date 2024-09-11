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
            padding: '5%'
        }} id='home'>
            <div className="intro-div">
                <TypeAnimation 
                    sequence={[
                        'Hope Ignites Faith',
                        500,
                        'η ελπίδα πυροδοτεί την πίστη',
                        500,
                        'Đầu tư Hy Lạp - tháp sáng tương lai',
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
                    style={{color: "#FFFF", fontSize: '350%', textShadow: '2px 3px 2px black', fontFamily: "Apple Chancery, cursive"}}
                    repeat={Infinity}
                />
                {/* <h1 style={{color: "#FFFF", fontSize: '520%', textShadow: '1px 1px 2px black', fontFamily: "'Lucida Handwriting', Cursive, monospace"}}>
                    Hope ignites Faith
                </h1> */}
            </div>
        </div>
        <p className='pl-10 pr-8 mt-8' style={{fontSize: '170%'}}>
            Hellenic Investment Fund (HIF) takes pride in its team of highly experienced professionals in financial investment, real estate development, construction, and international relations. With a commitment to professionalism and dedication, our organization is structured into key divisions: design and construction, project management, real estate leasing and management, and social relations development in Greece.
        </p>
        <div id="about" className='pt-5 pb-5'>
            <h1 className="pl-10" style={{fontSize: '280%', marginTop: '2%'}}>
                About HIF
            </h1>
            <div>
            <p className='pl-10 pr-8' style={{fontSize: '170%'}}>At HIF, we have built over 73 apartments building across Athens.
            Clients can choose from a wide variety of apartments we offer.</p>
            <h1 className='pl-10 pr-8' style={{fontSize: '250%'}}>
                Our timelines:
            </h1>
            <div className="container lg:pt-5">

            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                        {/* ----- Vertical line in the middle ----- */}
                        <div className='hidden absolute w-1 sm:block bg-black h-full left-1/2
                        transform -translate-x-1/2'></div>

                        {/* ----- Right side ----- */}
                        <div className='bg-white border-white border-4 w-20 absolute left-1/2 
                        transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                        </div>
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-12'>
                                        <div data-aos='fade-right' data-aos-duration='1000' className='bg-white p-4 groupcursor-pointer ease-in duration-150'>
                                            <p className=''>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ----- Right side fade-left ----- */}
                        <div className='bg-white border-white border-4 w-20 absolute left-1/2 
                        transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                            <h1 className='p-2 z-1' style={{fontSize: '350%'}}>2015</h1>
                        </div>
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-12'>
                                        <div data-aos='fade-left' data-aos-duration='1000' className='bg-white p-2
                                        shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <p className='text-[23px] text-smallTextColor group-hover:font-[500]'>
                                            In 2015, the predecessor of the HIF Co group, Li&Lena Kft, was established in Budapest, Hungary, focusing on the development of government bond projects and international market initiatives.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ----- Right side ----- */}
                        <div className='bg-white border-white border-4 w-20 absolute left-1/2 
                        transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                            <h1 className='p-2' style={{fontSize: '350%'}}>2017</h1>
                        </div>
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-12'>
                                        <div data-aos='fade-right' data-aos-duration='1000' className='bg-white p-4 rounded
                                        shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <p className='text-[23px] text-smallTextColor group-hover:font-[500]'>
                                            In 2017, as Europe experienced significant growth and the company's projects in the region expanded, operations were successfully extended to Greece.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ----- Left side ----- */}
                        <div className='bg-white border-white border-4 w-20 absolute left-1/2 
                        transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                            <h1 className='p-2' style={{fontSize: '350%'}}>2018</h1>
                        </div>
                        <div className='mt-6 sm:mt-0 sm:mb-12 mt-12'>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-12'>
                                        <div data-aos='fade-right' data-aos-duration='1000' className='bg-white p-4 rounded
                                        shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <p className='text-[23px] text-smallTextColor group-hover:font-[500]'>
                                            In July 2018, the company unified its operations and began functioning as a consolidated group, with its headquarters strategically located in the Mediterranean region of Europe, in Athens, the capital of Greece.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ----- Right side ----- */}
                        <div className='bg-white border-white border-4 w-20 absolute left-1/2 
                        transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                            <h1 className='p-2' style={{fontSize: '350%'}}>2023</h1>
                        </div>
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-12'>
                                        <div data-aos='fade-right' data-aos-duration='1000' className='bg-white p-4 rounded
                                        shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <p className='text-[23px] text-smallTextColor group-hover:font-[500]'>
                                            In July 2023, HIF Consulting LLC was established in Vietnam, serving as a fully authorized advisory entity, empowered by the group in Greece to manage all matters related to the Vietnamese market.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>

            <h1 className='pl-10 pr-8' style={{fontSize: '255%'}}>
                Our services
            </h1>
            <p className='pl-10 pr-8 text-2xl'>Our company specializes in the development, planning, and construction of real estate across Europe, offering premium products such as apartments, homestays, subdivided houses, and villas for investors. We are committed to providing high-quality properties and comprehensive management services. Focusing on a B2B collaboration model with international partners, we uphold the philosophy of 'Shared Interests – Mutual Growth' as the core of our business.</p>
            <div>
                <div className="coloredItems hideRight">
                    <h1 className="text-4xl">Real Estate development</h1>
                </div>
                <div className="coloredItems2 text-2xl hide">
                    <img className="fig-right descImg" src={CampusNest} />
                    <ul className="fig-left">
                        <li>Positioning and developing real estate projects in Athens, Greece, to cater to international investors participating in the Greek Golden Visa program.</li>
                        <li>Carefully selecting prime project locations near economic hubs and complete living amenities to ensure growth potential and maximize rental and residential benefits for investors.</li>
                        <li>Developing high-quality projects such as luxury apartments, homestays, serviced apartments, and hotels, providing an exceptional investment and living experience for our partners and investors.</li>
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
                        <div className="flex justify-center"><img src={building} alt='icon' style={{width: '3.5rem', paddingBottom: '0.5em'}} /></div>
                        <h1 className='text-3xl' ref={ref}><span style={{fontSize: '200%'}}>{useScrollTriggeredCountUp(ref, 73)}+</span> Apartment Buildings</h1>
                    </li>
                    
                    <li className="listItem">
                    <div className="flex justify-center"><img src={room} alt='icon' style={{width: '3.5rem', paddingBottom: '0.5em'}} /></div>
                        <h1 className='text-3xl' ref={ref}><span style={{fontSize: '200%'}}>{useScrollTriggeredCountUp(ref, 892)}+</span> Apartments</h1>
                    </li>
                    
                    <li className="listItem">
                    <div className="flex justify-center"><img src={family} alt='icon' style={{width: '3.5rem', paddingBottom: '0.5em'}} /></div>
                        <h1 className='text-3xl' ref={ref}><span style={{fontSize: '200%'}}>{useScrollTriggeredCountUp(ref, 787)}+</span> Families</h1>
                    </li>
                    
                    <li className="listItem">
                    <div className="flex justify-center"><img src={country} alt='icon' style={{width: '3.5rem', paddingBottom: '0.5em'}} /></div>
                    <h1 className='text-3xl' ref={ref}><span style={{fontSize: '200%'}}>{useScrollTriggeredCountUp(ref, 7)}+</span> countries</h1>
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
            

            <h1 className='pl-10 pr-8' style={{fontSize: '250%'}}>
                Contact us
            </h1>
            <p className='pl-10 pr-8' style={{fontSize: '150%'}}>
                Clients can reach out to us by contacting their local agent at their home country. We DO NOT accept client's application directly.
            </p>
            <div className='p-5 clear-both'></div>
        </div>
        </>
    )
}

export default HomeBanner
