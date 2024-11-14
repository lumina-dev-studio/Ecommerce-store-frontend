import { FaAngleRight } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Smartphones = ({setCondition}:any) => {
  return (
    <div>
    <div  className=" flex items-center pt-3 "
     onMouseEnter={() => setCondition({isopen:true,condition:'Smartphones'})}
        onMouseLeave={() => setCondition({isopen:false,condition:''})}>
            <div className="  rounded-full w-full  flex gap-2 p-1  items-center cursor-pointer" >
             <div className=" w-[40px] h-[40px] rounded-full flex justify-center p-2 " >
             <IoPhonePortraitOutline className=" text-black text-[25px] " />
             </div>
        <div className=" group-hover:flex justify-between w-full items-center hidden   ">

        <p className=" font-[600] text-gray-500 text-[14px] hover:text-blue-500  pe-2     ">Smart & Phones</p>  <FaAngleRight className=" text-[13px] text-gray-400" />
        </div>

            </div>
        </div>
</div>
  );
};

export default Smartphones;