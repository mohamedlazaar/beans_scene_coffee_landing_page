import React from "react";
import coffee_image from "@/public/coffee_image.png";
import { playfairDisplay } from "@/pages/index";
import Button from "@/components/common/Button";
const Hero: React.FC = () => {
    return (
        <div className="relative  w-full  bg-black py-[100px] bg-cover" style={{backgroundImage: `url(${coffee_image.src})`}}>
            <div className="absolute top-0 left-0 w-full h-full" style={{background: "linear-gradient(to right, rgba(30, 30, 30, 1), rgba(0, 0, 0, 0))"}}></div>
            <div className="relative  z-10 flex flex-col gap-3 w-full md:w-[50%] pt-4 lg:pt-10 md:pl-25 pl-2 ">
                <p className={`${playfairDisplay.className} text-[22px] font-medium text-white`}>We&apos;ve got your morning covered with</p>
                <h1 className="md:text-[220px] text-[100px] font-normal text-white">Coffee</h1>
                <p className={`${playfairDisplay.className} text-[20px] font-medium text-white`}>
                   It is best to start your day with a cup of coffee. Discover the
                    best flavours coffee you will ever have. We provide the best
                    for our customers.
                </p>
                <Button className="text-black">
                    Order Now
                </Button>
            
             </div>
        </div>
    );
};

export default Hero;