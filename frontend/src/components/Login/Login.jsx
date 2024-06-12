"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/validations/validations";
import { useState } from "react";
import {
  useRegister,
  useLogin,
} from "@/libs/react-query/query-mutation/AuthMutation";

const Login = () => {
  const [loginPage, setLoginPage] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const { mutateAsync: registerUser } = useRegister();
  const { mutateAsync: loginUser } = useLogin();

  const onSubmit = (data) => {
    if (loginPage) {
      loginUser(data);
    } else {
      registerUser(data);
    }
  };


  return (
    <div>
      <div className="grid  bg-gray-300 grid-cols-1 md:grid-cols-2 min-h-screen bg-hero ">
        <div className="hidden md:flex  justify-center items-center container">
          <div className="">
            <center className="">
              <Image src="/frame.svg" width={235} height={150} alt="frame" />
              <Image
                src="/medicam.svg"
                width={350}
                height={250}
                alt="medicam"
                className="mt-14"
              />
              <p className=" mt-12 text-2xl w-80 font-serif text-[#081529]">
                An Inclusive pharmaceutical marketplace
              </p>
            </center>
          </div>
        </div>
        <div className="bg-white px-10 sm:px-20 relative shadow-2x1 rounded-l-3xl text-center text-black">
          <select className=" absolute top-5 right-5 focus:outline-none">
            <option disabled="disabled">Lenguage</option>
            <option value="English">English (US)</option>
            <option value="Español">Español</option>
          </select>

          <div className="mt-16 ">
            <p className=" text-3xl font-black text-blue-500">
              {loginPage ? "Login To Your Account" : "Create Acount"}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 ">
              <button className="flex gap-2  items-center px-3 py-1 border border-gray-300 rounded-xl focus:outline-none shadow-sm ">
                <Image src="/googleLogo.svg" width={30} height={50} />
                <p className="text-xs sm:text-sm tex-primary">
                  Signin with google
                </p>
              </button>
              <button className="flex gap-2  items-center px-3 py-1 border border-gray-300 rounded-xl focus:outline-none shadow-sm ">
                <Image src="/facebookLogo.svg" width={35} height={50} />
                <p className="text-xs sm:text-sm tex-primary">
                  Signin with google
                </p>
              </button>
            </div>

            <p className="text-xl mt-7 ">-OR-</p>

            <form onSubmit={handleSubmit(onSubmit)} className="py-4">
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className=" py-2  text-gray-600 placeholder:text-gray-600  mt-5 rounded-lg focus:outline-none w-full "
                />
                <div
                  className={`w-full h-0.5 transition-colors duracition-400 ${
                    errors.email?.message ? "bg-red-600" : "bg-gray-100"
                  }`}
                />

                {errors.email?.message && (
                  <p className="text-left text-red-600 text-sm mt-1">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  className=" py-2  text-gray-600 placeholder:text-gray-600 mt-5 rounded-lg focus:outline-none w-full "
                />
                <div
                  className={`w-full h-0.5 transition-colors duracition-400 ${
                    errors.password?.message ? "bg-red-600" : "bg-gray-100"
                  }`}
                />

                {errors.password?.message && (
                  <p className="text-left text-red-600 text-sm mt-1.5">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <p className="text-left mt-8">
                {loginPage ? "Not Account?" : "Do you already have an account?"}
                <button
                  onClick={() => setLoginPage(!loginPage)}
                  type="button"
                  className="text-blue-600 ml-2"
                >
                  {loginPage ? "Register" : "Login"}
                </button>
              </p>
              <button className=" bg-blue-600 mt-10 transition-colorss duration-3400over:bg-blue-700 text-white p-3  rounded-lg focus:outline-none  w-10/12 ">
                <p className="font-bold"> {loginPage ? "LOGIN" : "REGISTER"}</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
