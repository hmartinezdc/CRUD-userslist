import { axiosInstance } from "../api/axiosInstance";
import { toast } from "react-toastify";

export const updateUser = async (id, newDataUser) => {
  try {
    await axiosInstance.put(`users/${id}/`, newDataUser);
    toast.success("Se ha actualizado exitosamente",{
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } catch (error) {
    console.error(error);
    toast.error("Error al actualizar usuario", {
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};
