
import MediumCard from "@/SharedComponent/MediumCard/MediumCard";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";


const LaptopsTabletsAndPCs = () => {
    const categories = [
        {
          title: "LAPTOPS",
          image: "/bannar/camera.png", // Replace with actual image path
          items: ["Apple MacBook", "Business Laptop", "Gaming Laptop", "Ultrabook"],
        },
        {
          title: "TABLETS",
          image: "/bannar/headPhone.png", // Replace with actual image path
          items: ["Apple iPad", "Android Tablets", "Windows Tablets"],
        },
        {
          title: "PCS",
          image: "/bannar/joypad.png", // Replace with actual image path
          items: ["Gaming PCs", "Office PCs", "All in one"],
        },
      ];
  return (
    <div className=" mt-5">
       <SectionTitle title="Laptops, Tablets & PCs" condition={false} />
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {categories.map((data, index) => (
        <MediumCard  key={index} data={data}/>
      ))}
    </div>
    </div>
  );
};

export default LaptopsTabletsAndPCs;