import { Clicker_Script, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/featuredProducts";
import MulticolumnSection from "@/components/multicolumnSection";
import GetStarted from "@/components/GetStarted";
import cup from "@/public/cup.png";
import bg_coffee from "@/public/bg_coffee.png";
import stylized_cup from "@/public/stylized-cup-coffee.png";
import Newsletter from "@/components/newsletter";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/Footer";

export const clickerScript = Clicker_Script({
  weight: "400",
  variable: "--clicker-script",
  subsets: ["latin"],
});

export const playfairDisplay = Playfair_Display({
  weight: "400",
  variable: "--playfair-display",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`flex flex-col relative  h-screen ${clickerScript.className}`}>
      <Header />
      <Hero />
      <AboutSection 
      titleColor_1="text-[#603809]" descriptionColor_1="text-[#707070]"
       img_width={680} img_height={476} image_2={stylized_cup.src}
       title="Discover the best coffee" description="Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted." />
      <FeaturedProducts />
      <MulticolumnSection />
      <GetStarted />
      <AboutSection
      titleColor_1="text-[#fff]" descriptionColor_1="text-[#fff]"
       img_width={300} img_height={476} image={bg_coffee.src} image_2={cup.src} title="Get a chance to have an Amazing morning" 
      description="We are giving you are one time opportunity to experience a better life with coffee."  />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
