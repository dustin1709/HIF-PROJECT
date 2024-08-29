import React from "react";
import backgroundImg from '../assets/images/property.jpg';

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
        </>
    )
}

export default PropertyManagement
