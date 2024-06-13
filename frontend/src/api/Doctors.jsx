import { axiosConfig } from "@/libs/axios/axiosConfig";

export const getDoctors = async () => {
    console.log("Obteniendo doctors");
    const res = await axiosConfig.get(`/doctors`);
    console.log("res.data",res.data)
    return res.data;
  };

  export const getDoctorId = async(id)=>{
    try {
      console.log('Obteniendo Doctor')
      const res = await axiosConfig.get(`/doctors/profile/?id=${id}`);
      return res.data;
    } catch (error) {
      console.error('Error al obtener el email', error);
      throw error;
    }
  }