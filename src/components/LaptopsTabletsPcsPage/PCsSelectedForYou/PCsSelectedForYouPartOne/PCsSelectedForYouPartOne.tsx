import { CiStar } from "react-icons/ci";

const PCsSelectedForYouPartOne = () => {

    const data=[1,2,3]
  return (
    <div>
          {data?.map((item:any, index:any) => (
          <div key={index} className="m-2 bg-white rounded-xl flex ps-2 pe-5 py-1   items-center">
            <div>
              <img
                src="/bannar/headPhone.png"
                className="w-[100px] h-[100px] object-contain transform transition-transform duration-500 hover:scale-110"
                alt="Headphone"
              />
            </div>

            <div className="space-y-1.5">
              <h3>iPad Mini</h3>
              <div className="flex">
                <CiStar className="text-[17px]" />
                <CiStar className="text-[17px]" />
                <CiStar className="text-[17px]" />
                <CiStar className="text-[17px]" />
                <CiStar className="text-[17px]" />
              </div>
              <p className="text-blue-500 text-[14px] font-[600]">$600.00</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PCsSelectedForYouPartOne;