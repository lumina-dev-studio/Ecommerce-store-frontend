'use client'
import { useState } from "react";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import SidebarSubMenu from "./SidebarSubMenu/SidebarSubMenu";

const SideBar = ({smallDeviceSidebarCondition}: any) => {
     
    const [condition,setCondition]=useState({isopen:false,condition:''})

    console.log(smallDeviceSidebarCondition,'hello')
    
  return (

<div className=" h-full">
     <section className=" top-0 hidden xl:block  fixed w-[70px]  bg-white h-full z-50  hover:w-[270px] group ps-2 pe-3 duration-300" >
         <SidebarMenu setCondition={setCondition}/>
    </section>
    
{smallDeviceSidebarCondition&& <section className=" top-0 overflow-scroll   fixed   bg-white h-full z-50  w-[270px] group ps-2 pe-3 duration-300" >
         <SidebarMenu setCondition={setCondition}/>
    </section>}
    <section>
 {/* {condition?.isopen&&  <SidebarSubMenu condition={condition}/>
        
        }   */}
    </section>
      
       
  


    
</div>
  );
};

export default SideBar;