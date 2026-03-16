'use client'

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import { DirectionAwareHoverDemo } from "./snippets/direction-aware-hover";


const WebsiteDesign = () => {
    return ( 
        <div>
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center text-transparent
        bg-clip-text 
             bg-gradient-to-b
            from-[#968d8f]
            to-[#2a2324] bg-opacity-50">
              Website Design <br />
           Built to Impress. Designed to Perform.
            </div>
            <p className="mt-4 text-lg font-normal text-slate-800 ,ax-w-lg text-center mx-auto px-4">
                Clean design. Smooth experience. Real results.
            </p>

            <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
                <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{y:0, opacity: 1 }}
                className="px-10 md:px-0"
                >
                    <ThreeDCardExample />
                    
                </motion.div>

                <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{y:0, opacity: 1 }}
                className="px-5 md:px-0"
                >
                    
                    <DirectionAwareHoverDemo />
                </motion.div>

            </div>
            </div>
        </div>
     );
}
 
export default  WebsiteDesign;