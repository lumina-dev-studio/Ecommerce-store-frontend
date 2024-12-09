const PCsSelectedForYouPartTow = () => {
  return (
    <div>
       <section className=" w-[300px] rounded-xl bg-[#544499] h-[575px]  relative ">

    
<div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0 rounded-xl"></div>

<div className=" absolute md:top-[10%] md:left-[27%] left-[7%] top-[30%]  z-10 text-center text-white">
<p className="mt-3 text-[15px] font-bold text-gray-200">
       ON SALE
       </p>
       <h1 className="text-2xl sm:text-2xl font-bold">HP Envy 34</h1>
      

       <div className="mt-2">
         <button className="py-2.5 px-6 text-[15px] text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
          To Shop 
         </button>
       </div>
     </div>


     
     <section className=" absolute top-[30%] right-[2%] ">
             <img
               src="/bannar/headPhone.png"
               className="w-[350px] h-[350px] object-contain transform transition-transform z-10 duration-500 hover:scale-110"
               alt="phone"
             />
           </section>



 
 </section>
    </div>
  );
};

export default PCsSelectedForYouPartTow;