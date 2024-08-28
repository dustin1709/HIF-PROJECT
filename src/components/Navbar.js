import React, {useRef, useEffect} from 'react';
import { FaBars, FaWindowClose } from "react-icons/fa";
import logoImg from '../assets/images/logo.png';

function Navbar() {

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const btRef = useRef(null);

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
        btRef.current.classList.add('hidden');
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
        btRef.current.classList.toggle('hidden');
    };

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show_menu');
        btRef.current.classList.toggle('hidden');
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
                    <span ref={btRef} className='x-button text-4xl text-smallTextColor cursor-pointer'>
                        <FaWindowClose />
                    </span>
                    <ul className='flex gap-10 items-center'>
                        <li className='text-smallTextColor text-[26px] font-[600] hover:underline'>
                            <a style={{color: "#042954"}} onClick={handleClick} href="#home">Home</a>
                        </li>
                        <li className='text-smallTextColor text-[26px] font-[600] hover:underline'>
                            <a style={{color: "#042954"}} onClick={handleClick} href="#about">About us</a>
                        </li>
                        <li className='text-smallTextColor text-[26px] font-[600] hover:underline'>
                            <a style={{color: "#042954"}} onClick={handleClick} href="">Real Estate Development</a>
                        </li>
                        <li className='text-smallTextColor text-[26px] font-[600] hover:underline'>
                            <a style={{color: "#042954"}} onClick={handleClick} href="">Property Management Services</a>
                        </li>
                        <li className='text-smallTextColor text-[26px] font-[600] hover:underline'>
                            <a style={{color: "#042954"}} onClick={handleClick} href="">Golden Visa Immigration</a>
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
