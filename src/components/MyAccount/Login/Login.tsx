"use client"
import { useLoginMutation } from "@/Redux/api/Auth/authApi";
import LoginAndRegisterForm from "@/SharedComponent/LoginAndRegisterForm/LoginAndRegisterForm";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {

  email: string;
  password: string;
};

const login = () => {
  const [loginMutation] = useLoginMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async(e: FormData) => {
    console.log("Form Data Submitted:", e);

    
    try {
      const data = await loginMutation({ email:e?.email, password:e?.password }).unwrap();

     
      if (data && data.success === true) {
        toast.success(data?.message);

  
        router.push("/");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }

  };

  return (
    <>
    <LoginAndRegisterForm 
    register={register} 
    handleSubmit={handleSubmit} 
    onSubmit={onSubmit} 
    errors={errors}
    condition='Login'
    />
    </>
  );
};

export default login;
