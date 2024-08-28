import React from "react";
import backgroundImg from '../assets/images/footerbkg.jpg';

function Footer() {
    return (
        <div>
            <div className="footerbanner" style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>

        </div>
        </div>
    )
}

export default Footer