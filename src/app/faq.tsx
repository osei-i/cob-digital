import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const FAQS = () => {
    return ( 
    <div className=" mt-10 md:py-10 bg-[#A45A3F] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-7xl font-bold text-black">
              Have questions ?
            </div> <br />
            <div className="  font-semibold text-3xl md:text-6xl text-slate-800">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>What is COB Digital Marketing?</AccordionTrigger>
      <AccordionContent>
        COB Digital Marketing is a full-service digital agency that specializes in social media management, virtual assistance, email marketing, and website development.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How can you get access to us ?</AccordionTrigger>
      <AccordionContent>
        You can start by contacting us. We will get back to you within 24 hours.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
    Pricing ?
      </AccordionTrigger>
      <AccordionContent>
        We offer custom tailored solutions for your business. Contact us to get a quote.
        
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger>
    Support ?
        </AccordionTrigger>
      <AccordionContent>
        We offer Monday-Friday support for all our clients.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div>
         );
}
 
export default FAQS;