import { axiosConfig } from "@/libs/axios/axiosConfig";

export const getSpecialities = async () => {
    console.log("Obteniendo specialities");
    const res = await axiosConfig.get(`/specialities`);
    console.log("res.data",res.data)
    return res.data;
  };
