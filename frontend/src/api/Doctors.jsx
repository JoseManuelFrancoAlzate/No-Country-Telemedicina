import { axiosConfig } from "@/libs/axios/axiosConfig";

export const getDoctors = async () => {
    console.log("Obteniendo doctors");
    const res = await axiosConfig.get(`/doctors`);
    console.log("res.data",res.data)
    return res.data;
  };