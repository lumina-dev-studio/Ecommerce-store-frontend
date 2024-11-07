import NavbarPartOne from "./NavbarPartOne";
import NavbarPartTow from "./NavbarPartTow";


const Navbar = () => {

  return (

    <div>

   <section>
    <NavbarPartOne/>
    </section>
   
   <section className=" hidden  xl:inline">
    <NavbarPartTow/>
   </section>
 
    </div>
  );
};

export default Navbar;