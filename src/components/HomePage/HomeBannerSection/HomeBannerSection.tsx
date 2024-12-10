import HomeBannerSectionSlider from "./HomeBannerSectionSlider/HomeBannerSectionSlider";
import HomeSectionPartTow from "./HomeSectionPartTow/HomeSectionPartTow";

const HomeBannerSection = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5  mt-20 md:mt-20 xl:mt-5  mb-20">

        <div className=" w-full">
        <HomeBannerSectionSlider/>
        </div>
        <div>
        <HomeSectionPartTow/>
        </div>
      
    </div>
  );
};

export default HomeBannerSection;