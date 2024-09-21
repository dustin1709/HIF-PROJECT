import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Listings from "../hooks/Listings";
import '../assets/sectioncss/Project.css';

function Project() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 930,
                settings: {
                  slidesToShow: 1
                }
              }
        ]
    };
    
    return (
        <div>
            <div className="hero">
                <video className="back-video" autoPlay loop muted playsInline>
                    <source src="https://hif-greece.s3.ap-northeast-1.amazonaws.com/PROJECT.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="p-8">
                <h1 className="text-4xl">About our projects</h1>
                <p className="text-2xl">
                    At HIF, we specialize in premium real estate projects, handpicked for their unbeatable locations and designed with renters in mind. Whether you're looking for easy access to public transportation, vibrant local communities, or proximity to key amenities, our properties offer unparalleled convenience. Each project is thoughtfully developed to provide an effortless rental experience, ensuring tenants enjoy both comfort and accessibility. Invest in a space where location meets lifestyle, making renting simpler, faster, and more enjoyable. Secure your future today with HIF—your gateway to prime living.
                </p>
            </div>
            
            <h1 className="pl-8 pt-8 text-4xl">Our Notable Projects</h1>
            <div className="slider-container w-8/9 m-auto">
            <Slider {...settings}>
                {
                    Listings.map((property) => {return (
                        <div key={property.id} className='pl-3 pr-3 pb-3 pt-2 flex items-center justify-center'>
                            <div className='flex justify-center rounded-t-xl pt-5' style={{backgroundColor: '#e0e0eb'}}>
                                <img src={property.image} className="h-[270px]" style={{borderRadius: '7%'}} />
                            </div>
                            <div className="p-2 text-center" style={{backgroundColor: '#e0e0eb'}}>
                                <h2 className="text-3xl">{property.name}</h2>
                            </div>
                            <div style={{backgroundColor: '#e0e0eb'}} className="rounded-b-xl h-[570px]">
                                <h2 className="pt-3 pl-5 text-2xl">{property.location}</h2>
                                <p className="pb-3 pt-2 pl-5 pr-3 text-xl">{property.desc}</p>
                                <ul className="pb-3 pt-2 pl-5 text-xl">
                                    <li>{property.sp1}</li>
                                    <li>{property.sp2}</li>
                                    <li>{property.sp3}</li>
                                    {property.sp4 == "" ? <li>&nbsp;</li> : <li>{property.sp4}</li>}
                                    {property.sp5 == "" ? <li>&nbsp;</li> : <li>{property.sp5}</li>}
                                    {property.sp6 == "" ? <li>&nbsp;</li> : <li>{property.sp6}</li>}
                                    {property.sp7 == "" ? <li>&nbsp;</li> : <li>{property.sp7}</li>}
                                    {property.sp8 == "" ? <li>&nbsp;</li> : <li>{property.sp8}</li>}
                                    {property.sp9 == "" ? <li>&nbsp;</li> : <li>{property.sp9}</li>}
                                    {property.sp10 == "" ? <li>&nbsp;</li> : <li>{property.sp10}</li>}
                                </ul>
                            </div>
                        </div>
                    )})
                }
            </Slider>
            </div>
            <div style={{padding: '5%'}}></div>
        </div>
    )
}

export default Project
