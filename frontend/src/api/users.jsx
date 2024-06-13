import { axiosConfig } from "@/libs/axios/axiosConfig";

export const  getUserDni = async (email) => {
  try {
    console.log("Obteniendo email para el correo:", email);
    const res = await axiosConfig.get(`/users/profile/?email=${email}`);
    return res.data;
  } catch (error) {
    console.error("Error al obtener el ID:", error);
    throw error; // Puedes manejar el error según tus necesidades
  }
};

export const getUserId = async (id) => {
  try {
    console.log("Obteniendo id para el correo id:", id);
    const res = await axiosConfig.get(`/users/profile/?id=${id}`);
    return res.data;
  } catch (error) {
    console.error("Error al obtener el ID2:", error);
    throw error; // Puedes manejar el error según tus necesidades
  }
};

export const getDoctorId = async (id) => {
  try {
    console.log("Obteniendo id para el correo doctors id:", id);
    const res = await axiosConfig.get(`/doctors/profile/?id=${id}`);
    return res.data;
  } catch (error) {
    console.error("Error al obtener el IDoctors2:", error);
    throw error; // Puedes manejar el error según tus necesidades
  }
};


