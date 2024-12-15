
import Link from "next/link";


import { CgLaptop } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa6";

interface SidebarLaptopsTabletsPcsProps {
  setCondition: (condition: { isopen: boolean; condition: string }) => void;
}

const SidebarLaptopsTabletsPcs: React.FC<SidebarLaptopsTabletsPcsProps> = ({ setCondition }) => {


  const handler=()=>{
    setTimeout(() => {
      window.location.reload();
      
    }, 500);
    
  }
  return (
    <div>
      <div
        className="hidden lg:flex items-center pt-3"
        onMouseEnter={() => setCondition({ isopen: true, condition: "LaptopsTabletsPcs" })}
        onMouseLeave={() => setCondition({ isopen: false, condition: "" })}
   
      >
        <div className="rounded-full w-full flex gap-2 p-1 items-center cursor-pointer">
          {/* Icon */}
          <div className="w-[40px] h-[40px] rounded-full flex justify-center p-2">
            <CgLaptop className="text-black text-[25px]" />
          </div>

          {/* Text and Link */}
          <div className="group-hover:flex justify-between w-full items-center hidden">
            <Link
              href="/productCategory/laptopsTabletsPcs"
              className="font-[600] text-gray-500 text-[14px] hover:text-blue-500 pe-2"
              onClick={handler}
            >
              Laptops, Tablets, PCs
            </Link>
            <FaAngleRight className="text-[13px] text-gray-400" />
          </div>
        </div>
      </div>

      <div
        className=" flex lg:hidden  items-center pt-3"
        onMouseEnter={() => setCondition({ isopen: true, condition: "LaptopsTabletsPcs" })}
        onMouseLeave={() => setCondition({ isopen: false, condition: "" })}
   
      >
        <div className="rounded-full w-full flex gap-2 p-1 items-center cursor-pointer">
          {/* Icon */}
          <div className="w-[40px] h-[40px] rounded-full flex justify-center p-2">
            <CgLaptop className="text-black text-[25px]" />
          </div>

          {/* Text and Link */}
          <div className="flex justify-between w-full items-center ">
            <Link
              href="/productCategory/laptopsTabletsPcs"
              className="font-[600] text-gray-500 text-[14px] hover:text-blue-500 pe-2"
              onClick={handler}
            >
              Laptops, Tablets, PCs
            </Link>
            <FaAngleRight className="text-[13px] text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLaptopsTabletsPcs;
