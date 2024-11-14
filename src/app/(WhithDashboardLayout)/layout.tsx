

import Navbar from "@/components/Navbar/Navbar";
import BottomNavigation from "@/SharedComponent/BottomNavigation/BottomNavigation";
import SideBar from "@/SharedComponent/SideBar/SideBar";
import LayoutProvider from "../Provider/LayoutProvider";



const layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            <LayoutProvider>

            {children}
            </LayoutProvider>
         
            
                
               

            
        </div>
    );
};

export default layout;