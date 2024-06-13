import { axiosConfig } from "@/libs/axios/axiosConfig";

export const register = async (data) => {
  data["role"] = "USER";
  console.log(data);
  const res = await axiosConfig.post("/auth/signup", data);
  return res.data;
};

export const login = async (data) => {
  console.log(data);
  const res = await axiosConfig.post("/auth/login", data);
  console.log(res.data);
  localStorage.setItem("token",res.data.token)
  localStorage.setItem("user", JSON.stringify(res.data.user))
  return res.data;
};

export const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };



  //DOCTORS

  export const registerDoctors = async (data) => {
    data["role"] = "DOCTOR";
    console.log(data);
    const res = await axiosConfig.post("/auth/signup", data);
    return res.data;
  };
  
   


    /*
ALTER TABLE login ALTER COLUMN role DROP NOT NULL;

    */