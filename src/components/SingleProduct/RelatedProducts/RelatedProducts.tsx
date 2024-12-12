
import Container from "@/SharedComponent/Container/Container";
import ProductCard from "@/SharedComponent/ProductCard/ProductCard";
import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

const RelatedProducts = () => {
    const productdData = [
        {
          id:1,
          images : [
            "/bannar/camera.png", 
            "/bannar/headPhone.png", 
            "/bannar/joypad.png", 
            "/bannar/camera.png", 
            "/bannar/headPhone.png"
        ],
        price:3000 },
        {
          id:2,
          images : [
            "/bannar/camera.png", 
            "/bannar/headPhone.png", 
            "/bannar/joypad.png", 
            "/bannar/camera.png", 
            "/bannar/headPhone.png"
        ],
        price:3000 },
        {
          id:3,
          images : [
            "/bannar/camera.png", 
            "/bannar/headPhone.png", 
            "/bannar/joypad.png", 
            "/bannar/camera.png", 
            "/bannar/headPhone.png"
        ],
        price:3000 },
        {
          id:4,
          images : [
            "/bannar/camera.png", 
            "/bannar/headPhone.png", 
            "/bannar/joypad.png", 
            "/bannar/camera.png", 
            "/bannar/headPhone.png"
        ],
        price:3000 },
        {
          id:5,
          images : [
            "/bannar/camera.png", 
            "/bannar/headPhone.png", 
            "/bannar/joypad.png", 
            "/bannar/camera.png", 
            "/bannar/headPhone.png"
        ],
        price:3000 },
    
    
      ]
          
  return (
    <Container>
     <div className=" my-20">
       <SectionTitle title="Related Products" condition={true} />

      
       <div className=" w-full grid xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 md:justify-center gap-5 ">
        {productdData?.map(data=> <ProductCard data={data} />)}
        
       </div>
    </div>
  </Container>
  );
};

export default RelatedProducts;