import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { RiMouseLine } from "react-icons/ri";

const ComputerAndOffice = ({setCondition}:any) => {
  const handler=()=>{
    setTimeout(() => {
      window.location.reload();
      
    }, 200);
  }
  return (
    <div>
    <div  className=" hidden lg:flex items-center pt-3 "
     onMouseEnter={() => setCondition({isopen:true,condition:'ComputerAndOffice'})}
        onMouseLeave={() => setCondition({isopen:false,condition:''})}>
            <div className="  rounded-full w-full  flex gap-2 p-1  items-center cursor-pointer" >
             <div className=" w-[40px] h-[40px] rounded-full flex justify-center p-2 " >
             <RiMouseLine className=" text-black text-[25px] " />
             </div>
        <div className=" group-hover:flex justify-between w-full items-center hidden "
        
       >

        <Link onClick={handler} href='/productCategory/computerAndOffice' className=" font-[600] text-gray-500 text-[14px] hover:text-blue-500  pe-2     ">Computer & Office</Link>  <FaAngleRight className=" text-[13px] text-gray-400" />
        </div>

            </div>
        </div>
    <div  className=" flex lg:hidden items-center pt-3 "
     onMouseEnter={() => setCondition({isopen:true,condition:'ComputerAndOffice'})}
        onMouseLeave={() => setCondition({isopen:false,condition:''})}>
            <div className="  rounded-full w-full  flex gap-2 p-1  items-center cursor-pointer" >
             <div className=" w-[40px] h-[40px] rounded-full flex justify-center p-2 " >
             <RiMouseLine className=" text-black text-[25px] " />
             </div>
        <div className=" flex justify-between w-full items-center  "
        
       >

        <Link onClick={handler} href='/productCategory/computerAndOffice' className=" font-[600] text-gray-500 text-[14px] hover:text-blue-500  pe-2     ">Computer & Office</Link>  <FaAngleRight className=" text-[13px] text-gray-400" />
        </div>

            </div>
        </div>
</div>
  );
};

export default ComputerAndOffice;