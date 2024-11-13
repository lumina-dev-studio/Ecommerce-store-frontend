import Container from "@/SharedComponent/Container/Container";
import HomeBannerSection from "./HomeBannerSection/HomeBannerSection";
import PopularCategories from "./PopularCategories/PopularCategories";
import BestOffers from "./BestOffers/BestOffers";
import NewGoods from "./NewGoods/NewGoods";
import ShoppingEvent from "./ShoppingEvent/ShoppingEvent";
import HomeAppliance from "./HomeAppliance/HomeAppliance";
import MicrosoftAccessories from "./MicrosoftAccessories/MicrosoftAccessories";
import RecentlyViewed from "./RecentlyViewed/RecentlyViewed";
import OurArticles from "./OurArticles/OurArticles";
import Description from "@/SharedComponent/Description/Description";

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
      <MicrosoftAccessories/>
      <RecentlyViewed/>
      <OurArticles/>
      <Description/>
     </Container>
    
    </div>
   
  );
};

export default HomePage;