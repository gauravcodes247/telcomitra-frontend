import api from "./api";

export const admin_login = async (login_creds) => {
  const response = await api.post("/auth/login", login_creds);
  return response.data;
};
