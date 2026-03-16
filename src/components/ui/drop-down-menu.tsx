import {motion} from "framer-motion";
import Link from "next/link";

interface DropDownMenuProps {
    onClose: () => void;
    
}


const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose}) => {
    return ( 
       <motion.div className="
       w-screen
       h-screen
       bg-linear-to-b
      from-[#6B1F2B]
      to-[#F2E6DA]
       bg-opacity-50
       text-slate-300p-6
       p-6
       space-y-4
       absolute
       top-28
       left-0
       right-0
       z-50
       rounded-t-3xl "
       
       initial={{opacity:0, y: '-80%'}}
       animate={{opacity:1, y:0 }}
       exit= {{opacity:0, y:'-100%'}}
       transition={{ duration: 0.5}}
       >

        <div className="flex-col flex space-y-10">
            <Link href= "/pricing" className="text-slate-300 text 2xl">
            Pricing
            </Link>
            <Link href= "/contact" className="text-slate-300 text 2xl">
            Contact
            </Link>
            <Link href= "/book" className="text-slate-300 text 2xl">
            Book a call
            </Link>

            <Link href='/#services'  className="cursor-pointer text-black text-2xl">
          Services
        </Link>
            
        </div>

       </motion.div>
     );
}
 
export default DropDownMenu;