"use client";

import { getDoctors, getDoctorId } from "@/api/Doctors";
import { useQuery } from "@tanstack/react-query";

export const getAllDoctors = () => {
  return useQuery({
    queryKey: ["getDoctors"],
    queryFn: () => getDoctors(),
  });
};

export const getDoctorById = (email)=>{
  return useQuery({
    queryKey: ['getDoctorByID'],
    queryFn: () => getDoctorId(email),
  })
}
