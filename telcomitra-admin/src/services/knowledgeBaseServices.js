import api from "./api";

export const createFAQ = async (faqdata) => {
  const response = await api.post("/knowledge-base/", faqdata);
  return response.data;
};

export const getFAQs = async () => {
  const response = await api.get("/knowledge-base/");
  return response.data;
};
