import ProductCard from "@/SharedComponent/ProductCard/ProductCard";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const HomeAppliance = () => {
  return (
    <div className=" my-20">
       <SectionTitle title="Home Appliance" condition={true} />

       <div>
        <ProductCard  />
       </div>
    </div>
  );
};

export default HomeAppliance;