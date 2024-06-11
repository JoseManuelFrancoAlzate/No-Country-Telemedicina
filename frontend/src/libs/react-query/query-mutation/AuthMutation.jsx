"use client";

import { register,login, logout} from "@/api/Auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: (data) => register(data),
    mutationKey: ["register"],
    onSuccess: () => {
      toast.success("User successfully registered", { position: "top-center" });
      route.push("/");
    },
    onError: () => {
      toast.success("Error to registered", { position: "top-center" });
    },
  });
};

export const useLogin = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: (data) => login(data),
    mutationKey: ["login"],
    onSuccess: (response) => {
      const idUser = response.user.id
      toast.success("User login successfully", { position: "top-center" });
      route.push(`/userProfile/${idUser}`);
    },
    onError: () => {
      toast.success("Error to login", { position: "top-center" });
    },
  });
};




//la base de datos era codigo o tuviste que tocar algp externo?
//el back en clases