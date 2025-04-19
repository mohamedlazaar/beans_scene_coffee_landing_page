import React from "react";
import { playfairDisplay } from "@/pages/index";
import cappuccino from "@/public/products_images/cappuccino.png";
import SectionsTitle from "@/components/common/SectionsTitle";
import coffee_blast from "@/public/coffee_blast.png";
import ProductCard from "./productCard";
const FeaturedProducts: React.FC = () => {
    return (
        <div className="w-full relative flex  py-[100px] flex-col items-center justify-center">
            <SectionsTitle title="Enjoy a new blend of coffee style" description="Explore all flavours of coffee with us. There is always a new cup worth experiencing." titleColor="text-[#603809]" 
            descriptionColor="text-[#707070]" image={coffee_blast.src} imagePosition="left-0" />

            <div className="container mx-auto flex flex-col gap-10 mt-10  md:flex-row items-center justify-center">
                <ProductCard image={cappuccino.src} title="Cappuccino" description="Coffee 50% | Milk 50%" price="10" />
                <ProductCard image={cappuccino.src} title="Cappuccino" description="Coffee 50% | Milk 50%" price="10" />
                <ProductCard image={cappuccino.src} title="Cappuccino" description="Coffee 50% | Milk 50%" price="10" />
                <ProductCard image={cappuccino.src} title="Cappuccino" description="Coffee 50% | Milk 50%" price="10" />
            </div>
        </div>
    )
}

export default FeaturedProducts;