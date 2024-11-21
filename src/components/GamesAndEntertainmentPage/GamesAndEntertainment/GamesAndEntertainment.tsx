import MediumCard from "@/SharedComponent/MediumCard/MediumCard";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const GamesAndEntertainment = () => {
    const categories = [
        {
          title: "Consoles",
          image: "/bannar/camera.png", // Replace with actual image path
          items: ["PlayStation Consoles", "Xbox Consoles", "Nintendo Consoles", "Consoles Games"],
        },
        {
          title: "Pc Gaming",
          image: "/bannar/headPhone.png", // Replace with actual image path
          items: ["PC Games", "Gamepads", "Wheels","VR Headsets"],
        },
      
      ];
  return (
    <div className=" mt-5">
    <SectionTitle title="Games & Entertainment" condition={false} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
   {categories.map((data, index) => (
     <MediumCard  key={index} data={data}/>
   ))}
 </div>
 </div>
  );
};

export default GamesAndEntertainment;