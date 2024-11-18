import { Button } from "@/components/ui/button"; // Example ShadCN button import
import Container from "../Container/Container";
import { FaChevronRight, FaFacebookF, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
        <Container>
      <div className=" mx-auto space-y-8">
        {/* Store Locations */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className=" space-y-2">
            <h3 className="text-md font-semibold flex items-center">Broadway Store 

                <span className="p-1.5 ms-5 rounded-full bg-blue-500  block">
                    <FaChevronRight className="  text-white text-[13px] " />
                    </span>
            </h3>
            <p className=" text-gray-500 text-[15px]">1260 Broadway, San Francisco, CA 94109</p>
          </div>
          <div className=" space-y-2">
          <h3 className="text-md font-semibold flex items-center">Valencia Store
                
                <span className="p-1.5 ms-5 rounded-full bg-blue-500  block">
                    <FaChevronRight className="  text-white text-[13px] " />
                    </span>
                </h3>
                            
            <p className=" text-gray-500 text-[15px]">1501 Valencia St, San Francisco, CA 94110</p>
          </div>
          <div className=" space-y-2">
          <h3 className="text-md font-semibold flex items-center">Emeryville Store
                
                <span className="p-1.5 ms-5 rounded-full bg-blue-500  block">
                    <FaChevronRight className="  text-white text-[13px] " />
                    </span>
                </h3>
           
            <p className=" text-gray-500 text-[15px]">1034 36th St, Emeryville, CA 94608</p>
          </div>

          <div className=" space-y-2">
          <h3 className="text-md font-semibold flex items-center">Alameda Store
                
                <span className="p-1.5 ms-5 rounded-full bg-blue-500  block">
                    <FaChevronRight className="  text-white text-[13px] " />
                    </span>
                </h3>
           
            <p className=" text-gray-500 text-[15px]">1433 High St, Alameda, CA 94501</p>
          </div>
        </div>
        <hr className=" w-full" />

        {/* Footer Links */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
          {/* Logo and Description */}
          <div className=" space-y-3">
            <h2 className="text-2xl font-bold text-blue-600">WoodMart</h2>
            <p className="text-sm text-gray-500">
              Condimentum adipiscing vel neque dis nam parturient orci at scelerisque.
            </p>

            <div>
             <h3 className="text-md font-semibold">Subscribe us</h3>
             <div className=" flex gap-2  mt-4">
              <a href="#" className="text-white w-[35px] h-[35px] p-1 flex justify-center items-center rounded-full bg-[#2F487F]">
                <FaFacebookF className="" />
              </a>
              <a href="#" className="text-white w-[35px] h-[35px] p-1 flex justify-center items-center rounded-full bg-[#000000]">
                <FaXTwitter  className="" />
              </a>
              <a href="#" className="text-white w-[35px] h-[35px] p-1 flex justify-center items-center rounded-full bg-[#AF1C22]">
                <FaPinterestP className="" />
              </a>
              <a href="#" className="text-white w-[35px] h-[35px] p-1 flex justify-center items-center rounded-full bg-[#02649A]">
                <TiSocialLinkedin className=" text-[25px]" />
              </a>
              <a href="#" className="text-white w-[35px] h-[35px] p-1 flex justify-center items-center rounded-full bg-[#2F96C3]">
                <FaTelegramPlane className="" />
              </a>
              
            </div>
            
            </div>
            
          </div>
        
          {/* Categories */}
          <div className=" space-y-3 grid xl:justify-center">
            <h3 className="text-md font-semibold">Categories</h3>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><a href="#">Smartphones</a></li>
              <li><a href="#">Laptops</a></li>
              <li><a href="#">Hardware</a></li>
              <li><a href="#">Cameras</a></li>
              <li><a href="#">Headphones</a></li>
              <li><a href="#">Bathroom</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className=" space-y-3  xl:ms-10">
            <h3 className="text-md font-semibold">Useful Links</h3>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><a href="#">Promotions</a></li>
              <li><a href="#">Stores</a></li>
              <li><a href="#">Our Contacts</a></li>
              <li><a href="#">Delivery & Return</a></li>
              <li><a href="#">Outlet</a></li>
            </ul>
          </div>

          <div className=" space-y-3">
            <h3 className="text-md font-semibold">Useful Links</h3>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Our contacts</a></li>
              <li><a href="#">Promotions</a></li>
              <li><a href="#">Stores</a></li>
              <li><a href="#">Delivery & Return</a></li>
            </ul>
          </div>

          {/* App Download */}
          <div className=" space-y-3">
            <h3 className="text-md font-semibold">Download App on Mobile</h3>
            <p className="text-sm text-gray-500">
              15% discount on your first purchase
            </p>
            <div className="flex items-center justify-center gap-3   mt-4">
              <img
                src="/footer/google.png"
                alt="Google Play"
                className="h-[58px] w-full"
              />
              <img
                 src="/footer/app.png"
                alt="App Store"
                className="h-[35px] w-full"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t pt-4 text-center text-sm text-gray-500">
          <p>WOODMART © 2024 CREATED BY XTEMOS STUDIO. PREMIUM E-COMMERCE SOLUTIONS.</p>
        </div>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
