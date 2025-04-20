import { playfairDisplay } from "@/pages/index";


interface SectionsTitleProps {
    title: string;
    description: string;
    titleColor: string;
    descriptionColor: string;
    image?: string;
    imagePosition?: string;
}

const SectionsTitle: React.FC<SectionsTitleProps> = ({ title, description, titleColor, descriptionColor, image, imagePosition }) => {
    return (
        <div className=" flex flex-col gap-2 p-2">
            <h1 className={`${playfairDisplay.className} relative z-10 text-[54px] ${titleColor} font-bold`}>{title}</h1>
            <p className={`${playfairDisplay.className} relative z-10 text-[20px] ${descriptionColor}  font-normal `}>{description}</p>
            <div className={`absolute -top-30   z-10 md:w-[498px] md:h-[272px] bg-no-repeat bg-contain ${imagePosition}`} style={{backgroundImage: `url(${image})`}}></div>
      </div>
    )
}

export default SectionsTitle;