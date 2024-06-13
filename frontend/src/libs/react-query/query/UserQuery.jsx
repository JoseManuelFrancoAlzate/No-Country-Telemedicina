"use client";

import { getUserDni,getUserId, getDoctorId } from "@/api/Users";
import { useQuery } from "@tanstack/react-query";

const getUserByDni = (id) => {
  return useQuery({
    queryKey: ["getUserByDni"],
    queryFn: () => getUserDni(id),
  });
};

  const getUserById = (id) => {
    return useQuery({
      queryKey: ["getUserById"],
      queryFn: () => getUserId(id),
    });
  };

 const getDoctorById = (id) => {
    return useQuery({
      queryKey: ["getDoctorById"],
      queryFn: () => getDoctorId(id),
    });
  };

  export { getUserByDni, getUserById, getDoctorById };
