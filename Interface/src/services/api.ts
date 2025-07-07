import axios from "axios";



const API_URL = import.meta.env.VITE_API_URL ;

export const api = async (ask: string) => {
    try {
        const response = await axios.post(`${API_URL}/treinos/perguntar`, {
            ask
        })
        return response.data.response;

    } catch (err) {
        console.error("Erro ao buscar resposta no servidor:", err);
        throw err
    }
}