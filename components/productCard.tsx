import React from "react";
import Image from "next/image";
import { playfairDisplay } from "@/pages/index";
import Button from "@/components/common/Button";

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => {
    return (
        <div className="relative flex flex-col  w-[280px] h-[364px] bg-[#fff9f1] border-[1px] border-[#F9C06A] ">
            <Image src={image} alt={title} className="w-full h-[222px] object-cover" width={280} height={222} />
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className={`${playfairDisplay.className} text-[22px] font-bold text-[#603809]`}>{title}</h1>
                <p className={`${playfairDisplay.className} text-[16px] font-normal text-[#000]`}>{description}</p>
                <p className={`${playfairDisplay.className} text-[18px] font-bold text-[#603809]`}>${price}</p>
            </div>
            <Button className="text-black  absolute -bottom-5 left-50 translate-x-[-100%]">Order Now</Button>
        </div>
    )
}

export default ProductCard;