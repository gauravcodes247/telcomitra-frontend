import api from "./api";

export const createTicket = async (data) => {
  const response = await api.post("/ticket/", data);
  return response.data;
};
