"use client";

import { getDoctors, getDoctorsEmail } from "@/api/Doctors";
import { useQuery } from "@tanstack/react-query";

export const getAllDoctors = () => {
  return useQuery({
    queryKey: ["getDoctors"],
    
    queryFn: () => getDoctors(),
  });
};

export const getEmailDoctors = (email)=>{
  return useQuery({
    queryKey: ['getEmailDoctors'],
    queryFn: () => getDoctorsEmail(email),
  })
}
