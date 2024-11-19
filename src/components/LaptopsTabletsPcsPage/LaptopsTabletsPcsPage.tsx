import Container from "@/SharedComponent/Container/Container";
import LaptopsTabletsPcsBannerSection from "./LaptopsTabletsPcsBannerSection/LaptopsTabletsPcsBannerSection";
import LaptopsTabletsAndPCs from "./LaptopsTabletsAndPCs/LaptopsTabletsAndPCs";
import PCsSelectedForYou from "./PCsSelectedForYou/PCsSelectedForYou";
import LaptopsTabletsPcsAdvertisement from "./LaptopsTabletsPcsAdvertisement/LaptopsTabletsPcsAdvertisement";
import Laptops from "./Laptops/Laptops";
import Tablets from "./Tablets/Tablets";

const LaptopsTabletsPcs = () => {
  return (
    <Container>
      <LaptopsTabletsPcsBannerSection/>
      <LaptopsTabletsAndPCs/>
      <PCsSelectedForYou/>
      <Laptops/>
      <LaptopsTabletsPcsAdvertisement/>
      <Tablets/>
    </Container>
  );
};

export default LaptopsTabletsPcs;