import Container from "@/SharedComponent/Container/Container";
import GamesAndEntertainmentBannerSection from "./GamesAndEntertainmentBannerSection/GamesAndEntertainmentBannerSection";
import GamesAndEntertainment from "./GamesAndEntertainment/GamesAndEntertainment";
import Consoles from "./Consoles/Consoles";
import PCGaming from "./PCGaming/PCGaming";
import Description from "@/SharedComponent/Description/Description";

const GamesAndEntertainmentPage = () => {
  return (
    <Container>
      <GamesAndEntertainmentBannerSection/>
      <GamesAndEntertainment/>
      <Consoles/>
      <PCGaming/>
      <Description/>
    </Container>
  );
};

export default GamesAndEntertainmentPage;