const HomeSectionPartTow = () => {
    return (
      <div className="h-[450px] space-y-5">

<section className=" bg-pink-300 md:h-[250px] h-[300px]  rounded-lg group ">

               <div className="py-5 px-8  relative">
              <section className=" mt-5 absolute z-10">
               <div className=" ">
               <h1 className="text-white font-semibold text-[25px]">Aurora Headset</h1>
                
                <div className=" my-4 grid md:grid-cols-4 grid-cols-3 gap-2">
                    <div className="  rounded-xl py-1.5 px-1 bg-gray-100 text-center w-[60px]">
                          <h1 className=" text-[18px] font-bold">51</h1>
                          <p className=" text-[13px]  text-gray-500">Days</p>
                    </div>
                    <div className="  rounded-xl py-1.5 px-1 bg-gray-100 text-center w-[60px]">
                          <h1 className=" text-[18px] font-bold">15</h1>
                          <p className=" text-[13px]  text-gray-500">Hr</p>
                    </div>
                    <div className="  rounded-xl py-1.5 px-1 bg-gray-100 text-center w-[60px]">
                          <h1 className=" text-[18px] font-bold">33</h1>
                          <p className=" text-[13px]  text-gray-500">min</p>
                    </div>
                    <div className="  rounded-xl py-1.5 px-1 bg-gray-100 text-center w-[60px]">
                          <h1 className=" text-[18px] font-bold">10</h1>
                          <p className=" text-[13px]  text-gray-500">Sc</p>
                    </div>
                </div>
               </div>

                <div className="mt-2">
            <button className="py-2.5 px-6 text-[15px] text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
              Buy Now
            </button>
          </div>
              </section>
  
              {/* Image that scales on hover */}
              <section className="absolute top-[8%] right-[2%] ">
                <img
                  src="/bannar/headPhone.png"
                  className="w-[350px] h-[250px] transform transition-transform duration-500 group-hover:scale-110"
                  alt="Joypad"
                />
              </section>
            </div>

             </section>
        
        <section className="grid md:grid-cols-2 gap-5">
          <div className="bg-blue-500 w-full p-5 rounded-lg relative h-[180px] group">
            {/* Content */}
            <div>
              <section className="mt-5 absolute z-10">
                <h1 className="text-white font-semibold text-[18px]">New Dual Sense</h1>
                <p className="mt-3 text-gray-100">For PlayStation 5</p>
                <div className="mt-3">
                  <button className="px-3 py-2 text-[13px] text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-300 transition duration-300">
                    View Details
                  </button>
                </div>
              </section>
  
              {/* Image that scales on hover */}
              <section className="absolute top-[12%] right-[2%]">
                <img
                  src="/bannar/joypad.png"
                  className="w-[180px] h-[150px] transform transition-transform duration-500 group-hover:scale-110"
                  alt="Joypad"
                />
              </section>
            </div>
          </div>
  
          <div className="bg-yellow-500 w-full p-5 rounded-lg relative h-[180px] group">
            {/* Content */}
            <div>
              <section className="mt-5 absolute z-10">
                <h1 className="text-white font-semibold text-[18px]">
                Instant Cameras</h1>
                <p className="mt-3 text-gray-100">Get photo paper as a gift</p>
                <div className="mt-3">
                  <button className="px-3 py-2 text-[13px] text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-300 transition duration-300">
                    View Details
                  </button>
                </div>
              </section>
  
              {/* Image that scales on hover */}
              <section className="absolute top-[12%] right-[0%]">
                <img
                  src="/bannar/camera.png"
                  className="w-[200px] h-[150px] transform transition-transform duration-500 group-hover:scale-110"
                  alt="Joypad"
                />
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default HomeSectionPartTow;
  