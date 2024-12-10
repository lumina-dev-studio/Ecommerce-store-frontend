import { Card } from "@/components/ui/card";
import { FaHeadphones } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";
import { LiaKeyboardSolid } from "react-icons/lia";
import { PiMouseSimpleFill } from "react-icons/pi";

const MicrosoftAccessoriesPartOneBanner = () => {
  return (
    <Card className=" md:flex px-5 xl:h-[350px] items-center gap-5 pb-5">

        
    <div className=" flex   ">
                <img
                  src="/shoppngEvent/appleProduct.png"
                  className="w-full h-[200px]  md:mt-[50px] xl:mt-0 lg:h-[250px]  transform transition-transform duration-500 group-hover:scale-110"
                  alt="Joypad"
                />
              </div>

              <div >
                <h1 className=" text-[20px] md:text-[27px] xl:text-[45px] font-[600]">Microsoft <br  className=" hidden xl:block"/> Accessories</h1>
                <p className=" text-gray-500 mt-3">Personalize your Surface Pro with Microsoft branded <br className=" hidden lg:block" /> accessories. In the presence of many colors for every taste.</p>


                <div className=" grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-5">
                  
                  <div className=" flex items-center gap-1 bg-gray-100 hover:bg-gray-300 cursor-pointer p-2 rounded ">
                    <LiaKeyboardSolid /> <span className=" block text-[13px] text-gray-500 font-[600]">Keyboards</span>
                  </div>
                  <div className=" flex items-center gap-1 bg-gray-100 hover:bg-gray-300 cursor-pointer p-2 rounded ">
                    <IoPencil/> <span className=" block text-[13px] text-gray-500 font-[600]">Surface pen</span>
                  </div>
                  <div className=" flex items-center gap-1 bg-gray-100 hover:bg-gray-300 cursor-pointer p-2 rounded ">
                  <PiMouseSimpleFill /><span className=" block text-[13px] text-gray-500 font-[600]">Mices</span>
                  </div>
                  <div className=" flex items-center gap-1 bg-gray-100 hover:bg-gray-300 cursor-pointer p-2 rounded ">
                  <FaHeadphones /><span className=" block text-[13px] text-gray-500 font-[600]">Headphones</span>
                  </div>


                </div>

              </div>
      
    </Card>
  );
};

export default MicrosoftAccessoriesPartOneBanner;