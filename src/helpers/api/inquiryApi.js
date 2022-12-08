import axios from "axios";

const inquiryApi = axios.create({
  baseURL: "http://127.0.0.1:8000/client/inquiry",
});

export const getInquiry = async (id) => {
  const response = await inquiryApi.get(`/${id}`);
  return response.data;
};

export const getInquiries = async () => {
  // const { token } = useContext(AuthContext);

  const token = JSON.parse(sessionStorage.getItem("jwt"))
    ? JSON.parse(sessionStorage.getItem("jwt"))
    : null;

  const response = await inquiryApi.get("/", {
    headers: {
      Authorization: "Bearer " + String(token.access),
    },
  });
  return response.data;
};

export default inquiryApi;
