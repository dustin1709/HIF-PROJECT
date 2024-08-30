import React from "react";
import backgroundImg from '../assets/images/construction.jpg';
import handshake from '../assets/images/code-of-conduct.png';
//import videoMov from '../assets/videos/property.MOV';
import '../assets/sectioncss/RealEstate.css';

function RealEstate() {
    return (
        <div>
            <div className='hero'>
                <video className="back-video" autoPlay loop muted playsInline>
                    <source src="https://hif-greece.s3.ap-northeast-1.amazonaws.com/property.MOV" type="video/mp4" />
                </video>
                <div className="ml-8 mr-8 p-10" style={{
                    backgroundColor: 'rgb(245, 243, 242, 88%)',
                    marginTop: '5%'
                }}>
                    <h1 style={{color: "black"}}>
                        Your Trusted Real Estate Developer
                    </h1>
                    <p style={{color: "black"}}>
                    <br />
                    With a proven track record of successfully completing high-quality projects, HIF prioritizes transparency, integrity, and professionalism in all dealings, ensuring clear communication, timely project delivery, and adherence to budgets. With a strong focus on client satisfaction, HIF consistently delivers value by selecting prime locations, using top-notch materials, and maintaining strict quality control throughout the development process. HIF's commitment to ethical practices and long-term relationships makes it a dependable partner for investors and stakeholders alike.
                    </p>
                </div>
            </div>
        <div className="hero2" style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingLeft: '5%', paddingRight: '5%', paddingTop: '3%', paddingBottom: '8%',
        }}>
            <div className="intro-div" style={{
                    backgroundColor: 'rgb(245, 243, 242, 88%)',
                    padding: '3%'
                }}>
                    <h1 style={{color: "black", fontSize: '320%'}}>
                        Your Trusted Real Estate Developer
                    </h1>
                    <p style={{color: "black", fontSize: '170%'}}>
                    <br />
                    With a proven track record of successfully completing high-quality projects, HIF prioritizes transparency, integrity, and professionalism in all dealings, ensuring clear communication, timely project delivery, and adherence to budgets. With a strong focus on client satisfaction, HIF consistently delivers value by selecting prime locations, using top-notch materials, and maintaining strict quality control throughout the development process. HIF's commitment to ethical practices and long-term relationships makes it a dependable partner for investors and stakeholders alike.
                    </p>
            </div>
        </div>
        <div className='underhero pl-7 pr-7 mt-5 mb-5 ml-5 mr-3'>
            <h1 style={{color: "black", fontSize: '200%', textAlign: 'center'}}>
                - - Our commitment to B2B - -
            </h1>
            <div className='p-5 flex justify-center'><img src={handshake} alt="code-of-conduct" style={{width: '5rem'}} /></div>
            <p style={{color: "black", fontSize: '140%'}}>
            HIF is committed to safeguarding the interests of our B2B partners, which is why we do not engage in direct property sales to investors. Instead, all sales are conducted exclusively through our trusted network of local agencies. This approach ensures that our partners maintain a competitive edge and reinforces our dedication to building strong, mutually beneficial relationships within the industry. By prioritizing the rights of our B2B partners, we create a reliable and transparent business environment that benefits all parties involved.
            </p>
            <p style={{color: "black", fontSize: '140%'}}>
            We firmly believe that the success of our projects is rooted in the strength of our partnerships. By working hand-in-hand with local agencies, we ensure that investors receive expert guidance tailored to the nuances of their respective markets. This collaborative approach not only protects our partners' business interests but also fosters trust and long-term cooperation. We are dedicated to supporting the growth and success of our partners while maintaining the highest standards of professionalism and integrity in every transaction.
            </p>
        </div>
        </div>
    )
}

export default RealEstate
