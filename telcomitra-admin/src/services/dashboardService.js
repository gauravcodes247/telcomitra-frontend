import api from "./api";

export const get_dashboard = async () => {
  const response = await api.get("/dashboard");
  return response.data;
};
