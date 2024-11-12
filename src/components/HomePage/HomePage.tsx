import Container from "@/SharedComponent/Container/Container";
import HomeBannerSection from "./HomeBannerSection/HomeBannerSection";
import PopularCategories from "./PopularCategories/PopularCategories";
import BestOffers from "./BestOffers/BestOffers";
import NewGoods from "./NewGoods/NewGoods";
import ShoppingEvent from "./ShoppingEvent/ShoppingEvent";
import HomeAppliance from "./HomeAppliance/HomeAppliance";

const HomePage = () => {
  return (

    <div>
    <Container>
       <HomeBannerSection/>
       <PopularCategories/>
       <BestOffers/>
       <NewGoods/>
     </Container>
     
     <ShoppingEvent/>

     <Container>
      <HomeAppliance/>
     </Container>
    
    </div>
   
  );
};

export default HomePage;