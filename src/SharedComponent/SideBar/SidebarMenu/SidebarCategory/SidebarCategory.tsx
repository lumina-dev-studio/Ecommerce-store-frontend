import { RiMenuFill } from "react-icons/ri";

const SidebarCategory = () => {
  return (
    <div>
       <div  className=" flex items-center pt-3">
                <div className="  rounded-full w-full group-hover:bg-blue-500 flex gap-2 p-1  items-center cursor-pointer" >
                 <div className=" w-[40px] h-[40px] rounded-full flex justify-center p-2 bg-blue-500" >
                 <RiMenuFill className=" text-white text-[25px] " />
                 </div>
                 <p className="font-[600] text-white pe-2 text-[15px] hidden group-hover:block transition-opacity duration-3000 delay-3000">
  All Categories
</p>

                </div>
            </div>
    </div>
  );
};

export default SidebarCategory;