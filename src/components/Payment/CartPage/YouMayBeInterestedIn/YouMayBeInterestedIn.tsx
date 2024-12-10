import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";
import YouMayBeInterestedInPartOne from "./YouMayBeInterestedInPartOne/YouMayBeInterestedInPartOne";
import YouMayBeInterestedInPartTow from "./YouMayBeInterestedInPartTow/YouMayBeInterestedInPartTow";

const YouMayBeInterestedIn = () => {
  return (
    <div>
        <SectionTitle title="You May Be Interested In…" condition={false} />
         <div className="xl:grid grid-cols-12 gap-5 mb-10">
         <div className="col-span-12 md:col-span-8">
      <YouMayBeInterestedInPartOne/>
      </div>
      <div className="col-span-12 md:col-span-4">
      <YouMayBeInterestedInPartTow/>
      </div>
      </div>
    </div>
  );
};

export default YouMayBeInterestedIn;