import React, {useRef, useEffect} from 'react';
import { FaBars, FaWindowClose } from "react-icons/fa";
import logoImg from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
                headerRef.current.classList.add('sticky_header');
            } else {
                headerRef.current.classList.remove('sticky_header');
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc();
        return window.removeEventListener('scroll', stickyHeaderFunc);
    }, []);

    const handleClick = e => {
        e.preventDefault();

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0
        });
    };

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show_menu');
    }

  return (
    <header
    ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center pb-2 mt-1 pt-1'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <img src={logoImg} className='w-[165px] h-[73.8px] pt-2 pb-1' />
                <div className='flex items-center gap-[10px]'>
                    
                </div>

                <div className="menu" ref={menuRef} onClick={toggleMenu}>
                    <ul className='flex gap-10 items-center'>
                        <li className='text-smallTextColor text-[26px] font-[600] hover:underline'>
                            {/* <a style={{color: "#042954"}} onClick={handleClick} href="#home">Home</a> */}
                            <Link style={{color: "#042954"}} to='/'>Home</Link>
                        </li>
                        <li className='text-smallTextColor text-[26px] font-[600] hover:underline'>
                            {/* <a style={{color: "#042954"}} onClick={handleClick} href="#about">About us</a> */}
                            <HashLink style={{color: "#042954"}} to='/#about'>About us</HashLink>
                        </li>
                        <li className='text-smallTextColor text-[26px] font-[600] hover:underline'>
                            {/* <a style={{color: "#042954"}} onClick={handleClick} href="">Real Estate Development</a> */}
                            <Link style={{color: "#042954"}} to='/realestate'>Real Estate Development</Link>
                        </li>
                        <li className='text-smallTextColor text-[26px] font-[600] hover:underline'>
                            <Link style={{color: "#042954"}} to='/propertymanagement'>Property Management Services</Link>
                        </li>
                        <li className='text-smallTextColor text-[26px] font-[600] hover:underline'>
                            <Link style={{color: "#042954"}} to='/goldenvisa'>Golden Visa Immigration</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    <span onClick={toggleMenu} className='mybar p-2 text-2xl text-smallTextColor cursor-pointer'>
                        <FaBars />
                    </span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
