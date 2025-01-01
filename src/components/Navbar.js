import React, {useRef, useEffect} from 'react';
import { FaBars, FaWindowClose } from "react-icons/fa";
import logoImg from '../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
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
    ref={headerRef} className='header w-full h-[80px] leading-[80px] flex items-center'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <Link to='/'><img src={logoImg} className='w-[124px] h-[55.9px] pt-1 pb-1' /></Link>
                <div className='flex items-center gap-[10px]'>
                    
                </div>

                <div className="menu" ref={menuRef} onClick={toggleMenu}>
                    <ul className='flex gap-10 items-center'>
                        <li className='text-smallTextColor text-[22.7px] font-[200] hover:underline'>
                            <NavLink style={{color: "#042954", backgroundColor: "transparent"}} to='/' activeClassname="active">Home</NavLink>
                        </li>
                        <li className='text-smallTextColor text-[22.7px] font-[200] hover:underline'>
                            <NavLink style={{color: "#042954", backgroundColor: "transparent"}} to='/about' activeClassname="active">About us</NavLink>
                        </li>
                        <li className='text-smallTextColor text-[22.7px] font-[200] hover:underline'>
                            <NavLink style={{color: "#042954", backgroundColor: "transparent"}} to='/realestate' activeClassname="active">Real Estate Development</NavLink>
                        </li>
                        <li className='text-smallTextColor text-[22.7px] font-[200] hover:underline'>
                            <NavLink style={{color: "#042954", backgroundColor: "transparent"}} to='/projects' activeClassname="active">Projects</NavLink>
                        </li>
                        <li className='text-smallTextColor text-[22.7px] font-[200] hover:underline'>
                            <NavLink style={{color: "#042954", backgroundColor: "transparent"}} to='/propertymanagement' activeClassname="active">Property Management</NavLink>
                        </li>
                        <li className='text-smallTextColor text-[22.7px] font-[200] hover:underline'>
                            <NavLink style={{color: "#042954", backgroundColor: "transparent"}} to='/education' activeClassname="active">Education Consulting</NavLink>
                        </li>
                        <li className='text-smallTextColor text-[22.7px] font-[200] hover:underline'>
                            <NavLink style={{color: "#042954", backgroundColor: "transparent"}} to='/goldenvisa' activeClassname="active">Golden Visa Immigration</NavLink>
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
