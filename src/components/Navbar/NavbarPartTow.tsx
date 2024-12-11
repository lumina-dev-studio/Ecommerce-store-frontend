import {LiaUser} from "react-icons/lia";
import {IoShuffle} from "react-icons/io5";
import {IoIosHeartEmpty} from "react-icons/io";
import {PiShoppingCartSimpleLight} from "react-icons/pi";

import {RiMenuFill} from "react-icons/ri";
import {RiArrowDropDownLine} from "react-icons/ri";
import {useAppDispatch} from "@/Redux/hooks";

import {setRightSidebarIsopen} from "@/Redux/api/RightSideBar/RightSideBarSlice";
import Link from "next/link";
import Container from "@/SharedComponent/Container/Container";

const NavbarPartTow = () => {
    const dispatch = useAppDispatch()
    return (
        <div className=" bg-blue-500/15 h-[77px]">
            <Container>
                <div className="mx-auto flex   justify-between ">
                    <div className=" flex  items-center xl:gap-1 3xl:gap-3">
                        <div className=" flex items-center mt-2 ">
                            <div className="  rounded-full bg-white flex gap-2 p-1  items-center cursor-pointer">
                                <div className=" w-[40px] h-[40px] rounded-full flex justify-center p-2 bg-blue-500">
                                    <RiMenuFill className=" text-white text-[25px] "/>
                                </div>
                                <p className=" font-[500] pe-2 text-[15px] mt-0.5  ">All Categories</p>
                            </div>
                        </div>
                        <div
                            className=" mt-3  hover:bg-blue-500/30 cursor-pointer  hover:text-blue-700 rounded-full px-2 py-2">
                            <p className=" font-[500] pe-2 text-[15px]  ">Promotions</p>
                        </div>
                        <div
                            className=" mt-3  hover:bg-blue-500/30 cursor-pointer  hover:text-blue-700 rounded-full px-2 py-2">
                            <p className=" font-[500] pe-2 text-[15px]  ">
                                Stores</p>
                        </div>
                        <div
                            className=" mt-3  hover:bg-blue-500/30  cursor-pointer hover:text-blue-700 rounded-full px-2 py-2">
                            <p className=" font-[500] pe-2 text-[15px]  ">Our Contacts</p>
                        </div>
                        <div
                            className=" mt-3  hover:bg-blue-500/30  cursor-pointer hover:text-blue-700 rounded-full px-2 py-2">
                            <p className=" font-[500] pe-2 text-[15px]  ">Delivery & Return</p>
                        </div>
                        <div
                            className=" mt-3  hover:bg-blue-500/30 cursor-pointer  hover:text-blue-700 rounded-full px-2 py-2">
                            <p className=" font-[500] pe-2 text-[15px]  ">
                                Outlet</p>
                        </div>
                    </div>
                    <div className=" flex  items-center gap-3 ">
                        <div
                            className=" mt-3  hover:bg-blue-500/30 hover:text-blue-700 rounded-full px-2 py-2 flex items-center cursor-pointer">
                            <p className=" font-[500] text-[15px]  ">USD</p> <RiArrowDropDownLine
                            className=" text-gray-400"/>
                        </div>

                        <div className=" flex items-center pt-3 cursor-pointer">
                            <div className="  rounded-full flex gap-2 p-1  items-center ">
                                <Link href='/account/login'
                                      className=" w-[40px] h-[40px] rounded-full flex justify-center items-center  bg-white">
                                    <LiaUser className="  text-[25px] "/>
                                </Link>
                            </div>
                        </div>
                        <div className=" flex items-center pt-4 relative p-1 cursor-pointer">
                            <div className="  rounded-full flex gap-2 p-1  items-center ">
                                <div className=" w-[40px] h-[40px] rounded-full flex justify-center p-2 bg-white">
                                    <IoShuffle className="  text-[25px] "/>
                                </div>
                                <div
                                    className="w-[20px] h-[20px] rounded-full bg-gray-50 shadow-2xl flex justify-center items-center absolute  right-0 top-4 border border-gray-100">
                                    <p className=" text-blue-500 text-[12px]">0</p>
                                </div>
                            </div>
                        </div>

                        <div className=" flex items-center pt-4 relative p-1 cursor-pointer">
                            <div className="  rounded-full flex gap-2 p-1  items-center ">
                                <div className=" w-[40px] h-[40px] rounded-full flex justify-center p-2 bg-white">
                                    <IoIosHeartEmpty className="  text-[25px] "/>
                                </div>
                                <div
                                    className="w-[20px] h-[20px] rounded-full bg-gray-50 shadow-2xl flex justify-center items-center absolute  right-0 top-4 border border-gray-100">
                                    <p className=" text-blue-500 text-[12px]">0</p>
                                </div>
                            </div>
                        </div>

                        <div onClick={() => dispatch(setRightSidebarIsopen(true))}
                             className=" flex gap-1 items-center cursor-pointer">
                            <div className=" flex items-center pt-4 relative p-1">
                                <div className="  rounded-full flex gap-2 p-1  items-center ">
                                    <div
                                        className=" w-[40px] h-[40px] rounded-full flex justify-center p-2 bg-blue-500">
                                        <PiShoppingCartSimpleLight className=" text-white  text-[25px] "/>
                                    </div>
                                    <div
                                        className="w-[20px] h-[20px] rounded-full bg-gray-50 shadow-2xl flex justify-center items-center absolute  right-0 top-4 border border-gray-100">
                                        <p className=" text-blue-500 text-[12px]">0</p>
                                    </div>
                                </div>
                            </div>
                            <p className=" font-[500] text-[15px] mt-3  ">$0.00</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavbarPartTow;