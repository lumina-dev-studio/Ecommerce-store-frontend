import { setRightSidebarIsopen } from "@/Redux/api/RightSideBar/RightSideBarSlice";
import { useAppDispatch } from "@/Redux/hooks";
import Link from "next/link";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaUser } from "react-icons/lia";
import { MdCancel } from "react-icons/md";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RiMenuFill } from "react-icons/ri";

const BottomNavigation = ({setSmallDeviceSidebarCondition,smallDeviceSidebarCondition}:any) => {
  const dispatch = useAppDispatch();
  return (
    <div className="fixed bottom-0 lg:hidden left-0 z-50 w-full h-18 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {/* Menu Button */}
        <button onClick={()=>setSmallDeviceSidebarCondition(!smallDeviceSidebarCondition)} type="button" className="inline-flex flex-col items-center justify-center py-3 px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
       {smallDeviceSidebarCondition? <MdCancel className="text-red-500 text-[25px]"  />:<RiMenuFill className="text-gray-500 text-[25px]" />}   
         
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
          {smallDeviceSidebarCondition?"Cancel":"Menu"}  
          </span>
        </button>

        {/* Wishlist Button */}
        <button type="button" className="inline-flex flex-col items-center justify-center py-3 px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <div className="relative">
            <IoIosHeartEmpty className="text-gray-500 text-[25px]" />
            <div className="w-[20px] h-[20px] rounded-full bg-blue-500 flex justify-center items-center absolute -top-2 -right-2 border border-gray-100">
              <p className="text-gray-100 text-[12px]">0</p>
            </div>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Wishlist
          </span>
        </button>

        {/* Cart Button */}
        <button 
             onClick={() => dispatch(setRightSidebarIsopen(true))}
        type="button" className="inline-flex flex-col items-center justify-center py-3 px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <div className="relative">
            <PiShoppingCartSimpleLight className=" text-[30px]  rounded-full p-1" />
            <div className="w-[20px] h-[20px] rounded-full bg-blue-500 flex justify-center items-center absolute -top-2 -right-2 border border-gray-100">
              <p className="text-gray-100 text-[12px]">0</p>
            </div>
          </div>
         
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Cart
          </span>
        </button>

        {/* My Account Button */}
        <button type="button" className="inline-flex flex-col items-center justify-center py-3 px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <Link href='/account/login' className="relative">
            <LiaUser className="text-gray-500 text-[25px]" />
          </Link>
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            My Account
          </span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
