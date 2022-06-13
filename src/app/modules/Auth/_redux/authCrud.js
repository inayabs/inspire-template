import axios from "axios";

export const LOGIN_URL = `${process.env.REACT_APP_API_URL}/auth/login`;
export const REGISTER_URL = `${process.env.REACT_APP_API_URL}/auth/register`;
export const REQUEST_PASSWORD_URL = "auth/forgot-password";
export const ME_URL = `${process.env.REACT_APP_API_URL}/auth/user-info`;

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password });
}

export function register(email, password, password_confirmation, firstname, lastname, addressLine, city, state, postCode) {
  return axios.post(REGISTER_URL, { email, password, password_confirmation, firstname, lastname, addressLine, city, state, postCode });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
