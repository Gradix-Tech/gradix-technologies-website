import React, { useInsertionEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Images/GRADIX_WHITE.png"
import LogoColor from "../../assets/Images/GRADIX_COLOR.png"
import { CiMenuFries } from 'react-icons/ci';
import { ArrowUpRight } from 'lucide-react';

const NavBar: React.FC = () => {

    const navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);

    useInsertionEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // change after 50px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-10/10 fixed ${scrolled && 'shadow-lg'} top-0 left-0 z-50`}>
            <nav className={`w-10/10 h-20 flex justify-between items-center px-10 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
                <img className='h-16 cursor-pointer' onClick={() => {
                    navigate("/")
                }} src={scrolled ? LogoColor : Logo} alt="Logo" />
                <div className={`h-20 justify-center items-center gap-5 hidden lg:flex ${scrolled ? 'text-[#0a1c2c]' : 'text-white'}`}>
                    <div className='cursor-pointer'>Home</div>
                    <div className='cursor-pointer'>About Us</div>
                    <div className='cursor-pointer'>Services</div>
                    <div className='cursor-pointer'>Contact Us</div>
                </div>
                <div className='hidden lg:block'>
                    <button id={`${scrolled ? 'bottoneb' : 'bottonet'}`}><strong className='flex gap-2'>Get Started <ArrowUpRight /></strong></button>
                </div>
                <div className='block lg:hidden'>
                    <CiMenuFries className='w-8 h-8 text-white cursor-pointer' />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;