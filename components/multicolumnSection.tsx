import React from "react";
import SectionsTitle from "@/components/common/SectionsTitle";
import Column from "@/components/column";
import badge from "@/public/quality/badge.png";
import best_price from "@/public/quality/best-price.png";
import coffee_beans from "@/public/quality/coffee-beans.png";
import coffee_cup from "@/public/quality/coffee-cup.png";
import coffee_blast from "@/public/coffee_blast.png";

const MulticolumnSection: React.FC = () => {
    return (
    
        <div className=" relative flex   py-[60px] flex-col items-center justify-center">
            <SectionsTitle title="Why are we different?" description="We don’t just make your coffee, we make your day!" 
            titleColor="text-[#603809]" descriptionColor="text-[#707070]" image={coffee_blast.src} imagePosition="right-0 rotate-y-180" />
            <div className="flex flex-col mt-[30px] md:flex-row gap-4 px-6">
                <Column title="Supreme Beans" description="Beans that provides great taste" image={coffee_beans.src} />
                <Column title="High Quality" description="We provide the highest quality" image={badge.src} />
                <Column title="Extraordinary" description="Coffee like you have never tasted" image={coffee_cup.src} />
                <Column title="Best Price" description="We provide the best price" image={best_price.src} />
            </div>
        </div>
    )
}

export default MulticolumnSection;