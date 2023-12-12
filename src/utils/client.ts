import axios, { AxiosInstance } from 'axios';

const client = axios.create({
	baseURL: window.location.origin,
	withCredentials: true,
});

client.interceptors.response.use((res) => res.data);

export default client as AxiosInstance;
