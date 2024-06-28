import axios from 'axios';

// Create an Axios instance
const instance = axios.create({
  baseURL: '/'
});

// Add a request interceptor
instance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default instance;
