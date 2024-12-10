'use client'
import { useState } from "react";
import SidebarMenu from "./SidebarMenu/SidebarMenu";


const SideBar = ({smallDeviceSidebarCondition}: any) => {
     
    const [condition,setCondition]=useState({isopen:false,condition:''})

  
    
  return (

<div className=" h-full">
     <div className=" top-0 hidden xl:block  fixed w-[70px]  bg-white h-full z-50  hover:w-[270px] group ps-2 pe-3 duration-300" >
         <SidebarMenu setCondition={setCondition}/>
    </div>
    
{smallDeviceSidebarCondition&& <div className=" top-0 overflow-scroll   fixed   bg-white h-full z-50  w-[270px] group ps-2 pe-3 duration-300" >
         <SidebarMenu setCondition={setCondition}/>
    </div>}
    <div>
 {/* {condition?.isopen&&  <SidebarSubMenu condition={condition}/>
        
        }   */}
    </div>
      
       
  


    
</div>
  );
};

export default SideBar;