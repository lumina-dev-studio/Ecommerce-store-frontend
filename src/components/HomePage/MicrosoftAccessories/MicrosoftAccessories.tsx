import MicrosoftAccessoriesPartOne from "./MicrosoftAccessoriesPartOne";
import MicrosoftAccessoriesPartTow from "./MicrosoftAccessoriesPartTow";


const MicrosoftAccessories = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-4">
      <div className="col-span-9">
        <MicrosoftAccessoriesPartOne />
      </div>

      <div className="lg:col-span-3 hidden lg:block ">
        <MicrosoftAccessoriesPartTow />
      </div>
    </div>
  );
};

export default MicrosoftAccessories;
