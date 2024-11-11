import ProductCard from "@/SharedComponent/ProductCard/ProductCard";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const BestOffers = () => {

    const productData = [
        {
          product: {
            name: "Acer ConceptD 7 Ezel Business Laptop",
            status: "In stock",
            price: 3800.00,
            sku: "30890",
          },
          brand: {
            name: "Acer",
            model: "ConceptD",
          },
          design: {
            color: "White",
            dimensions: {
              width: 304.2,
              height: 203,
              depth: 13.9,
            },
            weight: 1.14,
            material: "Metal",
          },
          display: {
            size: 15,
            resolution: "1920x1080",
            type: "IPS",
            surface: "Glossy",
            refresh_rate: 60,
          },
        },
        {
          product: {
            name: "Acer ConceptD 7 Pro",
            status: "In stock",
            price: 4200.00,
            sku: "30900",
          },
          brand: {
            name: "Acer",
            model: "ConceptD",
          },
          design: {
            color: "Black",
            dimensions: {
              width: 300.0,
              height: 200.0,
              depth: 14.0,
            },
            weight: 1.3,
            material: "Metal",
          },
          display: {
            size: 15,
            resolution: "2560x1600",
            type: "IPS",
            surface: "Matte",
            refresh_rate: 120,
          },
        },
        // Add 3 more product objects here
      ];
      
  return (
    <div className=" my-20">
       <SectionTitle title="The Best Offers" condition={true} />

       <div>
        <ProductCard data={productData} />
       </div>
    </div>
  );
};

export default BestOffers;