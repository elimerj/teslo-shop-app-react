import axios from 'axios';

const tesloApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// TODO  interceptores
tesloApi.interceptors.request.use((config) => {
  //Middleware
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { tesloApi };
