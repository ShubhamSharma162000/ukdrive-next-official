import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!error.response || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (originalRequest.url.includes("/auth/refresh")) {
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      originalRequest._retry = true;

      try {
        await api.get("/api/v1/auth/refresh");
        return api(originalRequest);
      } catch (refreshError) {
        console.log("Refresh token failed");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
