import { axiosInstance } from "../api/axiosInstance";
import { toast } from "react-toastify";

export const deleteUser = async (id) => {
    try {
        // await axiosInstance.delete(`/users/${id}/`);
        await toast.promise(
            axiosInstance.delete(`/users/${id}/`),
            {
                pending: 'Eliminando usuario...',
                success: 'Usuario eliminado 👌',
                error: 'Error al eliminar usuario🤯'
            }
        )
    } catch (error) {
        console.error(error);
    }
}