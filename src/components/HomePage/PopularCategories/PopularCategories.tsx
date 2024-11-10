import SectionTitle from "@/SharedComponent/SectionTitle/SectionTitle";

import PopularCategoriesWithSlider from "./PopularCategoriesWithSlider";

const PopularCategories = () => {
  const data = [
    {
      title: 'Apple iPhone',
      products: 8,
      img: "/bannar/joypad.png"
    },
    {
      title: 'Camera',
      products: 8,
      img: "/bannar/camera.png"
    },
    {
      title: 'Headphone',
      products: 8,
      img: "/bannar/headPhone.png"
    },
    {
      title: 'Apple iPhone',
      products: 8,
      img: "/bannar/joypad.png"
    },
    {
      title: 'Camera',
      products: 8,
      img: "/bannar/camera.png"
    },
    {
      title: 'Headphone',
      products: 8,
      img: "/bannar/headPhone.png"
    },
    {
        title: 'Apple iPhone',
        products: 8,
        img: "/bannar/joypad.png"
      },
  ];

  return (
    <div  className=" mt-[300px] md:mt-0">
      <SectionTitle title="Popular Categories" />
       
     
      
      <div>
        <PopularCategoriesWithSlider data={data}/>
      </div>
    </div>
  );
};

export default PopularCategories;
