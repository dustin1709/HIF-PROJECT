import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Listings from "../hooks/Listings";
import DesignsInterior from "../hooks/DesignsInterior";
import '../assets/sectioncss/Project.css';
import { Carousel } from "react-carousel-minimal";
import arrayShuffle from 'array-shuffle';

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

    const captionStyle = {
        fontSize: '1.8em',
        fontWeight: 'bold',
    };
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    };
    let shuffledArr = arrayShuffle(DesignsInterior);
    
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
            
            <h1 className="pl-8 pt-8 text-4xl">NOTABLE PROJECTS</h1>
            <div className="slider-container w-8/9 m-auto">
            <Slider {...settings}>
                {
                    Listings.slice(0).reverse().map((property) => {return (
                        <div key={property.id} className='pl-3 pr-3 pb-3 pt-2 flex items-center justify-center'>
                            <div className='flex justify-center rounded-t-xl pt-5' style={{backgroundColor: '#e0e0eb'}}>
                                <img src={property.image} className="h-[270px]" style={{borderRadius: '1%'}} />
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
            <div className="pl-8 pr-8 pt-10 pb-7">
                <h1 className="text-4xl">Properties Albums</h1>
                <h2 className="text-3xl"><i>Interior Design Tailored to Market Demands</i></h2>
                <p className="text-2xl">
                    Our project’s interior design seamlessly blends functionality, aesthetics, and modern trends to meet the diverse demands of today’s market. Each space is meticulously crafted to cater to the preferences of discerning homeowners and tenants, ensuring a perfect balance of comfort and style.  
                    <br />
                    Key highlights include:
                    <ul>
                    <li>- Contemporary Aesthetics: Sleek, modern finishes and clean lines define every corner, creating a timeless yet fresh appeal.</li>
                    <li>- Space Optimization: Thoughtful layouts maximize usability, ensuring every square meter is practical and inviting.</li>  
                    <li>- Premium Materials: High-quality materials such as hardwood floors, quartz countertops, and energy-efficient fixtures emphasize durability and luxury.</li> 
                    <li>- Customizable Features: Flexibility in design elements allows buyers to personalize their spaces, making them truly feel like home.</li>
                    <li>- Sustainability: Eco-friendly materials and energy-efficient systems align with the growing market trend toward green living.</li>
                    </ul>
                    Whether it’s for young professionals, growing families, or investors seeking high rental potential, our interiors are designed to exceed expectations and adapt to a range of lifestyles.
                </p>
            </div>
            <div style={{paddingTop: '1%', marginRight: '8%', marginLeft: '2%', paddingBottom: '10%'}}>
                <Carousel
                data={shuffledArr}
                time={2000}
                width="auto"
                height="570px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "1250px",
                    maxHeight: "570px",
                    margin: "40px auto"
                }}
            />
            </div>
        </div>
    )
}

export default Project
