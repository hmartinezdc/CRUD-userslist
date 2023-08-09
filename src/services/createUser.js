import { axiosInstance } from "../api/axiosInstance";
import { toast } from "react-toastify";

export const createUser = async (dataUser) => {
  try {
    await axiosInstance.post("users/", dataUser);
    toast.success("Usuario creado con exito",{
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } catch (error) {
    console.error(error);
    toast.error("Error al crear usuario",{
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};
