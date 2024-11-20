import BrandAdvertisement from "@/SharedComponent/BrandAdvertisement/BrandAdvertisement";



const LaptopsTabletsPcsAdvertisement = () => {

  const data=[
    {img:'/laptopsTabletsPcsAdvertisement/acer.png'},
    {img:'/laptopsTabletsPcsAdvertisement/alogic.png'},
    {img:'/laptopsTabletsPcsAdvertisement/aoc.png'},
    {img:'/laptopsTabletsPcsAdvertisement/apple.png'},
    {img:'/laptopsTabletsPcsAdvertisement/cannon.png'},
    {img:'/laptopsTabletsPcsAdvertisement/sony.png'},

  ]

  return (

    <div>
      <BrandAdvertisement data={data}/>
    </div>
  )
};

export default LaptopsTabletsPcsAdvertisement;