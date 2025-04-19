import React from "react";
import { playfairDisplay } from "@/pages/index";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return <button className={`${playfairDisplay.className} cursor-pointer ${className} self-start bg-[#F9C06A]  w-[134px] h-[48px] rounded-full text-[16px] font-bold`} onClick={onClick}>{children}</button>;
};

export default Button;
