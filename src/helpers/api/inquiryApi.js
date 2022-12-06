import axios from "axios";

const inquiryApi = axios.create({
  baseURL: "http://127.0.0.1:8000/client/inquiry",
});

export const getInquiry = async (id) => {
  const response = await inquiryApi.get(`/${id}`);
  return response.data;
};

export const getInquiries = async () => {
  const response = await inquiryApi.get("/");
  return response.data;
};

export default inquiryApi;
