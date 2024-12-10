import Link from "next/link";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import React Icons

const LoginAndRegisterForm = ({ register, handleSubmit, onSubmit, errors,condition }: any) => {
  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center my-20 bg-gray-100">
      <div className="md:flex gap-5 lg:w-3/4 overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-[22px] font-bold mb-4 uppercase">{condition==='Register'?"Register":"Login" }</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username Field */}
           {condition==="Register"&& <div>
              <label htmlFor="username" className="block font-medium mb-1">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                {...register("username", { required: "Username is required" })}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block font-medium mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", { required: "Password is required" })}
                  className="w-full border border-gray-300 rounded px-3 py-2 pr-10" // Extra padding for icon
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
             {condition==='Register'?"Register":"login"}  
            </button>
          </form>
       {condition ==="Login"&&   <div className=" flex justify-between mt-5">
            <div className=" flex items-center gap-2">
              <input type="checkbox" />
              <p className=" text-[14px] ">Remember me</p>
            </div>

            <div>
              <Link className=" text-blue-500" href="#">Lost your password?</Link>
            </div>

          </div>}
        </div>

        {/* Divider */}
        <div>
          <hr className="w-[1px] bg-gray-300 h-[400px] hidden md:block" />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-gray-100 p-8 text-center">
          <h2 className="text-[22px] font-bold mb-4 uppercase">{condition==='Register'?"Register":"Login" }</h2>
          <p className="text-center text-gray-500 mb-4">
            Registering for this site allows you to access your order status and
            history. Just fill in the fields below, and we'll get a new account
            set up for you in no time. We will only ask you for information
            necessary to make the purchase process faster and easier.
          </p>
       {condition==='Register'&&  <Link href='/myAccount/login' className="bg-blue-100 text-blue-600 px-4 py-2 rounded">
            Login
          </Link>} 


         {condition==='Login'&&     <Link href='/myAccount/register' className="bg-blue-100 text-blue-600 px-4 py-2 rounded">
          register
          </Link>}

         
        </div>

    
      </div>
    </div>
  );
};

export default LoginAndRegisterForm;
