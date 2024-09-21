import React from "react";
import photo from '../assets/images/Artboard643.png'
import '../assets/sectioncss/RealEstate.css';
import procedureImg from '../assets/images/Piraeus.jpg';

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
            <h1 style={{color: "black", fontSize: '200%', paddingTop: '3.55%'}}>
                Greece Real Estate insights
            </h1>
            <p style={{color: "black", fontSize: '140%', paddingBottom: '1.25%'}}>
                Property prices in Greece are expected to continue rising in 2024, though at a slower rate than in recent years. According to the Bank of Greece, property prices saw a 7.9% increase in 2023, reflecting a robust recovery since the financial crisis.
                Athens and Thessaloniki have emerged as key players in Greece's real estate resurgence, particularly since 2018. Athens, in particular, has experienced a strong surge in demand for residential properties.
                These areas have attracted significant attention thanks to their proximity to cultural landmarks, lively urban environments, and recent infrastructure upgrades.
            </p>
            <p style={{color: "black", fontSize: '140%', paddingBottom: '1.25%'}}>
                Furthermore, Greece's booming tourism industry has a substantial influence on the real estate market, especially in high-demand locations such as Santorini, Mykonos, and Crete. Properties in these regions, frequently utilized as short-term rentals, offer strong returns, particularly during peak tourist seasons.
                The rising popularity of Greece as a tourist hotspot—drawing over 33 million visitors in 2023—continues to drive growth in this segment of the real estate market.
            </p>
            <div className="pb-2">
                <figure className=''>
                    <img src={procedureImg} alt="Real-estate" style={{width: '80%', left: '10%', position: 'relative'}} />
                    <figcaption style={{width: '90%', left: '5%', position: 'relative'}} className="text-xl">
                        Piraeus, a port city near Athens, home to Greece's largest port, has experienced a 28% increase in average property values in the second quarter of 2024 compared to last year.&nbsp;
                        <i>Src: piraeustower.gr</i>
                    </figcaption>
                </figure>
            </div>
            <p style={{color: "black", fontSize: '140%'}}>
                Data from the Bank of Greece indicates that residential property prices in central Athens surged by over 35% between 2018 and 2023, as the surge in foreign investment, along with the resurgence of domestic demand, has been a key driver of this growth.
            </p>
            <p style={{color: "black", fontSize: '140%'}}>
                The Greek government has implemented several tax incentives to boost the real estate market, including reductions in the ENFIA property tax and the suspension of VAT on new construction until 2025. 
                These initiatives have effectively drawn both domestic and foreign investors, fueling market growth. 
                However, the stability of these incentives is uncertain. Future governments may revise or withdraw these tax policies, potentially impacting property values and investor returns.
            </p>
            <h1 style={{color: "black", fontSize: '200%', paddingTop: '2%'}}>
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
