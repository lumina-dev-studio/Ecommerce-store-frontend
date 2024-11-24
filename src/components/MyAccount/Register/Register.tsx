"use client"
import LoginAndRegisterForm from "@/SharedComponent/LoginAndRegisterForm/LoginAndRegisterForm";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <>
    <LoginAndRegisterForm 
    register={register} 
    handleSubmit={handleSubmit} 
    onSubmit={onSubmit} 
    errors={errors}
    condition='Register'
    />
    </>
  );
};

export default Register;
