import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";
import ShoppingEventPartTow from "../ShoppingEvent/ShoppingEventPartTow";

const RecentlyViewed = () => {
    const data = [1, 2,]; // Example data
  return (
    <div  className="  md:mt-0 xl:mt-10">
      <SectionTitle title="Recently Viewed" condition={false} />
      <ShoppingEventPartTow data={data}/>
    </div>
  );
};

export default RecentlyViewed;