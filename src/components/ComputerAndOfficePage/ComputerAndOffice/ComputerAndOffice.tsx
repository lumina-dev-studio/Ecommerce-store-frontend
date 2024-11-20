import MediumCard from "@/SharedComponent/MediumCard/MediumCard";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const ComputerAndOffice = () => {
    const categories = [
        {
          title: "Monitors",
          image: "/bannar/camera.png", // Replace with actual image path
          items: ["2K Monitors", "4K Monitors", "Curved Monitors", "Gaming Monitors"],
        },
        {
          title: "Printers & Scanners",
          image: "/bannar/headPhone.png", // Replace with actual image path
          items: ["Printers & All-In-One", "Inkjet Printers", "Laser Printers","Scanners"],
        },
        {
          title: "Input Devices",
          image: "/bannar/joypad.png", // Replace with actual image path
          items: ["Mouse", "Keyboards", "Headsets","Card Readers"],
        },
      ];
  return (
    <div className="my-10">
    {/* Section Title */}
    <SectionTitle title="Computer & Office" condition={false} />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {categories.map((data, index) => (
        <MediumCard  key={index} data={data}/>
      ))}
    </div>
    </div>
  );
};

export default ComputerAndOffice;