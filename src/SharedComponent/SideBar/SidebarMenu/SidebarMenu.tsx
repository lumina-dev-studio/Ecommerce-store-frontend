import ComputerAndOffice from "./ComputerAndOffice/ComputerAndOffice";
import GamesAndEntertainment from "./GamesAndEntertainment/GamesAndEntertainment";
import HardwareAndComputers from "./HardwareAndComputers/HardwareAndComputers";
import HomeAppliance from "./HomeAppliance/HomeAppliance";
import SidebarLaptopsTabletsPcs from "./LaptopsTabletsPcs/LaptopsTabletsPcs";
import PhotoAndVideo from "./PhotoAndVideo/PhotoAndVideo";
import SidebarCategory from "./SidebarCategory/SidebarCategory";


import Smartphones from "./Smartphones/Smartphones";
import TVAndHifi from "./TVAndHifi/TVAndHifi";


const SidebarMenu = ({setCondition}:any) => {
  return (
    <div className=" ">
      <SidebarCategory/>
      <SidebarLaptopsTabletsPcs setCondition={setCondition}/>
      <ComputerAndOffice setCondition={setCondition}/>
      <HardwareAndComputers setCondition={setCondition}/>
      <Smartphones setCondition={setCondition}/>
      <GamesAndEntertainment setCondition={setCondition}/>
      <TVAndHifi setCondition={setCondition}/>
      <PhotoAndVideo setCondition={setCondition}/>
      <HomeAppliance setCondition={setCondition}/>
    </div>
  );
};

export default SidebarMenu;