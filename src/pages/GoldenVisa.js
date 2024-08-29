import React from "react";
import backgroundImg from '../assets/images/GV.jpg';
import procedureImg from '../assets/images/GoldenVisaProcedure_Greek.png';
import imgTravel from '../assets/images/travel.jpg';

function GoldenVisa() {
    return (
        <div>
        <div style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingLeft: '5%', paddingRight: '5%', paddingTop: '3%', paddingBottom: '15%',
        }}>
            <div style={{
                    backgroundColor: 'rgb(245, 243, 242, 50%)',
                    padding: '1%',
                    textAlign: 'center'
                }}>
                    <h1 style={{color: "black", fontSize: '320%'}}>
                    Unlock Visa-Free Travel for Your Family
                    </h1>
            </div>
        </div>
            <div className='p-10 mt-5 mb-5 ml-5 mr-3'>
                <h1 style={{color: "black", fontSize: '200%'}}>
                    Golden Visa Immigration
                </h1>
                
                <p style={{color: "black", fontSize: '140%'}}>
                Golden visas, also referred to as residence by investment or citizenship by investment programs, offer individuals the opportunity to obtain residency or citizenship in a foreign country in exchange for a substantial financial investment. These programs are available in approximately 28 countries, including several within the European Union and the Schengen Zone, providing investors with enhanced mobility and access to international markets.
                </p>

                <h1 style={{color: "black", fontSize: '200%'}}>
                    Benefits of investing in Golden Visa
                </h1>
                
                <p style={{color: "black", fontSize: '140%'}}>
                Investing in a Golden Visa extends benefits to three generations of your family, including you, your spouse, both sets of parents, and any children under the age of 21. This investment secures residency or citizenship, offering long-term advantages for your entire family.
                </p>

                <h1 style={{color: "black", fontSize: '200%'}}>
                    Our mission
                </h1>
                <p style={{color: "black", fontSize: '170%'}}>
                    With a proven track record, the HIF team can help your family obtain a Golden Visa with ease and efficiency. Our experienced professionals guide you through every step of the process, ensuring a seamless experience while securing the benefits of residency or citizenship. HIF is committed to help your family and business to open doors to new opportunities and visa-free travel.
                </p>

                <figure className='p-5 flex justify-center'>
                <img src={procedureImg} alt="procdure-of-getting-Golden-Visa" style={{width: '90%'}} />
                </figure>
                <p style={{color: "black", fontSize: '170%'}}>
                As of 2023, HIF has successfully assisted 787 families in obtaining EU residency through the Golden Visa program, achieving an impeccable 100% success rate. Our commitment to excellence, personalized guidance, and in-depth knowledge of the process ensures that each family we support receives the highest level of service and a smooth path to securing their Golden Visa. With HIF, you can trust in a reliable partner who delivers results, allowing your family to enjoy the benefits of residency, freedom of travel, and access to new opportunities across Europe.
                </p>
            </div>
            <div style={{ 
                backgroundColor: '#f1f1f1',
                margin: '5%',
                display: 'grid',
                gridTemplateColumns: '20% 80%'
            }}>
            <img id='imgPostCard' style={{width: '100%'}} src={imgTravel} />
            <div className='notice p-5'>
                <h1 style={{color: "black", fontSize: '200%', textDecoration: 'underline'}}>
                    How to get your Golden Visa with HIF
                </h1>
                <p style={{color: "black", fontSize: '150%'}}>
                HIF will NOT be accepting applications directly from investors. If you are an interested investor, please contact your local agencies in your home country. We work with trusted partners in 7 different countries, ensuring you receive the support and guidance you need throughout the process.
                </p>
            </div>
            </div>
        </div>
    )
}

export default GoldenVisa
