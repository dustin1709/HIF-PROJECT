import React from "react";
import { useState, useEffect, useRef } from "react";
import photo from '../assets/images/flag.jpg';
import panorama from '../assets/images/panorama.jpg';

function About() {
    return (
        <>
        <div>
        <img src={panorama} alt='Greece-panorama-view' />
        <div id="about" className='pb-5'>
            <h1 className="pl-10" style={{fontSize: '280%', marginTop: '2%'}}>
                About HIF
            </h1>
            <div>
            <p className='pl-10 pr-8' style={{fontSize: '170%'}}>
                Our company focuses on real estate development, construction, and planning in Europe, offering premium properties such as apartments, homestays, and various types of homes, including subdivided houses or villas, for investors.
            </p>
            <p className='pl-10 pr-8' style={{fontSize: '170%'}}>
                At HIF, we have built over 73 apartments building across Athens.
                Clients can choose from a wide variety of apartments we offer.
            </p>
            <p className='pl-10 pr-8' style={{fontSize: '170%'}}>
                In July 2023, HIF officially entered the Vietnamese market with the goal of fostering mutual learning and collaboration. We aim to connect with and become strategic partners with immigration companies in Vietnam.
            </p>
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

                        {/* ----- Left side ----- */}
                        <div className='bg-white border-white border-4 w-20 absolute left-1/2 
                        transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                            <h1 className='p-2' style={{fontSize: '350%'}}>2024</h1>
                        </div>
                        <div className='mt-6 sm:mt-0 sm:mb-12 mt-12'>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-12'>
                                        <div data-aos='fade-right' data-aos-duration='1000' className='bg-white p-4 rounded
                                        shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <p className='text-[23px] text-smallTextColor group-hover:font-[500]'>
                                            In July 2024, establish official office in Istanbul, Turkey, in order to serve the Turkish market.
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
            <div className="desc-img-left">
                <h1 className='pl-10' style={{fontSize: '250%'}}>
                    Our Vision
                </h1>
                <p className='pl-10' style={{fontSize: '170%'}}>
                    We are always focused on delivering practical value and maximizing benefits for our partners. Operating under the motto "Building Together – Growing Together," we are committed to creating sustainable and long-term collaborative opportunities.
                </p>
                <p className='pl-10' style={{fontSize: '170%'}}>
                    We are committed to delivering high-quality products and comprehensive management services, focusing on a B2B collaboration model with international partners. Our guiding principle is "Shared Benefits – Mutual Growth."
                </p>
            </div>
            <img className="desc-text-right pl-10" src={photo}  alt="Greece_flag"/>
        </div>
        </div>
        </div>
        <div className="p-5 clear-both"></div>
        </>
    )
}

export default About
