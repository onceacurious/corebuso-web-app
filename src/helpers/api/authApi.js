import axios, { Axios } from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:8000/account",
});

const tokenApi = axios.create({
  baseURL: "http://localhost:8000/token",
});

const getEmail = async (username) => {
  const res = await authApi.get(`/user-info/${username}`);
  return res.data;
};

export const getUser = async (username, password) => {
  const data = await getEmail(username);
  try {
    const response = await authApi.post("/login/", {
      email: data.email,
      password: password,
    });
    const credentials = {
      response: response,
      user: data,
    };
    return credentials;
  } catch (err) {
    return err;
  }
};

export const getToken = async (username, password) => {
  const res = await tokenApi.post("/", { username, password });
  return res;
};

export const refreshToken = async (refresh) => {
  const res = await tokenApi.post("/refresh/", {refresh});
  return res;
};
