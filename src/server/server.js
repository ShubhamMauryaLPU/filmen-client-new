import axios from "axios";

// Base URL for the API
const BASE_URL = "https://server-filmen.onrender.com/";

// Helper function to handle errors globally (optional)
const handleError = (error) => {
  console.error("API Error:", error.response?.data || error.message);
  throw error.response?.data || error.message;
};

// Sign Up API call
export const SignUp = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}api/auth/register`, data);
    return response.data; // Return the response data
  } catch (error) {
    handleError(error); // Handle and rethrow error
  }
};

// Sign In API call
export const SignIn = async (data, config = {}) => {
  try {
    const response = await axios.post(`${BASE_URL}api/auth/login`, data, config);
    return response.data; // Return the response data
  } catch (error) {
    handleError(error); // Handle and rethrow error
  }
};

// Sign Out API call
export const SignOut = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}api/auth/logout`, data);
    return response.data; // Return the response data
  } catch (error) {
    handleError(error); // Handle and rethrow error
  }
};

// Check Authentication Status
export const CheckAuth = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/test/should-be-logged-in`);
    return response.data; // Return the response data
  } catch (error) {
    handleError(error); // Handle and rethrow error
  }
};
