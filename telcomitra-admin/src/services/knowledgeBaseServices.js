import api from "./api";

export const createFAQ = async (faqdata) => {
  const response = await api.post("/knowledge-base/", faqdata);
  return response.data;
};
