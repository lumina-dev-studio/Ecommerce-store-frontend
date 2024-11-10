import Container from "@/SharedComponent/Container/Container";
import HomeBannerSection from "./HomeBannerSection/HomeBannerSection";
import PopularCategories from "./PopularCategories/PopularCategories";

const HomePage = () => {
  return (
    <Container>
     <HomeBannerSection/>
     <PopularCategories/>
    </Container>
  );
};

export default HomePage;