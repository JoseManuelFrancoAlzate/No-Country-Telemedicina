import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  // bg-[url(/assets/hero-background.png)]
  return (
    <section className="  bg-gradient-to-r from-white from-50% via-[#F6F6F6] via-30% to-white flex items-center bg-cover bg-center h-[500px] ">
      <div className="container bg-transparent grid grid-cols-2  h-full">
        <div className="flex flex-col px-20 justify-center gap-y-16  ">
          <h1 className="text-primary text-6xl  font-bold">
            Do you need to see a doctor ?
          </h1>
          <Link
            href="/login"
            className="bg-gradient-to-r flex items-center w-40 from-[#0049F9] from-70% to-[#32C0D6] px-5 py-2  hover:opacity-65  transition-all duration-300  rounded-md  font-semibold text-lg  text-white"
          >
            Contact Now
          </Link>
        </div>
        <div className="flex justify-center">
          <Image src="/doctora1.png" width={779} height={300} className="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
