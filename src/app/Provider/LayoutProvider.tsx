'use client'
import Navbar from "@/components/Navbar/Navbar";
import BottomNavigation from "@/SharedComponent/BottomNavigation/BottomNavigation";
import SideBar from "@/SharedComponent/SideBar/SideBar";
import { useState } from "react";

const LayoutProvider = ({children}:any) => {

    const [smallDeviceSidebarCondition,setSmallDeviceSidebarCondition]=useState(false)

    console.log(smallDeviceSidebarCondition,'ssss')

  return (
    <div>  <Navbar setSmallDeviceSidebarCondition={setSmallDeviceSidebarCondition}/>
           <SideBar smallDeviceSidebarCondition={smallDeviceSidebarCondition}/>
      {children}
    <BottomNavigation  setSmallDeviceSidebarCondition={setSmallDeviceSidebarCondition}/>
    </div>
  );
};

export default LayoutProvider;