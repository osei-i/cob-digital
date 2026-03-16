'use client'
import Image from "next/image";

const stores = [
  {
    image: "/Images/walls-io-teK5q88upVo-unsplash (1).jpg",
    quote: "Organizing daily tasks and workflows",
    name: "COB DIGITALS",
  },
  {
    image: "/Images/vitaly-gariev-n1yI8oExVns-unsplash.jpg",
    quote:
      "Handling emails professionally and responding to clients and inquiries",
    name: "COB DIGITALS",
  },

  {
    image: "/Images/jonathan-arbely-477E0cXoc1c-unsplash.jpg",
    quote:
      "Managing meetings and appointments",
    name: "COB DIGITALS",
  },
];



const VirtualAssistance = () => {
    return (
        <section
      className=" mt-10 md:py-10 bg-[#A45A3F] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Virtual Assistance <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-slate-800 max-w-lg text-center mx-auto">
          We handle the tasks behind the scenes so you can focus on growing your business.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-slate-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-slate-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}

export default VirtualAssistance


// Photo by Jonathan Arbely on Unsplash