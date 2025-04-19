"use client"

import React, { useState } from "react";
import Image from "next/image";
import { playfairDisplay } from '@/pages/index'
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={`absolute top-0 z-10 left-0 right-0 flex justify-between items-center p-4 w-[90%] mx-auto ${className}`}>
            <div className="relative flex justify-between items-center gap-4 w-full">
                <h1 className="text-[35px] font-normal">
                    Bean Scene
                </h1>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    <ul className="flex items-center gap-10">
                        <li>
                            <a href="#" className={`${playfairDisplay.className} text-[14px] font-normal hover:text-[#F9C06A] transition-colors`}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className={`${playfairDisplay.className} text-[14px] font-normal hover:text-[#F9C06A] transition-colors`}>
                                Menu
                            </a>
                        </li>
                        <li>
                            <a href="#" className={`${playfairDisplay.className} text-[14px] font-normal hover:text-[#F9C06A] transition-colors`}>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className={`${playfairDisplay.className} text-[14px] font-normal hover:text-[#F9C06A] transition-colors`}>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-6">
                    <a 
                        href="#" 
                        className={`${playfairDisplay.className} underline text-[14px] font-normal hover:text-[#F9C06A] transition-colors`}
                    >
                        Sign In
                    </a>
                    <a 
                        href="#" 
                        className={`${playfairDisplay.className} bg-[#F9C06A] text-black px-5 py-3 rounded-full text-[14px] font-normal hover:bg-[#e0a95a] transition-colors`}
                    >
                        SignUp
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="flex md:hidden cursor-pointer p-2"
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? (
                        <MdOutlineRestaurantMenu className="text-[24px]" />
                    ) : (
                        <CiMenuBurger className="text-[24px]" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-[100px] left-0 w-full p-10 h-[50vh] bg-black bg-opacity-95 backdrop-blur-sm">
                    <nav>
                        <ul className="flex flex-col items-center gap-10">
                            <li>
                                <a href="#" className={`${playfairDisplay.className} text-[18px] font-normal hover:text-[#F9C06A] transition-colors`}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${playfairDisplay.className} text-[18px] font-normal hover:text-[#F9C06A] transition-colors`}>
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${playfairDisplay.className} text-[18px] font-normal hover:text-[#F9C06A] transition-colors`}>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${playfairDisplay.className} text-[18px] font-normal hover:text-[#F9C06A] transition-colors`}>
                                    Contact Us
                                </a>
                            </li>
                        </ul>

                        <div className="flex flex-col items-center mt-10 gap-10">
                            <a 
                                href="#" 
                                className={`${playfairDisplay.className} underline text-[18px] font-normal hover:text-[#F9C06A] transition-colors`}
                            >
                                Sign In
                            </a>
                            <a 
                                href="#" 
                                className={`${playfairDisplay.className} bg-[#F9C06A] text-black px-8 py-5 rounded-full text-[18px] font-normal hover:bg-[#e0a95a] transition-colors`}
                            >
                                SignUp
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;