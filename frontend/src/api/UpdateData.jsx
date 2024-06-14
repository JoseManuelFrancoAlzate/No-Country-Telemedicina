import { axiosConfig } from "@/libs/axios/axiosConfig";

export const uptade = async(data)=>{
    try {
        console.log('Actualizando datos')
        const res = await axiosConfig.put('/doctors',data);
        console.log('res.data', res.data)
        return res.data
    } catch (error) {
        console.error('Error al actualizar datos', error);
        throw error;
    }
}

export const uptadeUser = async(data)=>{
    try {
        console.log('Actualizando datos')
        const res = await axiosConfig.put('/users',data);
        console.log('res.data', res.data)
        return res.data
    } catch (error) {
        console.error('Error al actualizar datos', error);
        throw error;
    }
}