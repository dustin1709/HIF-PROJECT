import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Listings from "../hooks/Listings";

function Project() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 750,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 555,
                settings: {
                  slidesToShow: 1
                }
              }
        ]
    };
    
    return (
        <div>
            <div>
            <div className="intro-div" style={{
                    backgroundColor: 'rgb(245, 243, 242, 88%)',
                    padding: '3%'
                }}>
                    <h1 style={{color: "black", fontSize: '320%'}}>
                        Our Projects
                    </h1>
            </div>
            </div>
            <div className="slider-container w-8/9 m-auto">
            <Slider {...settings}>
                {
                    Listings.map((property) => {return (
                        <div key={property.id} className='p-5 flex items-center justify-center'>
                            <div className='flex justify-center rounded-t-xl' style={{backgroundColor: '#e0e0eb'}}>
                                <img src={property.image} className="h-[300px]" />
                            </div>
                            <div className="p-2 rounded-b-xl text-center" style={{backgroundColor: '#e0e0eb'}}>
                                <h2 className="text-2xl">{property.name}</h2>
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
