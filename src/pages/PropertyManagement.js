import React from "react";
import backgroundImg from '../assets/images/property.jpg';
import hotel from '../assets/images/hotel.jpg';
import hifphoto from '../assets/images/PROPERTYMANAGEMENT.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hotelPhotos from "../hooks/hotelPhotos";

function PropertyManagement() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 1
                }
              }
        ]
    };

    return (
        <>
        <div style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingLeft: '5%', paddingRight: '5%', paddingTop: '3%', paddingBottom: '15%',
        }}>
            <div style={{
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
            <div>
                <div className="desc-text-right">
                    <h1 style={{color: "black", fontSize: '200%', paddingBottom: '1%'}}>
                        Property management at HIF
                    </h1>
                    <p>
                        Our dedicated aftersales-property management team offers expert care for your property, whether it’s for personal use or rental investment. You can have absolute peace of mind, knowing that your property is maintained to the highest standards.
                    </p>
                    <p>
                        We provide a top-tier management service, ensuring your property is well-cared for and your investment is protected.
                    </p>
                </div>
                <div className="desc-img-left">
                    <img src={hifphoto} alt="hif_ike_co_building" />
                </div>
            </div>
            <div style={{padding: "0.5%", clear: "both"}}></div>
            <p>
                For select properties and developments, we also offer a rental guarantee scheme, providing additional security and maximizing your returns. Our professional property management services in Greece are designed to enhance the value and performance of your real estate investments. We offer a comprehensive suite of services, including:
            </p>
            <ul>
                <li><span style={{color: "#042954", fontWeight: "bold"}}>Tenant Relations:</span> We manage all aspects of tenant interactions, from finding and screening potential tenants to handling lease agreements and resolving any issues that arise during the tenancy.</li>
                <li><span style={{color: "#042954", fontWeight: "bold"}}>Maintenance and Repairs:</span> Our team ensures that your property is well-maintained with regular inspections, prompt repairs, and proactive maintenance to preserve its value and appeal.</li>
                <li><span style={{color: "#042954", fontWeight: "bold"}}>Financial Management:</span> We handle rent collection, accounting, and financial reporting, providing you with clear and accurate records of your property’s financial performance.</li>
                <li><span style={{color: "#042954", fontWeight: "bold"}}>Legal Compliance:</span> We ensure that your property complies with all local regulations and legal requirements, including tenant rights and property safety standards.</li>
            </ul>
            <p className='mt-2'>
            Located in key areas such as Athens, our services leverage local knowledge and expertise to provide exceptional management tailored to the Greek real estate market. Enjoy the benefits of a well-managed property with reduced stress and increased profitability
            </p>
            <br/>
            <h1 className="text-4xl">Strategies for Success</h1>
            <ul>
                <li><span style={{color: "#042954", fontWeight: "bold"}}>Enhanced Guest Experience:</span> The properties offer premium amenities and personalized services to attract and retain guests. This includes high-quality accommodations, exceptional customer service, and additional features such as concierge services and local tour recommendations.</li>
                <li><span style={{color: "#042954", fontWeight: "bold"}}>Dynamic Pricing:</span> The use of dynamic pricing models helps optimize revenue by adjusting rates based on demand fluctuations. This approach ensures competitive pricing during off-peak periods while maximizing revenue during peak times.</li>
                <li><span style={{color: "#042954", fontWeight: "bold"}}>Effective Marketing:</span> Targeted marketing efforts, including online advertising, social media promotions, and collaborations with travel influencers, help boost visibility and attract potential guests throughout the year.</li>
                <li><span style={{color: "#042954", fontWeight: "bold"}}>Local Partnerships:</span> Collaborations with local businesses and tourism operators enhance the overall guest experience and provide additional value, encouraging longer stays and repeat visits.</li>
            </ul>
            <div className='p-3 clear-both'></div>
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
                    <p>Address: Mirrinousion 8, Athina 104 38, Greece. <a style={{color: "#042954", textDecoration: "underline"}} href="https://www.google.com/maps/dir//Mirrinousion+8,+Athina+104+38,+Greece/@37.9874991,23.6385558,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14a1bd28d7763fa3:0x71b99ea1f3748d08!2m2!1d23.7209574!2d37.9875086?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">See on Google Maps</a></p>
                    <p>Web: <a style={{color: "#042954", textDecoration: "underline"}} href="https://athensmosaico.com/" target="_blank">athensmosaico.com</a></p>
                </div>
            </div>
            <h1 style={{fontSize: '120%', paddingTop: '1%'}}>Photos Gallery</h1>
            <Slider {...settings}>
                {
                    hotelPhotos.map((photo) => {return (
                        <div key={photo.id} className='pl-3 pr-3 pb-3 pt-2 flex items-center justify-center'>
                            <div className='flex justify-center rounded-t-xl pt-2'>
                                <img src={photo.photo} className="md:h-[300px]" />
                            </div>
                        </div>
                    )})
                }
            </Slider>

            <h1 style={{fontSize: '140%', paddingTop: '2%'}}>Advantages of hotel projects</h1>
            <p>
                Hotel projects offering short-term rental services have demonstrated impressive performance metrics, with occupancy rates surpassing 90% during peak seasons and remaining above 65% during off-peak periods. Through a combination of excellent guest services, strategic pricing, and effective marketing, these projects successfully capitalize on market demand and ensure consistent revenue streams throughout the year.
            </p>
            <h1 style={{fontSize: '145%', paddingTop: '2%'}}>Notable rental projects</h1>
            <div className='md:flex flex-row'>
                <div className='sbox'>
                    <h1 style={{fontSize: '125%', paddingTop: '2%'}}>Notora Elegent</h1>
                    <p>Piraeus, Greece</p>
                    <ul>
                        <li>A premium serviced apartment building with 7 floors – featuring 18 exclusive apartments.</li>
                        <li>Located near Piraeus Tower.</li>
                        <li>A bustling commercial area.</li>
                        <li>Convenient public transportation.</li>
                        <li>Significant potential for price appreciation due to its strategic location, growing demand, and robust economic conditions.</li>
                    </ul>
                </div>

                <div className='sbox'>
                    <h1 style={{fontSize: '125%', paddingTop: '2%'}}>The Platinum</h1>
                    <p>Athens, Greece</p>
                    <ul>
                        <li>A 5-star serviced apartment in the Agios Dimitrios area.</li>
                        <li>Close to famous Mediterranean beaches.</li>
                        <li>A bustling commercial area.</li>
                        <li>Located in a prime area, these apartments provide comprehensive amenities that enhance the quality of life, ensuring an exceptional living experience.</li>
                    </ul>
                </div>

                <div className='sbox'>
                    <h1 style={{fontSize: '125%', paddingTop: '2%'}}>The Imperial</h1>
                    <p>Dafni, Greece</p>
                    <ul>
                        <li>A 5-star serviced apartment project with 7 floors and 14 exclusive apartments.</li>
                        <li>Convenient public transportation.</li>
                        <li>10-15 minutes from Athens' landmarks and 12-20 minutes from famous beaches like Alimos, Glyfada Asteras, Kalamaki, Batis and Bikini beach.</li>
                        <li>Located in an area renowned for its famous landmarks and attractions in Athens.</li>
                    </ul>
                </div>
            </div>
        </div>
        <br />
        </>
    )
}

export default PropertyManagement
