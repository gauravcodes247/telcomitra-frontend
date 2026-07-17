import api from "./api";

export const createFAQ = async (faqdata) => {
  const response = await api.post("/knowledge-base/", faqdata);
  return response.data;
};

export const getFAQs = async () => {
  const response = await api.get("/knowledge-base/");
  return response.data;
};
export const uploadFAQs = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await api.post("/knowledge-base/bulk-upload", formData);
  return response.data;
};
export const deleteFAQ = async (faq_id) => {
  const response = await api.delete(`/knowledge-base/${faq_id}`);
  return response.data;
};
export const updateFAQ = async (faq_id, faqData) => {
  const response = await api.patch(`/knowledge-base/${faq_id}`, faqData);
  return response.data;
};
