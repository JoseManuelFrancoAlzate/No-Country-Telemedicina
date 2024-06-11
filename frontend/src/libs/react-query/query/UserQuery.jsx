"use client";

import { getUserDni } from "@/api/Users";
import { useQuery } from "@tanstack/react-query";

export const getUserByDni = (id) => {
  return useQuery({
    queryKey: ["getUserByDni"],
    queryFn: () => getUserDni(id),
  });
};
