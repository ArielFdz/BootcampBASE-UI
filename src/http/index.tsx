import axios from "axios";

const url = import.meta.env.VITE_API_URL as string;

export const httpClient = axios.create({
    baseURL: url,
});