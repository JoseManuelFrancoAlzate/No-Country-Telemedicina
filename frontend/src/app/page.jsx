"use client";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Detail from "@/components/Detail/Detail";
import Testimonials from "@/components/Testimonials/Testimonials";
import Questions from "@/components/Questions/Questions";
import About from "@/components/About/About";
import DoctorFilters from "@/components/DoctorFilters/DoctorFilters";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Detail />
      <Testimonials/>
      <Questions/>
      <About/>
    </>
  );
}
