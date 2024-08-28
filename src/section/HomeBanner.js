import React from "react";
import { useState, useEffect, useRef } from "react";
import backgroundImg from '../assets/images/background.png';
import '../assets/sectioncss/HomeBanner.css';

function HomeBanner() {
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
        hiddenEle.forEach((el) => observer.observe(el));
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
                <div className="intro-div" style={{
                    backgroundColor: 'rgb(11, 11, 73, 40%)',
                    padding: '3%'
                }}>
                    <h1 style={{color: "#FFFF", fontSize: '320%'}}>
                        Athen's Leading Real Estate Developer
                    </h1>
                    <p style={{color: "#FFFF", fontSize: '150%'}}>
                    <br />
                    Hellenic Investment Fund (HIF) takes pride in its team of highly experienced professionals in financial investment, real estate development, construction, and international relations. With a commitment to professionalism and dedication, our organization is structured into key divisions: design and construction, project management, real estate leasing and management, and social relations development in Greece.
                    </p>
                </div>
        </div>
        <div id="about" className='pt-5 pb-5'>
            <h1 style={{fontSize: '350%', textAlign: 'center', marginTop: '2%'}}>
                About HIF
            </h1>
            <div>
            <p className='pl-10 pr-8' style={{fontSize: '150%'}}>At HIF, we have built over 62 apartments building across Athens.
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
                                        <div data-aos='fade-left' data-aos-duration='1000' className='bg-white p-4 rounded
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
            <h1 className='pl-10 pr-8' style={{fontSize: '250%'}}>
                Why choose HIF as a partner?
            </h1>
            <p className='pl-10 pr-8' style={{fontSize: '150%'}}>At HIF, each project is carefully selected for its location, ensuring convenient transportation and placement in areas with optimal living amenities. HIF is committed to developing projects that offer the highest quality living environment for investors.
            We are proud to be a trusted and quality property developer who can support your client's family in their new journey of owning and managing foreign properties.
            </p>
            <ul className='pl-10 pb-5 pt-2 pr-8'>
                    <li className="listEle hide">
                        <h1 className='text-3xl'>62 Apartment Buildings</h1>
                        <p>Each project is carefully selected for its location, ensuring convenient transportation and placement in areas with optimal living amenities. HIF is committed to developing projects that offer the highest quality living environment for investors.</p>
                    </li>
                    
                    <li className="listEle hide">
                        <h1 className='text-3xl'>892 Apartments</h1>
                        <p>The apartments are designed with modern aesthetics and high-quality amenities. HIF is committed to developing and constructing only top-tier properties, with the goal of providing an exceptional and comfortable living space for investors.</p>
                    </li>
                    
                    <li className="listEle hide">
                        <h1 className='text-3xl'>787 Families</h1>
                        <p>HIF's documentation is always detailed, clear, and transparent, making it easy for partners and investors to monitor and evaluate. The files are managed by a team of professional lawyers, ensuring that all necessary information for relevant parties is thoroughly provided.</p>
                    </li>
                    
                    <li className="listEle hide">
                        <h1 className='text-3xl'>7 countries</h1>
                        <p>HIF takes pride in its extensive international network, comprising partners from seven different countries. This global collaboration not only enhances our reputation but also expands our operational reach, creating new development opportunities and diversifying our investment portfolio.</p>
                    </li>
                </ul>
        </div>
        </>
    )
}

export default HomeBanner
