import React from "react";
import Image from "next/image";
import { playfairDisplay } from "@/pages/index";
interface ColumnProps {
    title: string;
    description: string;
    image: string;
}

const Column: React.FC<ColumnProps> = ({ title, description, image }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-[280px] h-[284px] px-5 bg-[#FFF9F1] border-[1px] border-[#F9C06A] hover:bg-[#FFEED8]">
            <Image src={image} alt={title} width={88} height={88} />
            <h1 className={`text-[#603809] text-[28px] font-extrabold  ${playfairDisplay.className}`}>{title}</h1>
            <p className={`px-6 text-[20px] text-center text-[#707070] ${playfairDisplay.className}`}>{description}</p>
        </div>
    )
}

export default Column;
