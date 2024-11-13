import MicrosoftAccessoriesPartOne from "./MicrosoftAccessoriesPartOne";
import MicrosoftAccessoriesPartTow from "./MicrosoftAccessoriesPartTow";


const MicrosoftAccessories = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-4">
      <section className="col-span-9">
        <MicrosoftAccessoriesPartOne />
      </section>

      <section className="lg:col-span-3 hidden lg:block ">
        <MicrosoftAccessoriesPartTow />
      </section>
    </div>
  );
};

export default MicrosoftAccessories;
