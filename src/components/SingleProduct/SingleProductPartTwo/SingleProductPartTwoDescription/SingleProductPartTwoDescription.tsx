const SingleProductPartTwoDescription = ({data}:any) => {

  
  return (
    <div className=" bg-white rounded-xl p-5 mt-10">
    <h1 className=" text-[25px] font-[600] my-5">Description </h1>

    <div >
    <img className=" object-contain rounded-xl " src={data?.productMediaImages[1]?.imageUrl}
      alt="" />
    </div>
    
    <p className="text-gray-500 my-10" dangerouslySetInnerHTML={{ __html: data?.description }} ></p>
          

       <div className=" grid md:grid-cols-2 gap-5">
         <div className=" bg-[#F8F8F8] text-center rounded-xl p-5">
            <h2 className=" text-[30px] text-[#76B900] font-semibold ">X2</h2>
            <p className="text-[20px]">Faster</p>
         </div>
         
         <div className=" bg-[#F8F8F8] text-center rounded-xl p-5">
            <h2 className=" text-[30px] text-[#76B900] font-semibold ">4K</h2>
            <p className="text-[20px]">Great performance</p>
         </div>
        
        
        </div>   



       
    <div className="  my-10">
            <img className=" object-contain rounded-xl "  src={data?.productMediaImages[0]?.imageUrl} alt="" />
        </div>

        
    <p className="text-gray-500 my-10" dangerouslySetInnerHTML={{ __html: data?.description }}></p>
      
    </div>
  );
};

export default SingleProductPartTwoDescription;