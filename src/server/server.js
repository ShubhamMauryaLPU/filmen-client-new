import axios from "axios";

// const BASE_URL = "https://server-filmen.onrender.com/";
const BASE_URL = "http://localhost:3500/";
// console.log("Base URL:", BASE_URL);
export const SignUp = (data) => {
  return axios.post(`${BASE_URL}api/auth/register`, data);
};

export const SignIn = (data, config) => {
  return axios.post(`${BASE_URL}api/auth/login`, data, config);
};

export const SignOut = (data) => {
  return axios.post(`${BASE_URL}api/auth/logout`, data);
};
export const CheckAuth = () => {
  return axios.get(`${BASE_URL}api/test/should-be-logged-in`);
};
