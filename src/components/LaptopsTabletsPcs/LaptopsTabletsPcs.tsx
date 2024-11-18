import Container from "@/SharedComponent/Container/Container";
import LaptopsTabletsPcsBannerSection from "./LaptopsTabletsPcsBannerSection/LaptopsTabletsPcsBannerSection";
import LaptopsTabletsAndPCs from "./LaptopsTabletsAndPCs/LaptopsTabletsAndPCs";
import PCsSelectedForYou from "../PCsSelectedForYou/PCsSelectedForYou";

const LaptopsTabletsPcs = () => {
  return (
    <Container>
      <LaptopsTabletsPcsBannerSection/>
      <LaptopsTabletsAndPCs/>
      <PCsSelectedForYou/>
    </Container>
  );
};

export default LaptopsTabletsPcs;