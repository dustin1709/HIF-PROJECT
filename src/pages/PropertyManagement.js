import React from "react";
import backgroundImg from '../assets/images/property.jpg';
import hotel from '../assets/images/hotel.jpg';

function PropertyManagement() {
    return (
        <>
        <div style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingLeft: '5%', paddingRight: '5%', paddingTop: '3%', paddingBottom: '15%',
        }}>
            <div className="intro-div" style={{
                    backgroundColor: 'rgb(245, 243, 242, 38%)',
                    padding: '2%'
                }}>
                    <h1 style={{color: "black", fontSize: '250%'}}>
                    Expert Property Management: Maximizing Value, Minimizing Hassle.
                    </h1>
                    <p style={{color: "black", fontSize: '170%'}}>
                    Maximize your property's potential with our expert management services. From tenant relations to maintenance, we handle it all, so you enjoy stress-free returns and peace of mind.
                    </p>
            </div>
        </div>
        <div className='text-2xl p-7 mt-5 mb-5 ml-5 mr-3'>
            <h1 style={{color: "black", fontSize: '200%', paddingBottom: '1%'}}>
                Property management at HIF
            </h1>
            <p>
            Our dedicated aftersales-property management team offers expert care for your property, whether it’s for personal use or rental investment. You can have absolute peace of mind, knowing that your property is maintained to the highest standards.
            </p>
            <p>
            We provide a top-tier management service, ensuring your property is well-cared for and your investment is protected.
            For select properties and developments, we also offer a rental guarantee scheme, providing additional security and maximizing your returns.
            </p>
            <p>
            The real estate development projects chosen by HIF are carefully selected in prime locations near economic centers and fully equipped with living amenities, ensuring strong growth potential and maximizing rental and residential benefits for investors.
            </p>
            <br/>
            <h1 style={{fontSize: '140%'}}>Our successful case study</h1>
            <div className='p-1 clear-both'></div>
            <div className='md:flex flex-row'>
                <div>
                    <img style={{width: '90%'}} src={hotel} alt="hotel Athens"/>
                </div>
                <div>
                    <p>
                    One of our standout projects, Athens Mosaico Luxury Suites & Apartments, which we built and manage ourselves, is centrally located in Athens and has been operating at full capacity. Its prime location offers the advantage of being close to numerous tourist attractions, enhancing its appeal and occupancy.
                    </p>
                    <p>
                        All can be reach in walking distance, no longer than 2 miles. Such as:
                    </p>
                    <ul>
                        <li>Lycabettus Hill - 1.3 mi</li>
                        <li>Acropolis - 1.2 mi</li>
                        <li>Parthenon - 1.2 mi</li>
                        <li>Ancient Argora of Athens - 0.8 mi</li>
                    </ul>
                </div>
            </div>
            <h1 style={{fontSize: '135%', paddingTop: '2%'}}>Others notable projects</h1>
            <div className='md:flex flex-row'>
                <div className='sbox'>
                    <h1 style={{fontSize: '125%', paddingTop: '2%'}}>Notora Elegent</h1>
                    <p>Piraeus, Greece</p>
                    <ul>
                        <li>A premium serviced apartment building with 7 floors – featuring 18 exclusive apartments.</li>
                        <li>Located near Piraeus Tower.</li>
                        <li>A bustling commercial area.</li>
                        <li>Convenient public transportation.</li>
                    </ul>
                </div>

                <div className='sbox'>
                    <h1 style={{fontSize: '125%', paddingTop: '2%'}}>The Platinum</h1>
                    <p>Athens, Greece</p>
                    <ul>
                        <li>A 5-star serviced apartment in the Agios Dimitrios area.</li>
                        <li>Close to famous Mediterranean beaches.</li>
                        <li>A bustling commercial area.</li>
                    </ul>
                </div>

                <div className='sbox'>
                    <h1 style={{fontSize: '125%', paddingTop: '2%'}}>The Imperial</h1>
                    <p>Dafni, Greece</p>
                    <ul>
                        <li>A 5-star serviced apartment project with 7 floors and 14 exclusive apartments.</li>
                        <li>Convenient public transportation.</li>
                        <li>Located in an area renowned for its famous landmarks and attractions in Athens.</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default PropertyManagement
