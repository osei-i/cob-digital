'use client';

import { useState } from "react";
import {motion} from "framer-motion";
import {AlignJustify, X } from "lucide-react";


import Image from "next/image";
import Link from "next/link"
import { div } from "motion/react-client";
import DropDownMenu  from "./drop-down-menu";

interface NavbarProps  {
  scrollToSocialMedia: () => void;
  scrollToWebsiteDesign: () => void;
  scrollToVirtualAssistance: () => void;
  scrollToServices: () => void;
}

const Navbar = ({
    scrollToSocialMedia,
    scrollToWebsiteDesign,
    scrollToVirtualAssistance,
    scrollToServices,
}: NavbarProps) => {

    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
   
    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible);
    };

    const closeDropDown = () => {
        setIsDropDownVisible(false);
    };

    return (
         <div>
        <div className="p-6 md:p-10 flex items-center justify-between z-50">
            <div>
                <Link className="cursor-pointer" href="/" >
                <Image 
                priority
                src="/logo/thelogo.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-10 h-10 md:w-14 md:h-14 object-cover"
                /> 
                </Link>
            </div>
            
            <div className="cursor-pointer hidden 
            md:flex space-x-10 items-center 
            text-slate-800 text-center 
            bg-clip-text 
             bg-linear-to-b
            from-[#F2E6DA]
            to-[#6B1F2B] bg-opacity-50">
                <div onClick={scrollToSocialMedia} className="hover:text-[#6B1F2B]">Social Media</div>
                <div onClick={scrollToWebsiteDesign} className="hover:text-[#6B1F2B]">Website Design</div>
                <div onClick={scrollToVirtualAssistance} className="hover:text-[#6B1F2B]">Virtual Assistance</div>
                <div onClick={scrollToServices} className="hover:text-[#6B1F2B]">Services</div>


                <Link href= "/pricing" className="hover:text-[#6B1F2B]">
                Pricing
                </Link>

            </div>
            <div className="flex md:hidden">
                {isDropDownVisible ? (
                    // display an x icon when the drop is visible
                    <div
                    onClick={toggleDropDown}
                    className= "w-8 h-8 text-slate-300 cursor-pointer" >
                       <X />
                       <DropDownMenu onClose={closeDropDown} />
                    </div>

                ) : (
                    <AlignJustify
                    onClick={toggleDropDown}
                    className="w-8 h-8 text-slate-300 cursor-pointer"/>
                )
            }
            </div>

            <div className="hidden md:flex">
                <Link href="/contact"
                className="inline-flex h-12 animate-shimmer items-center 
                justify-center rounded-md border border-[#6B1F2B] bg-[linear-gradient(110deg,#6B1F2B,45%,#F2E6DA,55%,#6B1F2B)]
                bg-size px-6 font-medium text-slate-400 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-[#6B1F2B] focus:ring-offset-2 focus:ring-offset-slate-50">
                    Contact
                </Link>

                
       
  
        
        
      
            </div>
            
            
        </div>
    </div> );
}
 
export default Navbar;