import React from "react";
import photo from '../assets/images/Artboard643.png'
import '../assets/sectioncss/RealEstate.css';

function RealEstate() {
    return (
        <div>
        <div className='hero'>
            <video className="back-video" autoPlay loop muted playsInline>
                <source src="https://hif-greece.s3.ap-northeast-1.amazonaws.com/WEB.mp4" type="video/mp4" />
            </video>
        </div>
        <div className='underhero pl-7 pr-7 mt-5 mb-5 ml-5 mr-3'>
            <div className="pb-1">
                <div className="desc-img-left">
                    <h1 style={{color: "black", fontSize: '200%'}}>
                        Your Trusted Real Estate Developer
                    </h1>
                    <p style={{color: "black", fontSize: '140%', paddingBottom: '1.25%'}}>
                        With a proven track record of successfully completing high-quality projects, HIF prioritizes transparency, integrity, and professionalism in all dealings, ensuring clear communication, timely project delivery, and adherence to budgets. With a strong focus on client satisfaction, HIF consistently delivers value by selecting prime locations, using top-notch materials, and maintaining strict quality control throughout the development process. HIF's commitment to ethical practices and long-term relationships makes it a dependable partner for investors and stakeholders alike.
                    </p>
                </div>
                <img className="desc-text-right" src={photo} alt="hif-img-real-estate" />
            </div>
            <div style={{padding: '1%', clear: 'both'}}></div>
            <h1 style={{color: "black", fontSize: '200%', paddingTop: '1%'}}>
                Our commitment to B2B
            </h1>
            <p style={{color: "black", fontSize: '140%'}}>
            HIF is committed to safeguarding the interests of our B2B partners, which is why we do not engage in direct property sales to investors. Instead, all sales are conducted exclusively through our trusted network of local agencies. This approach ensures that our partners maintain a competitive edge and reinforces our dedication to building strong, mutually beneficial relationships within the industry. By prioritizing the rights of our B2B partners, we create a reliable and transparent business environment that benefits all parties involved.
            </p>
            <p style={{color: "black", fontSize: '140%'}}>
            We firmly believe that the success of our projects is rooted in the strength of our partnerships. By working hand-in-hand with local agencies, we ensure that investors receive expert guidance tailored to the nuances of their respective markets. This collaborative approach not only protects our partners' business interests but also fosters trust and long-term cooperation. We are dedicated to supporting the growth and success of our partners while maintaining the highest standards of professionalism and integrity in every transaction.
            </p>
        </div>
        <div className='p-5 clear-both'></div>
        </div>
    )
}

export default RealEstate
