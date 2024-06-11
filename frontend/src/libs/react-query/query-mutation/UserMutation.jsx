"use client";

import { getUserDni } from "@/api/Users";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// export const getUserByDni = () => {
//   const route = useRouter();
//   return useQuery({
//     queryFn: (data) => getUserDni(data),
//     queryKey: ["getUserByDni"],
//     onSuccess: () => {
//       toast.success("User successfully registered", { position: "top-center" });
//       route.push("/");
//     },
//     onError: () => {
//       toast.success("Error to registered", { position: "top-center" });
//     },
//   });
// };
