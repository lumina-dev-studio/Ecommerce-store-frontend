import { setRightSidebarIsopen } from "@/Redux/api/RightSideBar/RightSideBarSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { RootState } from "@/Redux/store";
import { useState } from "react";

const RightSidebar = () => {
  
    const rightSideBarIsOpen = useAppSelector((state: RootState) => state.rightSideBar.rightSidebarIsopen);
    const dispatch = useAppDispatch()

   console.log(rightSideBarIsOpen,'minny')
    
  return (

<div className=" h-full">
     <section className={` top-0  right-0 ${rightSideBarIsOpen===true?"block":"hidden"}   fixed w-[350px]  bg-white h-full z-50   group ps-2 pe-3 duration-300`} >
     
     <div className=" p-5 flex justify-between">
     <h2 className=" text-xl font-semibold" >Shopping cart</h2>
     
     <button onClick={()=> dispatch(setRightSidebarIsopen(false))} className=" block hover:text-gray-500">
      X Close
     </button>
      </div>

        <hr />

        <div>

        </div>
        
    </section>


      
       
  


    
</div>
  );
};

export default RightSidebar;