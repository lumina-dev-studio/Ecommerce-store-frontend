import Container from "@/SharedComponent/Container/Container";
import HomeBannerSection from "./HomeBannerSection/HomeBannerSection";
import PopularCategories from "./PopularCategories/PopularCategories";
import BestOffers from "./BestOffers/BestOffers";
import NewGoods from "./NewGoods/NewGoods";

const HomePage = () => {
  return (
    <Container>
     <HomeBannerSection/>
     <PopularCategories/>
     <BestOffers/>
     <NewGoods/>
    </Container>
  );
};

export default HomePage;