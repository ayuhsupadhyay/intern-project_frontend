import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/routers";

export const getRouters = () => axios.get(API_URL);
export const getRouterById = (id) => axios.get(`${API_URL}/${id}`);
export const addRouter = (router) => axios.post(API_URL, router);
export const updateRouter = (id, router) => axios.put(`${API_URL}/${id}`, router);
export const deleteRouter = (id) => axios.delete(`${API_URL}/${id}`);
