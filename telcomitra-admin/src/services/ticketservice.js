import api from "./api";

export const get_tickets = async () => {
  const response = await api.get("/ticket/");
  return response.data;
};

export const get_ticket_by_id = async (ticket_id) => {
  const response = await api.get(`/ticket/${ticket_id}`);
  return response.data;
};

export const update_ticket_status = async (ticket_id, status) => {
  console.log("API payload:", ticket_id, status);
  const response = await api.patch(`/ticket/${ticket_id}/status`, status);
  return response.data;
};
