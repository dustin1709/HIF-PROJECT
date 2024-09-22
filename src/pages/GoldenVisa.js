import React from "react";
import backgroundImg from '../assets/images/GV.png';
import imgTravel from '../assets/images/hif-small.png';
import benefits from "../hooks/benefits";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function GoldenVisa() {
    return (
        <div>
            <img src={backgroundImg} alt="background-golden-visa" />
            <div className='p-10 mt-5 mb-5 ml-5 mr-3'>
            <h1 style={{color: "black", fontSize: '315%'}}>Golden Visa: Unlock Visa-Free Travel for Your Family</h1>
                <h1 style={{color: "black", fontSize: '200%'}}>
                    Golden Visa Immigration
                </h1>
                
                <p style={{color: "black", fontSize: '140%'}}>
                Golden visas, also referred to as residence by investment or citizenship by investment programs, offer individuals the opportunity to obtain residency or citizenship in a foreign country in exchange for a substantial financial investment. These programs are available in approximately 28 countries, including several within the European Union and the Schengen Zone, providing investors with enhanced mobility and access to international markets.
                </p>

                <h1 style={{color: "black", fontSize: '200%'}}>
                    Benefits of investing in Golden Visa
                </h1>
                
                <p style={{color: "black", fontSize: '150%'}}>
                Investing in a Golden Visa extends benefits to three generations of your family, including you, your spouse, both sets of parents, and any children under the age of 21. This investment secures residency or citizenship, offering long-term advantages for your entire family. Other benefits includes:
                </p>

                <Accordion className="pb-5 text-[24px]" allowZeroExpanded>
                    {benefits.map((item) => (
                        <AccordionItem key={item.id}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {item.title}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            {item.desc}
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>

                <h1 style={{color: "black", fontSize: '200%'}}>
                    Program Requirements
                </h1>
                <ul style={{color: "black", fontSize: '150%'}} className="pb-5">
                    <li>Invest at Least €250,000 in Greek real estate.</li>
                    <li>Keep the property in order to retain the Greek residence permit.</li>
                    <li>Purchase health insurance.</li>
                </ul>

                <h1 style={{color: "black", fontSize: '200%'}}>
                    Our mission
                </h1>
                <p style={{color: "black", fontSize: '150%'}}>
                    With a proven track record, the HIF team can help your family obtain a Golden Visa with ease and efficiency. Our experienced professionals guide you through every step of the process, ensuring a seamless experience while securing the benefits of residency or citizenship. HIF is committed to help your family and business to open doors to new opportunities and visa-free travel.
                </p>
            
                <p style={{color: "black", fontSize: '150%'}}>
                As of 2023, HIF has successfully assisted 787 families in obtaining EU residency through the Golden Visa program, achieving an impeccable 100% success rate. Our commitment to excellence, personalized guidance, and in-depth knowledge of the process ensures that each family we support receives the highest level of service and a smooth path to securing their Golden Visa. With HIF, you can trust in a reliable partner who delivers results, allowing your family to enjoy the benefits of residency, freedom of travel, and access to new opportunities across Europe.
                </p>
                <h1 style={{color: "black", fontSize: '200%'}} className="pt-5">
                    Detailed steps for getting Greece Golden Visa
                </h1>
                <p style={{color: "black", fontSize: '150%'}}>
                Step 1: Initial Deposit <br/>
                •	Customer places a 10% deposit for the property in Greece. <br/>
                Step 2: Finalize Purchase Agreement<br/>
                Finalize the purchase agreement for the property and prepare the Power of Attorney (POA) documents.<br/>
                Step 3: Complete Full Payment<br/>
                •	Customer must complete the full payment for the property (100% of the purchase price) and cover any third-party fees.<br/>
                Step 4: Transfer of Property<br/>
                •	 Finalize the property transfer process to the investor.<br/>
                Step 5: Receive White Paper<br/>
                •	Customer receives the White Paper, which is a preliminary document required for the Golden Visa application.<br/>
                Step 6: Apply for Golden Visa<br/>
                •	Submit the application for the Golden Visa, including all necessary documents.<br/>
                Step 7: Biometrics and Residence Card<br/>
                •	Complete fingerprinting and other biometric requirements, and receive the temporary residence card.<br/>
                Step 8: Receive Permanent Residence Card<br/>
                •	Customer receives the permanent residence card, which may be delivered via courier.<br/>
                Step 9: Property Handover
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
                <h1 className="font-[400]" style={{color: "black", fontSize: '280%'}}>
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
