import axios from "axios";

const inquiryApi = axios.create({
  baseURL: "https://corebuso.pythonanywhere.com/client/inquiry",
});

export const getInquiry = async (id) => {
  const response = await inquiryApi.get(`/${id}`);
  return response.data;
};

export const getInquiries = async () => {
  const token = JSON.parse(sessionStorage.getItem("jwt"))
    ? JSON.parse(sessionStorage.getItem("jwt"))
    : null;

  const response = await inquiryApi.get("/", {
    headers: {
      Authorization: "Bearer " + String(token?.access),
    },
  });
  return response.data;
};

export const postInquiry = async (data) => {
  try {
    await inquiryApi.post("/", data);
  } catch (err) {
    console.log(err.data?.status);
    console.log(err.data?.response);
  }
};

export default inquiryApi;
