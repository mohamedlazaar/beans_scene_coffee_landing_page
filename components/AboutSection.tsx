import React from "react";
import Image from "next/image";
import SectionsTitle from "@/components/common/SectionsTitle";
import Button from "@/components/common/Button";

interface AboutSectionProps {
    title: string;
    description: string;
    image?: string;
    image_2: string;
    img_width?: number;
    img_height?: number;
    titleColor_1: string;
    descriptionColor_1: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
    title,
    description,
    image,
    image_2,
    img_width,
    img_height,
    titleColor_1,
    descriptionColor_1
}) => {
    return (
        <section 
            className="w-full flex py-7 relative items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: image ? `url(${image})` : 'none' }}
        >
            <div className="container mx-auto flex flex-col gap-10 md:flex-row items-center justify-center">
                <div className="flex flex-col gap-6 w-full md:w-[50%]">
                    <SectionsTitle 
                        title={title} 
                        titleColor={titleColor_1}
                        description={description}
                        descriptionColor={descriptionColor_1}
                    />
                    <Button className="text-black">
                        Learn More
                    </Button>
                </div>
                <div className="flex justify-center items-center gap-10 w-full md:w-[50%]">
                    <Image 
                        src={image_2} 
                        alt="about"  
                        width={img_width || 680}  
                        height={img_height || 476}
                        className="object-cover"
                    />
                </div>                
            </div>
        </section>
    );
};

export default AboutSection;