import { FaAngleRight } from "react-icons/fa6";
import { GoCpu } from "react-icons/go";

const HardwareAndComputers = ({setCondition}:any) => {
  return (
    <div>
       <div  className=" flex items-center pt-3 "
     onMouseEnter={() => setCondition({isopen:true,condition:'HardwareAndComputers'})}
        onMouseLeave={() => setCondition({isopen:false,condition:''})}>
            <div className="  rounded-full w-full  flex gap-2 p-1  items-center cursor-pointer" >
             <div className=" w-[40px] h-[40px] rounded-full flex justify-center p-2 " >
             <GoCpu className=" text-black text-[25px] " />
             </div>
        <div className=" group-hover:flex justify-between w-full items-center hidden   ">

        <p className=" font-[600] text-gray-500 text-[14px] hover:text-blue-500  pe-2     ">Hardware & Computers</p>  <FaAngleRight className=" text-[13px] text-gray-400" />
        </div>

            </div>
        </div>
</div>
  );
};

export default HardwareAndComputers;