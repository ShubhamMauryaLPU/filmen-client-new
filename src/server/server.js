import axios from "axios";
const BASE_URL=`https://server-filmen.onrender.com`;
export const SignUp = (data) => {
  return axios.post(`${BASE_URL}/api/auth/register`, data);
};

export const SignIn = (data,co) => {
  return axios.post(`${BASE_URL}/api/auth/login`, data,co);
};

export const SignOut = (data) => {
  return axios.post(`${BASE_URL}/api/auth/logout`, data);
};

export const CheckAuth = () => {
  return axios.get(`${BASE_URL}/api/test/should-be-logged-in`);
};
