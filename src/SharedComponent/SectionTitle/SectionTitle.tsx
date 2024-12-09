import { GoChevronRight } from "react-icons/go";
const SectionTitle = ({title,condition}:any) => {

  
  return (
    <div className=" md:flex justify-between items-center mb-5">
      <h1 className=" text-[25px] font-bold mt-10 ">{title}</h1>

      {condition === true && <p className=" w-[150px] bg-blue-300/30 px-3 py-2 text-[15px] rounded-full text-blue-500 font-[500] mt-7 flex gap-1  items-center justify-center">More Products 
        <GoChevronRight className=" text-[20px]" /></p>}
    </div>
  );
};

export default SectionTitle;