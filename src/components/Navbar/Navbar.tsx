import NavbarPartOne from "./NavbarPartOne";
import NavbarPartTow from "./NavbarPartTow";


const Navbar = ({setSmallDeviceSidebarCondition}:any) => {

  return (

    <div className="">

   <div >
    <NavbarPartOne setSmallDeviceSidebarCondition={setSmallDeviceSidebarCondition}/>
    </div>
   
   <div className=" hidden  xl:inline">
    <NavbarPartTow/>
   </div>
 
    </div>
  );
};

export default Navbar;