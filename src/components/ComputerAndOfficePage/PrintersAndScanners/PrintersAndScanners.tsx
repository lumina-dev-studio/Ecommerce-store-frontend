import { Card } from "@/components/ui/card";
import ProductCardImageslider from "@/SharedComponent/ProductCard/ProductCardImageslider";
import ProductCardPartTow from "@/SharedComponent/ProductCard/ProductCardPartTow";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const PrintersAndScanners = () => {
    const data = [1, 2, 3, 4, 5]; // Mock data
    return (
      <div className="my-10">
      {/* Section Title */}
      <SectionTitle title="Printers & Scanners" condition={true} />
      {/* Cards Grid */}
      <div className="grid   grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-5 place-items-center  ">
          {data.map((item, index) => (
            <Card
              key={index} // Assign a unique key for each element
              className="w-[250px] p-3.5 group shadow-sm border-none relative hover:rounded-b-none hover:scale-105 hover:shadow-xl duration-300 hover:z-20"
            >
              <ProductCardImageslider />
              <ProductCardPartTow />
            </Card>
          ))}
        </div>
        
      </div>
  );
};

export default PrintersAndScanners;