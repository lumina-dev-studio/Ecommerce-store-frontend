const MicrosoftAccessoriesPartOneCard = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 mt-5">
          <div className="bg-gradient-to-r from-blue-500 to-purple-300 w-full p-5 rounded-lg relative h-[180px] group">
            {/* Content */}
            <div>
              <div className="mt-5 absolute z-10">
                <h1 className="text-white font-semibold text-[18px]">Xiaomi MI 11</h1>
                <p className="mt-3 text-gray-100">Discount up to 30%</p>
                <div className="mt-3">
                  <button className="px-3 py-2 text-[13px] text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-300 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
  
              {/* Image that scales on hover */}
              <div className="absolute top-[12%] right-[2%]">
                <img
                  src="/bannar/joypad.png"
                  className="w-[180px] h-[150px] object-contain transform transition-transform duration-500 group-hover:scale-110"
                  alt="Joypad"
                />
              </div>
            </div>
          </div>
  
          <div className="bg-gradient-to-r from-[#FA435F] to-[#FF6740] w-full p-5 rounded-lg relative h-[180px] group">
            {/* Content */}
            <div>
              <div className="mt-5 absolute z-10">
                <h1 className="text-white font-semibold text-[18px]">
                HP Laser Jet</h1>
                <p className="mt-3 text-gray-100">Personal printer</p>
                <div className="mt-3">
                  <button className="px-3 py-2 text-[13px] text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-300 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
  
              {/* Image that scales on hover */}
              <div className="absolute top-[12%] right-[0%]">
                <img
                  src="/bannar/camera.png"
                  className="w-[200px] h-[150px] object-contain transform transition-transform duration-500 group-hover:scale-110"
                  alt="Joypad"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FA1941] to-[#E90216]  w-full p-5 rounded-lg relative h-[180px] group">
            {/* Content */}
            <div>
              <div className="mt-5 absolute z-10">
                <h1 className="text-white font-semibold text-[18px]">
                White Joy Cons</h1>
                <p className="mt-3 text-gray-100">Long-awaited novelty</p>
                <div className="mt-3">
                  <button className="px-3 py-2 text-[13px] text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-300 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
  
              {/* Image that scales on hover */}
              <div className="absolute top-[12%] right-[0%]">
                <img
                  src="/bannar/camera.png"
                  className="w-[200px] h-[150px] object-contain transform transition-transform duration-500 group-hover:scale-110"
                  alt="Joypad"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MicrosoftAccessoriesPartOneCard;