import React from "react";
import Button from "@/components/common/Button";
import { playfairDisplay } from "@/pages/index";

const GetStarted: React.FC = () => {
    return (
        <div className="container mx-auto flex flex-col pt-4 pb-10 items-center justify-center gap-2">
            <p className={`text-[#707070] text-[20px] font-medium ${playfairDisplay.className}`}>Great ideas start with great coffee, Lets help you achieve that</p>
            <h1 className={`text-[#603809] text-[30px] font-extrabold ${playfairDisplay.className}`}>
                Get started today.
            </h1>
            <Button className="mx-auto text-black">
                Join Us
            </Button>
        </div>
    )
}

export default GetStarted;