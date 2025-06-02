import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export const getProduct = async (id: string) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
};

export const postFavorite = async (id: string) => {
    const response = await api.post(`/favorites`, {
        product_id: id,
        user_id: 1,
    });
    return response.data;
};

export default api;