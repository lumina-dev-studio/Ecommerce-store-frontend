'use client'
import Navbar from "@/components/Navbar/Navbar";
import BottomNavigation from "@/SharedComponent/BottomNavigation/BottomNavigation";
import Footer from "@/SharedComponent/Footer/Footer";
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
    <Footer/>
    </div>
  );
};

export default LayoutProvider;