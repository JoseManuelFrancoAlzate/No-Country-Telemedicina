"use client";

import { getDoctors } from "@/api/Doctors";
import { useQuery } from "@tanstack/react-query";

export const getAllDoctors = () => {
  return useQuery({
    queryKey: ["getDoctors"],
    
    queryFn: () => getDoctors(),
  });
};
