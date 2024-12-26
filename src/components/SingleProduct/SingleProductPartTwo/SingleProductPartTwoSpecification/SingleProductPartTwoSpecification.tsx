const SingleProductPartTwoSpecification = ({data}:any) => {
  return (
    <div className="mt-10 p-4 bg-white rounded-lg h-[500px]">
      {/* Specification Heading */}
      <h2 className="text-[25px] font-bold mb-4">Specification</h2>

      {/* Overview Section */}
      <div className="mb-6">
        <h3 className="text-gray-900 text-md font-bold mb-2 flex items-center">
          <span className="mr-2">ℹ️</span> Overview
        </h3>
        <div className="text-md">
          <p className="flex justify-between py-1">
            <span className="text-gray-500">Brand</span>
            <span>Asus</span>
          </p>
          <p className="flex justify-between border-b pt-1 pb-5">
            <span className="text-gray-500">Motherboard</span>
            <span>ATX, Mini-ITX</span>
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-6">
        <h3 className="text-gray-900  font-bold mb-2 flex items-center">
          <span className="mr-2">🗒️</span> Features
        </h3>
        <div className="text-md">
          <p className="flex justify-between border-b pt-1 pb-5">
            <span className="text-gray-500">Features</span>
            <span>6GB Memory</span>
          </p>
        </div>
      </div>

      {/* General Section */}
      <div>
        <h3 className="text-blue-600 text-sm font-bold mb-2 flex items-center">
          <span className="mr-2">📏</span> General
        </h3>
        <div className="text-md space-y-1">
          <p className="flex justify-between py-1">
            <span className="text-gray-500">Color</span>
            <span>Black</span>
          </p>
          <p className="flex justify-between py-1">
            <span className="text-gray-500">Dimensions</span>
            <span>304.2 x 203 x 13.9 mm</span>
          </p>
          <p className="flex justify-between  py-1">
            <span className="text-gray-500">Material</span>
            <span>Metal</span>
          </p>
          <p className="flex justify-between  py-1">
            <span className="text-gray-500">Manufacturer Guarantee</span>
            <span>36 months</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPartTwoSpecification;