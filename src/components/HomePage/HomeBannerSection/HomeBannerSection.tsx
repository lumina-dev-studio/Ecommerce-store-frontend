import HomeBannerSectionSlider from "./HomeBannerSectionSlider/HomeBannerSectionSlider";
import HomeSectionPartTow from "./HomeSectionPartTow/HomeSectionPartTow";

const HomeBannerSection = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5  mt-20 md:mt-20 xl:mt-5  mb-20">

        <section className=" w-full">
        <HomeBannerSectionSlider/>
        </section>
        <section>
        <HomeSectionPartTow/>
        </section>
      
    </div>
  );
};

export default HomeBannerSection;