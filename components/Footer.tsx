import React from "react";
import footer_img from "@/public/footer_image.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { playfairDisplay, clickerScript } from "@/pages/index";
const Footer: React.FC = () => {
    return (
        <div className={`relative flex pt-[100px] justify-center items-center bg-[#442808] ${playfairDisplay.className}`} >
            <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${footer_img.src})` }}></div>
            <div className="container mx-auto flex md:flex-row flex-col gap-[20px] py-20">
            <div className="relative w-full md:w-1/4 flex flex-col gap-[20px] p-2 z-10">
                <h2 className={`${clickerScript.className} text-white text-[54px] font-bold`}>
                    Bean Scene
                </h2>
                <p className="text-white text-[14px] leading-[22px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="flex gap-6">
                    <FaFacebook className="text-white text-[24px]" />
                    <FaInstagram className="text-white text-[24px]" />
                    <FaTwitter className="text-white text-[24px]" />
                    <FaYoutube className="text-white text-[24px]" />
                </div>

            </div> 
            <div className="relative w-full md:w-1/4 z-10 flex flex-col p-2 gap-[20px] ">
                    <h2 className="text-white text-[26px] font-bold`">
                        About
                    </h2>
                    <ul className="flex flex-col gap-2">
                        <li className="text-white text-[18px] leading-[42px]"><a href="#">Menu</a></li>
                        <li className="text-white text-[18px] leading-[42px]"><a href="#">Features</a></li>
                        <li className="text-white text-[18px] leading-[42px]"><a href="#">News & Blogs</a></li>
                        <li className="text-white text-[18px] leading-[42px]"><a href="#">Help & Supports</a></li>
                    </ul>
            </div>
            <div className="relative w-full md:w-1/4 z-10 flex flex-col p-2 gap-[20px]">
                    <h2 className="text-white text-[26px] font-bold">
                        Company
                    </h2>
                    <ul className="flex flex-col gap-2">
                        <li className="text-white text-[18px] leading-[42px]"><a href="#">How we work</a></li>
                        <li className="text-white text-[18px] leading-[42px]"><a href="#">Terms of service</a></li>
                        <li className="text-white text-[18px] leading-[42px]"><a href="#">Pricing</a></li>
                        <li className="text-white text-[18px] leading-[42px]"><a href="#">FAQ</a></li>
                    </ul>
            </div>
                <div className="relative w-full md:w-1/4 z-10 flex flex-col p-2 gap-[20px]">
                    <h2 className="text-white text-[26px] font-bold">
                        Contact Us
                    </h2>
                    <ul className="flex flex-col gap-2">
                        <li className="text-white text-[18px] leading-[42px]">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</li>
                        <li className="text-white text-[18px] leading-[42px]">+1 202-918-2132</li>
                        <li className="text-white text-[18px] leading-[42px]">beanscene@mail.com</li>
                        <li className="text-white text-[18px] leading-[42px]">www.beanscene.com</li>
                    </ul>
            </div>
            </div>

         
        </div>
    )
}

export default Footer;