import { axiosConfig } from "@/libs/axios/axiosConfig";

export const getUserDni = async (email) => {
  try {
    console.log("Obteniendo id para el correo:", email);
    const res = await axiosConfig.get(`/users/profile/?email=${email}`);
    return res.data;
  } catch (error) {
    console.error("Error al obtener el ID:", error);
    throw error; // Puedes manejar el error según tus necesidades
  }
};
