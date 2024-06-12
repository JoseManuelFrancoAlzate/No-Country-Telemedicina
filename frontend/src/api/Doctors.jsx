import { axiosConfig } from "@/libs/axios/axiosConfig";

export const getDoctors = async () => {
    console.log("Obteniendo doctors");
    const res = await axiosConfig.get(`/doctors`);
    console.log("res.data",res.data)
    return res.data;
  };

  export const getDoctorsEmail = async(email)=>{
    try {
      console.log('Obteniendo Doctor')
      const res = await axiosConfig.get(`/doctors/?email=${email}`);
      return res.data;
    } catch (error) {
      console.error('Error al obtener el email', error);
      throw error;
    }
  }