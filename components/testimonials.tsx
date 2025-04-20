import React from "react";
import SectionsTitle from "./common/SectionsTitle";
import { playfairDisplay } from "@/pages";
import Image from "next/image";
import profile from "@/public/profile.png";
import bg_blast from "@/public/coffee_blast.png";
import bg_blast_2 from "@/public/coffee_blast_2.png";
const Testimonials: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center py-[100px]">
            <Image src={bg_blast.src} alt="background" width={1000} height={1000} className="absolute top-5 right-0 rotate-y-180 w-[498px]  h-[272px] z-[4] object-cover" />
            <SectionsTitle title="Our coffee perfection feedback"
            description="Our customers has amazing things to say about us" titleColor="text-center text-[#603809]" descriptionColor="text-center text-[#707070]" />
            <div className="relative w-[95%] md:w-[70%] mt-10 gap-6 flex flex-col items-center justify-center bg-[#FFF9F1] border-[1px] border-[#F9C06A] p-10 md:p-30">
                <p className={`${playfairDisplay.className} leading-[35px] text-[16px] md:text-[18px]  text-center text-[#707070]`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....
                </p>
                <div className="relative flex flex-col gap-4">
                    <h2 className={`${playfairDisplay.className} text-center text-[32px] font-bold text-[#603809]`} >
                        John Doe
                    </h2>
                    <p className={`${playfairDisplay.className} text-center text-[#707070] text-[20px]` }>
                        Project Manager
                    </p>
                    <Image src={profile.src} alt="project manager" width={112} height={112} className="absolute -bottom-30 md:-bottom-45 left-[50%] translate-x-[-55%]" />
                </div>
            </div>
            <Image src={bg_blast_2.src} alt="background" width={1000} height={1000} className="absolute bottom-5 left-0 w-[498px]  h-[272px] z-[4] object-cover" />

        </div>
    )
}

export default Testimonials;