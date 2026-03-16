'use client';


import Navbar from "@/components/ui/navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import Link from "next/link";
import SliderOne from "@/components/ui/slider";
import SocialMedia from "./social-media";
import WebsiteDesign from "./website-design";
import VirtualAssistance from "./virtual-assistance";
import Services from "./services";
import FAQS from "./faq";
import { useRef } from "react";


const Home = () => {

const SocialMediaRef = useRef<HTMLDivElement>(null);
const WebsiteDesignRef = useRef<HTMLDivElement>(null);
const VirtualAssistanceRef = useRef<HTMLDivElement>(null);
const ServicesRef = useRef<HTMLDivElement>(null);


 const scrollToSocialMedia = () => {
    SocialMediaRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToWebsiteDesign = () => {
    WebsiteDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVirtualAssistance = () => {
    VirtualAssistanceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    ServicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };



  return ( 
  <div className="w-full  md:justify-center bg-[#CBB8A6] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
    <Navbar 
        scrollToSocialMedia={scrollToSocialMedia}
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToVirtualAssistance={scrollToVirtualAssistance}
        scrollToServices={scrollToServices}
    />
    <div className="relative overflow-hidden">
  <Spotlight
    className="hidden md:flex left-80"
    fill="#6B1F2B"
  />
</div>
    <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center text-transparent
        bg-clip-text 
             bg-linear-to-b
            from-[#6B1F2B]
            to-[#8A3A46] bg-opacity-50">
              Create, grow, and <br />Scale your business
            </div>
            <p className="mt-4 text-lg font-normal text-slate-800 ,ax-w-lg text-center mx-auto px-4">
              Custom tailored solutions for your business. We are a team of creatives who are excited to help you grow your business.
            </p>

            <Link href={"/book"}
            className="cursor-pointer 
            flex items-center 
            justify-center border rounded-full w-48 p-2 mx-auto my-6 text-slate-800 ">
              Book a call
            </Link>

            <div className="w-full pt-20">
              <SliderOne />
              </div>

              <div ref={SocialMediaRef}>
                      <SocialMedia />
              </div>
              

              <div ref={WebsiteDesignRef} >
                <WebsiteDesign />
              </div>

              <div ref={VirtualAssistanceRef}>
                <VirtualAssistance />
              </div>

              <div ref={ServicesRef}>
                <Services />
              </div>

              <FAQS />

            </div>
    </div>
  
   );
}
 
export default Home;
