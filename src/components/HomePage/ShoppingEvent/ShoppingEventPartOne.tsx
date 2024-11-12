import { Card } from "@/components/ui/card";
import { GoChevronRight } from "react-icons/go";

const ShoppingEventPartOne = () => {
  return (
    <div className=" grid md:grid-cols-2 md:gap-10 items-center xl:items-start   ">
    
    <section className=" flex   ">
                <img
                  src="/shoppngEvent/appleProduct.png"
                  className="w-full h-[200px]  md:mt-[50px] xl:mt-0 lg:h-[250px] xl:h-[400px] transform transition-transform duration-500 group-hover:scale-110"
                  alt="Joypad"
                />
              </section>


    <section className=" md:mt-10 ">
               <div className=" ">
               <h1 className=" font-semibold text-[25px] md:text-[27px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px]">Apple Shopping Event</h1>
               <p className=" font-[500] text-[18px] xl:text-[20] 2xl:text-[25px] mt-3">Hurry and get discounts on all Apple devices up to 20%</p>
                
                <div className=" my-4 flex gap-2 mt-3">
                    <Card className=" border-none  rounded-xl py-1.5  px-1 bg-white text-center w-[60px] xl:w-[75px]">
                          <h1 className=" text-[18px] xl:text-[27px] font-bold">51</h1>
                          <p className=" text-[13px] xl:text-[17px]  text-gray-500">Days</p>
                    </Card>
                    <Card className=" border-none  rounded-xl py-1.5  px-1 bg-white  text-center w-[60px] xl:w-[75px]">
                          <h1 className=" text-[18px] xl:text-[27px] font-bold">15</h1>
                          <p className=" text-[13px] xl:text-[17px]  text-gray-500">Hr</p>
                    </Card>
                    <Card className=" border-none  rounded-xl py-1.5  px-1 bg-white  text-center w-[60px] xl:w-[75px]">
                          <h1 className=" text-[18px] xl:text-[27px] font-bold">33</h1>
                          <p className=" text-[13px] xl:text-[17px]  text-gray-500">min</p>
                    </Card>
                    <Card className=" border-none  rounded-xl py-1.5  px-1 bg-white  text-center w-[60px] xl:w-[75px]">
                          <h1 className=" text-[18px] xl:text-[27px] font-bold">10</h1>
                          <p className=" text-[13px] xl:text-[17px]  text-gray-500">Sc</p>
                    </Card>
                </div>
               </div>

                <div className="mt-2">
            <button className="py-2.5 px-6 text-[15px] text-white flex  items-center gap-1 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
            Go Shopping  <GoChevronRight className=" text-[20px]" />
            </button>
          </div>
              </section>
      
    </div>
  );
};

export default ShoppingEventPartOne;