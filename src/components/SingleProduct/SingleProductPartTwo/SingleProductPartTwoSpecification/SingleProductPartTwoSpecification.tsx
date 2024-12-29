const SingleProductPartTwoSpecification = ({ data }: any) => {

  return (



  
    <div className="mt-10 p-4 bg-white rounded-lg  h-[550px]  overflow-y-auto">
      {/* Specification Heading */}
      <h2 className="text-[25px] font-bold mb-4">Specification</h2>

      {/* Overview Section */}
      <div className="mb-6">
        <h3 className="text-gray-900 text-md font-bold mb-2 flex items-center">
          <span className="mr-2">ℹ️</span> Overview
        </h3>
        <div className="text-md">
          <p className="flex justify-between py-1">
            <span className="text-gray-500">Category</span>
            <span>{data?.category}</span>
          </p>
          <p className="flex justify-between border-b pt-1 pb-5">
            <span className="text-gray-500">Collections</span>
            <span>{data?.collections}</span>
          </p>
        </div>
      </div>

      {/* productVariants Section */}
      <div className="mb-6 border-b">
        <h3 className="text-gray-900 font-bold mb-2 flex items-center">
          <span className="mr-2">🗒️</span> Product Variants
        </h3>
        <div className="space-y-4">
          {data?.productVariants?.map((variant: any, index: number) => (
            <div
              key={index}
              className="p-4   "
            >
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {variant?.productVariantOptionValues?.map(
                  (option: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-2 border rounded-md bg-white flex gap-10 items-center"
                    >
                      {option?.imageUrl && (
                        <img
                          src={option.imageUrl}
                          alt="Variant Image"
                          className="w-16 h-16 object-cover mb-2"
                        />
                      )}
                      <div>
                      <p className="text-gray-600">
                        <span className="text-gray-500">Available:</span>{" "}
                        {option?.available ? "Yes" : "No"}
                      </p>
                      <p className="text-gray-600">
                        <span className="text-gray-500">Price:</span> $
                        {option?.price}
                      </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Section */}
      <div>
        <h3 className="text-blue-600 text-sm font-bold mb-2 flex items-center">
          <span className="mr-2">📏</span> General
        </h3>
        <div className="text-md space-y-1">
          <p className="flex justify-between py-1">
            <span className="text-gray-500">Title</span>
            <span>{data?.title}</span>
          </p>
          <p className="flex justify-between py-1">
            <span className="text-gray-500">Weight</span>
            <span>
              {data?.weight} {data?.weightSize}
            </span>
          </p>
          <p className="flex justify-between py-1">
            <span className="text-gray-500">Price</span>
            <span>${data?.price}</span>
          </p>
        </div>
      </div>
    </div>
   
  );
};

export default SingleProductPartTwoSpecification;
