"use client"
import React from "react";
import SectionsTitle from "./common/SectionsTitle";
import newsletter_bg from "@/public/newsletter_bg.png";
import { playfairDisplay } from "@/pages/index";
import Image from "next/image";
import newsletter_dec from "@/public/newsletter_dec.png";
const Newsletter: React.FC = () => {
    return (
        <div className="relative w-full flex flex-col items-center py-[60px] justify-center" style={{backgroundImage: `url(${newsletter_bg.src})`}}>
            
            <SectionsTitle titleColor="text-center text-[#fff]" descriptionColor="text-center text-[#fff]" title="Subscribe to get the Latest News" 
            description="Don’t miss out on our latest news, updates, tips and special offers" />
            <div className="md:w-[30%]  w-[90%] flex  items-center justify-center relative z-10 mt-10">
                <input type="text" placeholder="Enter your email"  className={`${playfairDisplay.className} w-[70%] px-5 py-3 bg-white placeholder:text-black placeholder:opacity-[34%] `} />
                <button className={`${playfairDisplay.className} w-[30%] py-3 bg-[#F9C06A] text-black`}>Subscribe</button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#603809] opacity-50"></div>
            <Image src={newsletter_dec.src} alt="newsletter_bg" width={250} height={220} className="w-[100px] h-[100px] md:w-[250px] md:h-[220px] absolute -bottom-15 md:-bottom-25 z-10 left-0 " />
            <Image src={newsletter_dec.src} alt="newsletter_bg" width={250} height={220} className="w-[100px] h-[100px] md:w-[250px] md:h-[220px] absolute -bottom-15 md:-bottom-25 z-10 right-0 rotate-y-180  " />

        </div>
    )
}

export default Newsletter;