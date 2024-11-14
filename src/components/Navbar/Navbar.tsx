import NavbarPartOne from "./NavbarPartOne";
import NavbarPartTow from "./NavbarPartTow";


const Navbar = ({setSmallDeviceSidebarCondition}:any) => {

  return (

    <div>

   <section>
    <NavbarPartOne setSmallDeviceSidebarCondition={setSmallDeviceSidebarCondition}/>
    </section>
   
   <section className=" hidden  xl:inline">
    <NavbarPartTow/>
   </section>
 
    </div>
  );
};

export default Navbar;