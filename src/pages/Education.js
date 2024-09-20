import React from "react";
import backgroundImg from '../assets/images/pexels-nurseryart-346885.jpg';
import colleges from '../assets/images/colleges.png';
import photo from '../assets/images/EDUCATION.jpg';

function Education() {
    return (
        <>
        <div style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.87',
            paddingLeft: '5%', paddingRight: '5%', paddingTop: '3%', paddingBottom: '17%'
        }}>
            <h1 style={{color: "black", fontSize: '350%'}}>
                Education Consulting
            </h1>
            <div style={{
                    backgroundColor: 'rgb(245, 243, 242, 75%)',
                    padding: '2.8%'
                }}>
                    <div className="desc-text-right">
                        <h1 className="text-4xl">A Pathway to success</h1>
                        <p className="text-2xl">
                            At the education consulting firm of Hellenic Investment Fund, we maintain close connections with both international and public schools in Greece, ensuring a healthy and exceptional educational environment for the children of our investors.
                            <br />
                            Therefore, we have developed support services such as academic program consulting, exam preparation, and application guidance to help students secure offers from top universities.
                        </p>
                        <p className="text-2xl p-5">
                            A solid foundation based on the IB (International Baccalaureate) model fosters intellectual, character, and skill development, opening up new opportunities and contributing to the creation of a progressive and civilized society.
                        </p>
                    </div>
                    <figure className="desc-img-left">
                        <img src={photo}  alt='university-of-Athens'/>
                        <figcaption className="text-xl text-center">University of Athens. <i>Src: Unsplashed.</i></figcaption>
                    </figure>
                    
                    <div style={{padding: '1.5%', clear: 'both'}}></div>
                    <h1 className="text-3xl">Our Partners</h1>
                    <img src={colleges} alt='partners-college' className="pb-5" />
            </div>
        </div>
        </>
    )
}

export default Education
