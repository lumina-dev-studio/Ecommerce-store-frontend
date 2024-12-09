'use client'
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { store } from "@/Redux/store";
import BottomNavigation from "@/SharedComponent/BottomNavigation/BottomNavigation";
import Footer from "@/SharedComponent/Footer/Footer";
import RightSidebar from "@/SharedComponent/RightSidebar/RightSidebar";
import SideBar from "@/SharedComponent/SideBar/SideBar";
import { useState } from "react";
import { Provider } from "react-redux";

const LayoutProvider = ({children}:any) => {

    const [smallDeviceSidebarCondition,setSmallDeviceSidebarCondition]=useState(false)

    

  return (
    <div> 
      <Provider store={store}>

      
      
       <Navbar setSmallDeviceSidebarCondition={setSmallDeviceSidebarCondition}/>
           <SideBar smallDeviceSidebarCondition={smallDeviceSidebarCondition}/>
      {children}
    <BottomNavigation smallDeviceSidebarCondition={smallDeviceSidebarCondition}  setSmallDeviceSidebarCondition={setSmallDeviceSidebarCondition}/>

    <RightSidebar/>
    <Footer/>
    <Toaster  />
    </Provider>
    </div>
  );
};

export default LayoutProvider;